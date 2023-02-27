const layoutConfig = {
  facebook: {
    link: 'https://www.facebook.com/groups/174362969268953',
    color: '#1778F2',
  },

  github: {
    lopen: 'https://github.com/lopentu',
    organization: 'https://github.com/Taiwan-Social-Media-Corpus',
    discussion: 'https://github.com/Taiwan-Social-Media-Corpus/corpus-frontend/discussions',
    releases: 'https://github.com/Taiwan-Social-Media-Corpus/corpus-frontend/releases',
  },

  mdx: {
    breakpoint: 1080,
    contentWidth: 820,
    tableOfContentsWidth: 260,
    tabHeight: 46,
    tabHeightMobile: 38,
  },
  header: { height: 60 },
  navbar: { width: 260, breakpoint: 760 },
  footer: { height: 400, heightTablet: 460, heightMobile: 320 },
} as const;

export default layoutConfig;
