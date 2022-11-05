function getRedirectURL(url: string, asPath: string) {
  const urlParams = new URLSearchParams(asPath);
  return urlParams.get(url);
}

export default getRedirectURL;
