import { useUser } from '@contexts/User';
import { useState, useMemo, memo } from 'react';
import { Container, Title, Accordion } from '@mantine/core';
import Email from './Email';
import Password from './Password';
import useStyles from './Security.styles';

function Security() {
  const { classes } = useStyles();
  const { user } = useUser();
  const [value, setValue] = useState<string | null>(null);

  const accordionItems = useMemo(
    () =>
      [
        {
          value: 'email',
          title: value !== 'email' ? `目前電子郵件：${user.data.email}` : '聯絡信箱',
          panel: <Email userData={user.data} />,
        },
        {
          value: 'password',
          title: value !== 'password' ? '更改密碼' : '建議使用與其他服務不同的高強度密碼',
          panel: <Password />,
        },
      ].map((accordionItem, index) => (
        <Accordion.Item
          className={classes.item}
          value={accordionItem.value}
          key={`${accordionItem.value}-${index}`}
        >
          <Accordion.Control>{accordionItem.title}</Accordion.Control>
          <Accordion.Panel>{accordionItem.panel}</Accordion.Panel>
        </Accordion.Item>
      )),
    [value, user.data, classes.item]
  );

  return (
    <Container size="sm" className={classes.wrapper}>
      <Title align="center" className={classes.title}>
        帳號安全和登入
      </Title>

      <Accordion variant="separated" value={value} onChange={setValue}>
        {accordionItems}
      </Accordion>
    </Container>
  );
}

export default memo(Security);
