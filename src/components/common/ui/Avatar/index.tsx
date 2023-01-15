import { memo } from 'react';
import { Skeleton, Avatar as MantineAvatar } from '@mantine/core';
import { isMandarinInput, getFirstLetter } from '@utils/username';

type MantineAvatarProps = Parameters<typeof MantineAvatar<'div'>>[0];

type Props = {
  firstName: string | undefined;
  lastName: string | undefined;
  skeletonHeight: number;
} & MantineAvatarProps;

function Avatar(props: Props) {
  const { firstName, lastName, skeletonHeight, ...rest } = props;
  const isLoading = firstName === undefined && lastName === undefined;

  if (isLoading) return <Skeleton height={skeletonHeight} circle mx="auto" />;

  const isMandarin = isMandarinInput(`${lastName}${firstName}`);
  const displayedName = isMandarin
    ? firstName?.slice(firstName.length - 2)
    : getFirstLetter(`${firstName} ${lastName}`);

  return (
    <MantineAvatar color="cyan" radius="xl" {...rest}>
      {displayedName}
    </MantineAvatar>
  );
}

export default memo(Avatar);
