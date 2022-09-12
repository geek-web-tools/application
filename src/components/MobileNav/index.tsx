/*
 * @Description: your description
 * @Module: module.name
 * @Author: draco
 * @Email: draco.coder@gmail.com
 * @Github: https://github.com/draco-china
 * @Date: 2022-09-12 17:28:38
 * @LastEditTime: 2022-09-12 17:41:40
 */
import { Link, useAppData, useLocation, useModel } from 'alita';

const MobileNav = () => {
  const { nav, toggle, icons } = useModel('useMenu');

  const app = useAppData();
  const { routes } = app.clientRoutes[0];
  const { pathname } = useLocation();

  return (
    <div className="sm:hidden">
      {nav && <div className="fixed top-0 left-0 z-50 w-screen h-screen" onClick={toggle} />}
      <div
        className={`fixed top-0 left-0 z-50  w-80 max-h-screen overflow-auto transition ${
          nav ? 'translate-x-0' : '-translate-x-80'
        }`}
      >
        <div
          className={`h-screen lg:block shadow-lg overflow-hidden transition-all ${
            nav ? 'w-80' : 'w-0'
          }`}
        >
          <div className="bg-primary-0 h-full rounded-2xl overflow-auto">
            <div className="flex items-center justify-center pt-6">
              <svg
                className="text-primary-500 "
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
              >
                <path d="M438.4 849.1l222.7-646.7c0.2-0.5 0.3-1.1 0.4-1.6L438.4 849.1z" />
                <path d="M661.2 168.7h-67.5c-3.4 0-6.5 2.2-7.6 5.4L354.7 846c-0.3 0.8-0.4 1.7-0.4 2.6 0 4.4 3.6 8 8 8h67.8c3.4 0 6.5-2.2 7.6-5.4l0.7-2.1 223.1-648.3 7.4-21.4c0.3-0.8 0.4-1.7 0.4-2.6-0.1-4.5-3.6-8.1-8.1-8.1zM954.6 502.1c-0.8-1-1.7-1.9-2.7-2.7l-219-171.3c-3.5-2.7-8.5-2.1-11.2 1.4-1.1 1.4-1.7 3.1-1.7 4.9v81.3c0 2.5 1.1 4.8 3.1 6.3l115 90-115 90c-1.9 1.5-3.1 3.8-3.1 6.3v81.3c0 4.4 3.6 8 8 8 1.8 0 3.5-0.6 4.9-1.7l219-171.3c6.9-5.4 8.2-15.5 2.7-22.5zM291.1 328.1l-219 171.3c-1 0.8-1.9 1.7-2.7 2.7-5.4 7-4.2 17 2.7 22.5l219 171.3c1.4 1.1 3.1 1.7 4.9 1.7 4.4 0 8-3.6 8-8v-81.3c0-2.5-1.1-4.8-3.1-6.3l-115-90 115-90c1.9-1.5 3.1-3.8 3.1-6.3v-81.3c0-1.8-0.6-3.5-1.7-4.9-2.7-3.5-7.7-4.1-11.2-1.4z" />
              </svg>
            </div>
            <nav className="mt-6">
              {routes?.map((route: any) => (
                <Link
                  key={route.path}
                  className={`w-full font-thin uppercase flex items-center p-4 my-2 transition-colors duration-200 justify-start ${
                    route.path === pathname
                      ? 'text-primary-500 bg-gradient-to-r from-white to-primary-100 border-r-4 border-primary-500 dark:from-gray-700 dark:to-gray-800'
                      : 'text-gray-400 hover:text-primary-500'
                  }`}
                  to={route.path || '/'}
                  onClick={toggle}
                >
                  <span className="text-left">{icons[route.icon as string]}</span>
                  <span className="mx-4 text-sm font-normal">{route.title}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
