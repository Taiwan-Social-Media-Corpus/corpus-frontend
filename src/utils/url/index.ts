const decode = (encoded: string): string | false => {
  try {
    return decodeURIComponent(window.atob(encoded));
  } catch (error) {
    return false;
  }
};

export default decode;
