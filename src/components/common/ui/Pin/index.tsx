import { memo } from 'react';
import useForm from '@hooks/Form';
import { AlertProvider } from '@contexts/Alert';
import { Container, Text, Group } from '@mantine/core';
import { PinCode, PinContainerProps } from 'types/form';
import { generateBoxValue } from '@components/common/ui/Form/components/utils/pin';
import useStyles from './Pin.styles';
import PinHelper from './Controls/PinHelper';
import AutoSubmit from './Controls/AutoSubmit';

function PinContainer(props: PinContainerProps) {
  const { classes } = useStyles();
  const { helper, onSubmit } = props;
  const length = 6;

  const [PinForm, methods] = useForm<PinCode>({
    defaultValues: { code: generateBoxValue(length) },
    controllers: {
      code: {
        control: 'pin-input',
        label: '',
        name: 'code',
        length,
        otp: true,
      },
    },
    onSubmit: () => {},
  });

  return (
    <AlertProvider>
      <Container>
        <PinForm>
          <AutoSubmit onSubmit={(alert, dispatch) => onSubmit(methods, alert, dispatch)} />
        </PinForm>
        <Group mt="xl" spacing={0} position="apart" px={1}>
          <Text align="center" size="md" className={classes.control}>
            未收到驗證碼？
          </Text>
          <Text size="md" align="center" className={classes.control}>
            <PinHelper helper={helper} />
          </Text>
        </Group>
      </Container>
    </AlertProvider>
  );
}

export default memo(PinContainer);
