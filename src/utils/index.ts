function isObject(value: any) {
  return value != null && typeof value === 'object' && Array.isArray(value) === false;
}

function isEmptyObject(value: object | null) {
  if (!value) return false;
  return isObject(value) && Object.entries(value).length === 0;
}

function isObjectsEqual(obj1: { [key: string]: any }, obj2: { [key: string]: any }) {
  const obj1Props = Object.getOwnPropertyNames(obj1);
  const obj2Props = Object.getOwnPropertyNames(obj2);

  if (obj1Props.length !== obj2Props.length) return false;

  for (let i = 0; i < obj1Props.length; i += 1) {
    const propName = obj1Props[i];

    if (obj1[propName] !== obj2[propName]) {
      return false;
    }
  }

  return true;
}

function sanitizeIP(ip: string) {
  return ip.replace('::ffff:', '');
}

function getRouteFromPathname(pathname: string) {
  return pathname.replace(/^\/([^/]*).*$/, '$1');
}

export { isObject, isEmptyObject, isObjectsEqual, sanitizeIP, getRouteFromPathname };
