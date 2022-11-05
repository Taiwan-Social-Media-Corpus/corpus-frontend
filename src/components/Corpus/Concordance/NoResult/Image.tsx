import { IconProps } from 'types';

function NoResultImage(props: IconProps) {
  const { size, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      xmlSpace="preserve"
      width={size}
      height={size}
      {...rest}
    >
      <path
        fill="currentColor"
        d="M489.1 989.9c-71.2 0-145.1 0-188.9-2.7-73.9-2.7-131.4-16.3-194.4-68C56.5 878.3 23.7 807.5 15.5 715 10 655.1 10 598 10 532.7V448.4c0-57.2 0-111.6 5.5-163.3C26.4 192.6 56.6 124.5 105.8 81c63-51.7 120.4-65.3 194.4-68 43.8-2.7 106.8-2.7 186.1-2.7H541c68.4 0 120.4 2.7 158.8 2.7 73.9 2.7 131.4 16.3 194.4 68 49.3 40.8 82.1 111.6 90.3 204.1 5.5 57.2 5.5 117 5.5 179.6V530c0 62.6 0 122.5-5.5 179.6-11 92.5-41.1 160.6-90.3 204.1-63 51.7-120.4 65.3-194.4 68-30.1 5.5-120.4 8.2-210.7 8.2zm-424.4-460v5.4c0 62.6 0 119.7 5.5 174.2 5.5 54.4 21.9 127.9 71.2 166 52 43.5 98.5 54.4 164.2 57.2 93.1 5.4 336.7 2.7 394.2 0C765.5 930 812 919.1 864 875.5c49.3-40.8 65.7-114.3 71.2-166 5.5-54.4 5.5-111.6 5.5-174.2V470c0-62.6 0-119.7-5.5-174.2-5.5-54.4-21.9-127.9-71.2-166-52-43.5-98.5-54.4-164.2-57.2-35.6-2.7-90.3-2.7-156-2.7h-54.7c-79.4 0-142.3 0-183.4 2.7-65.7 2.7-112.2 13.6-164.2 57.2-49.3 40.8-65.7 114.3-71.2 166-5.5 49-5.5 100.7-5.5 157.8v76.3z"
      />
      <path
        fill="currentColor"
        d="m166 391.1 202.6-51.7c8.2-2.7 13.7 2.7 16.4 10.9l2.7 5.4c2.7 8.2-2.7 13.6-10.9 16.3l-202.6 51.7c-8.2 2.7-13.7-2.7-16.4-10.9l-2.7-5.4c0-8.1 2.7-16.3 10.9-16.3z"
      />
      <path
        fill="currentColor"
        d="M171.5 295.9 376.8 334c8.2 0 13.7 8.2 10.9 16.3v5.4c0 8.2-8.2 13.6-16.4 10.9L166 328.5c-8.2 0-13.7-8.2-11-16.3v-5.4c2.8-5.5 8.3-10.9 16.5-10.9zM628.7 336.7 834 295.9c8.2-2.7 13.7 2.7 16.4 10.9l2.7 5.4c2.7 8.2-2.7 13.6-11 16.3l-205.3 40.8c-8.2 2.7-13.7-2.7-16.4-10.9l-2.7-5.4c-2.7-8.1 2.7-13.6 11-16.3z"
      />
      <path
        fill="currentColor"
        d="m839.4 391.1-202.6-51.7c-8.2-2.7-13.7 2.7-16.4 10.9l-2.7 5.4c-2.7 8.2 2.7 16.3 11 16.3l202.6 51.7c8.2 2.7 13.7-2.7 16.4-10.9l2.7-5.4c0-8.1-2.7-16.3-11-16.3zM278.3 864.7h35.6v54.4h-35.6v-54.4zM278.3 783h35.6v54.4h-35.6V783zM278.3 385.7h35.6v370.1h-35.6V385.7zM699.8 864.7h35.6v54.4h-35.6v-54.4zM699.8 783h35.6v54.4h-35.6V783z"
      />
      <path
        fill="currentColor"
        d="M699.8 385.7h35.6v370.1h-35.6V385.7zM639.6 731.3c-5.5 0-8.2-2.7-13.7-5.4-128.7-106.1-243.6-10.9-249.1-8.2-8.2 8.2-21.9 5.4-30.1-2.7-8.2-8.2-5.5-21.8 2.7-29.9 2.7 0 147.8-122.5 303.9 5.4 8.2 8.2 11 19 2.7 29.9-2.7 8.2-8.2 10.9-16.4 10.9z"
      />
    </svg>
  );
}

export default NoResultImage;
