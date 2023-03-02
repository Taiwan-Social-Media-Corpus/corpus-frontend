import { memo, useState } from 'react';
import { UserData } from '@contexts/User/types';
import { Button, Group, Skeleton } from '@mantine/core';
import Edit from './Edit';

type Props = { userData: UserData };

function Email(props: Props) {
  const { userData } = props;
  const [modify, setModify] = useState(false);
  const email = userData.email as string;

  if (!modify) {
    return (
      <Group
        position="apart"
        sx={(theme) => ({
          [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
            textAlign: 'center',
          },
        })}
      >
        {email !== undefined ? (
          `目前的電子郵件地址：${email}`
        ) : (
          <Skeleton height={13} radius="xl" />
        )}
        <Button onClick={() => setModify(true)}>編輯</Button>
      </Group>
    );
  }

  return <Edit originalEmail={email} setModify={setModify} />;
}

export default memo(Email);
