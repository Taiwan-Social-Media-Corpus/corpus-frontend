function isObject(value: any) {
  return value != null && typeof value === 'object' && Array.isArray(value) === false;
}

function isEmptyObject(value: object | null) {
  if (!value) return false;
  return isObject(value) && Object.entries(value).length === 0;
}

function sanitizeIP(ip: string) {
  return ip.replace('::ffff:', '');
}

function getRouteFromPathname(pathname: string) {
  return pathname.replace(/^\/([^/]*).*$/, '$1');
}

export { isObject, isEmptyObject, sanitizeIP, getRouteFromPathname };
