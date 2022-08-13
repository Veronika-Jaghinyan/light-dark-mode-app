import { FC, useState } from 'react';
import { ThemeContext } from './contexts/theme-context';
import Layout from './layout';
import moon from './images/moon.png';
import sun from './images/sun.png';

import './App.scss';

const App: FC = () => {
  // Detecting the default theme
  const isBrowserDefaulDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

  const getDefaultTheme = (): string => {
    const localStorageTheme = localStorage.getItem('default-theme');
    const browserDefault = isBrowserDefaulDark() ? 'dark' : 'light';
    return localStorageTheme || browserDefault;
  };

  const [theme, setTheme] = useState(getDefaultTheme());

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        <Layout>
          <div className="content-wrapper">
            <img src={theme === 'dark' ? moon : sun} alt={theme === 'dark' ? 'moon' : 'sun'} />
          </div>
        </Layout>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
