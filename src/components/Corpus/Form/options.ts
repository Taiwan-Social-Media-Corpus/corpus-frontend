const mediaOptions = [
  { label: 'All', value: 'all' },
  { label: 'PTT', value: 'ptt', image: '/ptt-logo.png' },
  { label: 'Dcard', value: 'dcard', image: '/dcard-logo.png' },
];

function createPostTypeOptions(media: string) {
  const options = [
    { label: 'All', value: 'all' },
    { label: 'Title', value: 'title' },
    { label: 'Body', value: 'body' },
    { label: 'Comment', value: 'comment' },
  ];

  switch (media) {
    case 'ptt': {
      const pttOptions = [
        { label: 'commentPos', value: 'commentPos' },
        { label: 'commentNeg', value: 'commentNeg' },
        { label: 'commentNeu', value: 'commentNeu' },
      ];
      return options.concat(pttOptions);
    }
    case 'dcard': {
      const dcardOptions = [
        { label: 'commentPos', value: 'commentPos' },
        { label: 'commentMale', value: 'commentMale' },
        { label: 'commentFemale', value: 'commentFemale' },
      ];
      return options.concat(dcardOptions);
    }
    default:
      return options;
  }
}

export { mediaOptions, createPostTypeOptions };
