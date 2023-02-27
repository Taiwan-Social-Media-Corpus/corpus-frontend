import { z } from 'zod';
import useForm from '@hooks/Form';
import Route from '@config/routes';
import { memo, useState } from 'react';
import { useRouter } from 'next/router';
import { closeAllModals } from '@mantine/modals';
import { IconCircleCheck } from '@tabler/icons-react';
import createAPIToken from '@services/user/apiToken/create';
import { useAPITokens } from '@services/user/apiToken/read';
import { Stack, Text, useMantineTheme } from '@mantine/core';

type FieldValues = { confirmText: string };

function RequestForm() {
  const router = useRouter();
  const { mutate } = useAPITokens();
  const [success, setSuccess] = useState(false);
  const theme = useMantineTheme();
  const color = theme.colors.blue[9];

  const [Form, methods] = useForm<FieldValues>({
    defaultValues: { confirmText: '' },
    schema: z.object({
      confirmText: z.string(),
    }),
    controllers: {
      confirmText: {
        control: 'text-input',
        name: 'confirmText',
        label: (
          <>
            <Text mb={10} size="md">
              Please keep your token{' '}
              <Text component="span" fw={700} size="md">
                private
              </Text>
              ! Do not store your token in publicly available code or repositories that are
              accessible to the public.
            </Text>
            <Text span sx={{ cursor: 'text' }} size="md">
              Please type{' '}
              <Text component="span" fw={700} sx={{ cursor: 'text' }} size="md">
                Corpus/api-token
              </Text>{' '}
              to confirm.
            </Text>
          </>
        ),
        placeholder: 'Corpus/api-token',
        autoFocus: true,
      },
    },
    onSubmit: async () => {
      const [result, error] = await createAPIToken();

      if (result === null || error) {
        return router.push(Route.serverError, { pathname: router.pathname });
      }

      if (result.msg === 'exceeded apiToken rate') {
        methods.setError('confirmText', { message: '超過申請上限，請於 24 小時後再試。' });
        return setTimeout(() => {
          closeAllModals();
        }, 1000);
      }

      mutate();
      setSuccess(true);
      return setTimeout(() => {
        router.replace(router.asPath);
        closeAllModals();
      }, 1000);
    },
  });

  const hasInputError = methods.formState.errors.confirmText !== undefined;
  const shouldDisable = methods.watch('confirmText') !== 'Corpus/api-token';

  if (success) {
    return (
      <Stack align="center" spacing={10}>
        <IconCircleCheck size={80} stroke={1.5} color={theme.colors.teal[7]} />
        <Text color={color} weight="bold" size="xl">
          已成功建立！
        </Text>
      </Stack>
    );
  }

  return (
    <Form>
      <Form.Button
        loading={methods.formState.isSubmitting}
        fullWidth
        mt={hasInputError ? 35 : 'md'}
        disabled={shouldDisable}
      >
        確認
      </Form.Button>
    </Form>
  );
}

export default memo(RequestForm);
