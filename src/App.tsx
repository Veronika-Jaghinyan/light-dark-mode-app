import { FC, useState } from 'react';
import { ThemeContext } from './contexts/theme-context';
import Layout from './layout';
import moon from './images/moon.png';
import sun from './images/sun.png';

import './App.scss';

const App: FC = () => {
  const [theme, setTheme] = useState('light');

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
