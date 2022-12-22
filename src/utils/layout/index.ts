import Route from '@config/routes';

function shouldIncludeNavbar(path: string) {
  const includeNavbarPaths = [Route.about.root, Route.guide];
  return includeNavbarPaths.some((route) => path.startsWith(route));
}

export default shouldIncludeNavbar;
