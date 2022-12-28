const defaultOptions = [
  { label: 'All', value: 'all' },
  { label: 'Title', value: 'title' },
  { label: 'Body', value: 'body' },
  { label: 'Comment', value: 'comment' },
];

const mediaPostTypes = {
  ptt: [
    { label: 'commentPos', value: 'commentPos' },
    { label: 'commentNeg', value: 'commentNeg' },
    { label: 'commentNeu', value: 'commentNeu' },
  ],
  dcard: [
    { label: 'commentPos', value: 'commentPos' },
    { label: 'commentMale', value: 'commentMale' },
    { label: 'commentFemale', value: 'commentFemale' },
  ],
};

function createPostTypeOptions(media: string) {
  if (media === 'all') return defaultOptions;
  const additionalOptions = mediaPostTypes[media as keyof typeof mediaPostTypes];
  return defaultOptions.concat(additionalOptions);
}

export default createPostTypeOptions;
