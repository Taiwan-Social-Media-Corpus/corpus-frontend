import { memo } from 'react';
import { IconProps } from 'types/mantine';

function FacebookIcon(props: IconProps) {
  const { size, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      fill="none"
      width={size}
      height={size}
      {...rest}
    >
      <path
        fill="currentColor"
        d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"
      />
    </svg>
  );
}

export default memo(FacebookIcon);
