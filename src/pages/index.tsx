import { useModel } from 'alita';

const Home = () => {
  const { getNavList } = useModel('useWebNav');

  return (
    <div className="flex flex-col flex-wrap sm:flex-row">
      {getNavList.map((nav) => {
        return (
          <div className="w-full" key={nav?.type}>
            <div className="mb-4">
              <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
                <p className="font-bold text-md text-black dark:text-white">{nav?.type}</p>
                <div className="flex flex-col flex-wrap sm:flex-row justify-start">
                  {nav?.children.map((item) => {
                    return (
                      <a
                        className="w-1/3 flex items-center justify-start p-2 my-2 rounded-2xl transition-all bg-transparent hover:bg-gradient-to-r from-primary-400 to-primary-500"
                        key={item.title}
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          alt={item.desc}
                          src={item.logo}
                          className="rounded-xl w-10 h-10 inline-block bg-blue-100"
                        />
                        <div className="flex flex-col">
                          <span className="font-bold text-md text-black dark:text-white ml-2">
                            {item.title}
                          </span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Home;
