import Route from '@config/routes';
import { useRouter } from 'next/router';
import { ChangeEvent, memo } from 'react';
import { ConcordanceParams } from 'types/corpus';
import { IconCheck, IconX } from '@tabler/icons';
import { Switch, useMantineTheme } from '@mantine/core';
import { HelperButtonProps } from '../../types';

type Props = Pick<HelperButtonProps, 'showPos' | 'setShowPos'>;

function PosController(props: Props) {
  const { showPos, setShowPos } = props;
  const router = useRouter();
  const theme = useMantineTheme();

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setShowPos(event.currentTarget.checked);
    const { page, e } = router.query as ConcordanceParams;
    const pushUrl = `${Route.corpus.concordance}?page=${page}&pos=${event.currentTarget.checked}&e=${e}`;
    router.push(pushUrl);
  };

  const thumbIcon = showPos ? (
    <IconCheck size={12} color={theme.colors.teal[theme.fn.primaryShade()]} stroke={3} />
  ) : (
    <IconX size={12} color={theme.colors.red[theme.fn.primaryShade()]} stroke={3} />
  );

  return (
    <Switch
      checked={showPos}
      onChange={handleOnChange}
      color="teal"
      size="md"
      label="Show Pos"
      description="  "
      mt={5}
      thumbIcon={thumbIcon}
    />
  );
}

export default memo(PosController);
