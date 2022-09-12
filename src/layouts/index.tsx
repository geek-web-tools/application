import { Outlet, useModel, useAppData, Link, useLocation } from 'alita';
import ThemeSettings from '@/components/ThemeSettings';
import MobileNav from '@/components/MobileNav';

const BaseLayout = () => {
  const { setSearch } = useModel('useWebNav');
  const { nav, toggle, icons } = useModel('useMenu');

  const app = useAppData();
  const { routes } = app.clientRoutes[0];
  const { pathname } = useLocation();
  return (
    <section className="max-w-screen-xl h-screen mx-auto overflow-hidden relative">
      <div className="flex items-start justify-between">
        <MobileNav />
        <div
          className={`h-screen lg:block my-4 shadow-lg relative hidden overflow-hidden transition-all ${
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
                >
                  <span className="text-left">{icons[route.icon as string]}</span>
                  <span className="mx-4 text-sm font-normal">{route.title}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
          <header className="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40">
            <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
              <div className="relative items-center pl-1 flex w-full lg:max-w-68 sm:ml-0">
                <div className="relative p-1 flex items-center justify-start w-1/4">
                  <button onClick={toggle}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-primary-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={`${
                          nav
                            ? 'M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'
                            : 'M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9'
                        }`}
                      />
                    </svg>
                  </button>
                </div>
                <div className="container relative items-center justify-center left-0 z-50 flex w-1/2 h-full">
                  <div className="relative flex items-center w-full lg:w-64 h-full group">
                    <svg
                      className="absolute left-0 z-20  w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                    </svg>
                    <input
                      type="text"
                      className="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input"
                      placeholder="Search"
                      // value={search}
                      onChange={(e) => {
                        setSearch(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="relative p-1 flex items-center justify-end  w-1/4">
                  <ThemeSettings />
                </div>
              </div>
            </div>
          </header>
          <main className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
            <Outlet />
          </main>
        </div>
      </div>
    </section>
  );
};

export default BaseLayout;
