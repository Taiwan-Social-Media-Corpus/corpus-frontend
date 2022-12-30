import { z } from 'zod';
import Link from 'next/link';
import { memo } from 'react';
import { User } from 'types/user';
import useForm from '@hooks/Form';
import Route from '@config/routes';
import { useRouter } from 'next/router';
import { IconArrowLeft } from '@tabler/icons';
import identify from '@services/user/recovery/identify';
import { Group, Anchor, Center, Box } from '@mantine/core';
import useStyles from './Identification.styles';

type FieldValues = Pick<User, 'email'>;

function Identification() {
  const router = useRouter();
  const { classes } = useStyles();

  const [Form, methods] = useForm<FieldValues>({
    defaultValues: {
      email: '',
    },
    schema: z.object({
      email: z.string().min(1, '請填寫欄位以搜尋你的帳號！').email('請確認 email 格式'),
    }),
    onSubmit: async (data) => {
      const { setError } = methods;
      const { email } = data;
      const [result, error] = await identify({ email });

      if (result == null || error) {
        router.push('/500', { pathname: router.asPath });
        return null;
      }

      if (result.status === 'failed') {
        switch (result.msg) {
          case 'exceeded sending rate': {
            return setError('email', {
              message: '超過信件寄送上限，請於 24 小時後再試。',
            });
          }
          case 'too much recovery': {
            return setError('email', {
              message: '由於安全性問題，目前該帳號已經鎖定。',
            });
          }
          case 'too many errors': {
            return setError('email', {
              message: '錯誤次數過多，請稍候再試。',
            });
          }
          default:
            return setError('email', {
              message: '你的搜尋未傳回任何結果，請用其他資訊再試一次。',
            });
        }
      }

      router.replace({
        pathname: Route.recovery.validation,
      });

      return null;
    },
    controllers: {
      email: {
        label: '電子信箱',
        name: 'email',
        control: 'text-input',
        withAsterisk: true,
      },
    },
  });

  return (
    <>
      <Form />
      <Group position="apart" className={classes.controls}>
        <Anchor
          component={Link}
          color="dimmed"
          href={Route.login}
          size="sm"
          className={classes.control}
        >
          <Center inline>
            <IconArrowLeft size={16} />
            <Box ml={5}>回首頁</Box>
          </Center>
        </Anchor>
        <Form.Button
          className={classes.control}
          type="submit"
          loading={methods.formState.isSubmitting}
        >
          重設密碼
        </Form.Button>
      </Group>
    </>
  );
}

export default memo(Identification);
