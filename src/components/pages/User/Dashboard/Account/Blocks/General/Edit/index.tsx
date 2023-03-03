import useForm from '@hooks/Form';
import Route from '@config/routes';
import { useRouter } from 'next/router';
import { openModal } from '@mantine/modals';
import { UserData } from '@contexts/User/types';
import { Dispatch, SetStateAction } from 'react';
import { Button, Group, Stack } from '@mantine/core';
import { isObjectsEqual, compareObjects } from '@utils';
import Validation from './Validation';

type Props = {
  userData: UserData;
  setModify: Dispatch<SetStateAction<boolean>>;
};

type FieldValues = Required<Pick<UserData, 'firstName' | 'lastName'>>;

function Edit(props: Props) {
  const { userData, setModify } = props;
  const { firstName, lastName } = userData;
  const router = useRouter();

  const [Form, methods] = useForm<FieldValues>({
    defaultValues: {
      lastName: lastName || '',
      firstName: firstName || '',
    },
    controllers: {
      lastName: {
        control: 'text-input',
        name: 'lastName',
        label: '姓氏',
        withAsterisk: true,
        col: {
          md: 6,
        },
      },
      firstName: {
        control: 'text-input',
        name: 'firstName',
        label: '名字',
        withAsterisk: true,
        col: {
          md: 6,
        },
      },
    },
    onSubmit: async (data) => {
      const prevData = { firstName, lastName };
      const isFormDirty = isObjectsEqual(data, prevData);

      if (isFormDirty) {
        return router.push(Route.dashboard.account, { query: router.query });
      }

      const payload = compareObjects(prevData, data);
      openModal({
        title: '請輸入密碼來完成修改',
        zIndex: 99999,
        overlayOpacity: 0.55,
        children: <Validation payload={payload} />,
      });
      return null;
    },
  });

  return (
    <Stack spacing={30} mt={25}>
      <Form />
      <Group mt={10} sx={{ justifyContent: 'flex-end' }}>
        <Button
          sx={{
            '&:hover': {
              background: '#ccd0d5',
            },
            backgroundColor: '#ccc',
            color: 'black',
          }}
          onClick={() => setModify(false)}
        >
          取消
        </Button>
        <Form.Button loading={methods.formState.isSubmitting}>確認</Form.Button>
      </Group>
    </Stack>
  );
}

export default Edit;
