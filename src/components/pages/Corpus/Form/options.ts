const mediaOptions = [
  { label: 'All', value: 'all' },
  { label: 'PTT', value: 'ptt', image: '/ptt-logo.png' },
  { label: 'Dcard', value: 'dcard', image: '/dcard-logo.png' },
];

const postTypeOptions = [
  { label: 'All', value: 'all' },
  { label: 'Title', value: 'title' },
  { label: 'Body', value: 'body' },
  { label: 'Comment', value: 'comment' },
];

const postTypeFactories = {
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
  const additionalOptions = postTypeFactories[media as keyof typeof postTypeFactories] || [];
  return postTypeOptions.concat(additionalOptions);
}

export { mediaOptions, createPostTypeOptions };
