import Route from '@config/routes';

function shouldIncludeNavbar(path: string) {
  const includeNavbarPaths = [Route.ABOUT, Route.GUIDE];
  return includeNavbarPaths.some((route) => path.startsWith(route));
}

export default shouldIncludeNavbar;
