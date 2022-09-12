import { useBoolean, useLocalStorageState } from 'ahooks';
import { useEffect } from 'react';
import Card from '../Card';
import { modeList, themeList } from '@/data/config';

const ThemeSettings = () => {
  const [widget, { toggle }] = useBoolean(false);
  const [settings, setSettings] = useLocalStorageState<{
    mode: string;
    theme: string;
  }>('settings', {
    defaultValue: {
      mode: 'system',
      theme: 'sky',
    },
  });

  useEffect(() => {
    const html = document.querySelector('html');
    if (settings.mode === 'system') {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        html?.setAttribute('data-mode', 'dark');
      } else {
        html?.setAttribute('data-mode', 'light');
      }
    } else {
      html?.setAttribute('data-mode', settings.mode);
    }
    html?.setAttribute('data-theme', settings.theme);
  }, [settings]);

  return (
    <>
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
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </button>
      {widget && <div className="fixed top-0 left-0 z-50 w-screen h-screen" onClick={toggle} />}
      <div
        className={`fixed top-0 right-0 z-50 p-4 w-96 max-h-screen overflow-auto transition ${
          widget ? ' translate-x-0' : ' translate-x-96'
        }`}
      >
        <Card title="主题模式" className="w-full mb-4 dark:bg-gray-600">
          <div className="flex flex-row gap-6">
            {modeList.map((item) => (
              <button
                key={item.mode}
                className="flex flex-col items-center w-auto text-black dark:text-white"
                onClick={() => {
                  setSettings({
                    ...settings,
                    mode: item.mode,
                  });
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-10 h-10 p-2 mb-1 rounded-full hover:bg-primary-300 hover:text-white${
                    settings.mode === item.mode ? ' bg-primary-500 text-white' : ''
                  }`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.path} />
                </svg>
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </Card>
        <Card title="主题色" className="w-full mb-4 dark:bg-gray-600">
          <div className="flex flex-row flex-wrap gap-4">
            {themeList.map((item) => (
              <button
                key={item.theme}
                className="flex flex-col items-center w-auto text-black dark:text-white"
                onClick={() => {
                  setSettings({
                    ...settings,
                    theme: item.theme,
                  });
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-8 h-8 p-1 mb-1 rounded-full bg-${item.theme} text-white`}
                >
                  {settings.theme === item.theme && (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  )}
                </svg>
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
};

export default ThemeSettings;
