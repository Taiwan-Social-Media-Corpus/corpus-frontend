import { useUser } from '@contexts/User';
import { useMediaQuery } from '@mantine/hooks';
import { memo, useMemo, useState } from 'react';
import { Container, Title, Skeleton, Table, Box, Button } from '@mantine/core';
import Edit from './Edit';
import useStyles from './General.styles';

function General() {
  const { user } = useUser();
  const { fullName } = user.data;
  const { classes, theme } = useStyles();
  const [modify, setModify] = useState(false);
  const loading = <Skeleton height={20} mx="auto" />;
  const controlSize = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`) ? 'sm' : 'lg';

  const rows = useMemo(
    () =>
      [{ label: '姓名', value: fullName || loading }].map((element, index) => (
        <tr key={`${element.label}-${index}`}>
          <td>{element.label}</td>
          <td>{element.value}</td>
        </tr>
      )),
    [user.data]
  );

  return (
    <Container size="sm" className={classes.wrapper}>
      <Title align="center" className={classes.title}>
        一般帳號設定
      </Title>

      {modify ? (
        <Edit userData={user.data} setModify={setModify} />
      ) : (
        <>
          <Table
            verticalSpacing="md"
            horizontalSpacing="lg"
            highlightOnHover
            fontSize={controlSize}
            sx={{ cursor: 'pointer' }}
          >
            <thead>
              <tr>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
          <Box
            sx={(boxTheme) => ({
              textAlign: 'center',
              padding: boxTheme.spacing.xl,
            })}
          >
            <Button onClick={() => setModify(true)}>修改個人資料</Button>
          </Box>
        </>
      )}
    </Container>
  );
}

export default memo(General);
