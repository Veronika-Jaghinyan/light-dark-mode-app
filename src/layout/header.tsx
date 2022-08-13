import { FC, useContext } from 'react';
import { ThemeContext } from '../contexts/theme-context';

import logoIcon from '../images/logo-icon.png';
import './styles.scss';

const Header: FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
    localStorage.setItem('default-theme', isCurrentDark ? 'light' : 'dark');
  };

  return (
    <header className="header">
      <div className="header-content">
        <a href="/" className="logo-section">
          <img src={logoIcon} alt="logo" />
          <span>Light/Dark mode app</span>
        </a>
        <div className="toggle-btn-section">
          <div className={`toggle-checkbox m-vertical-auto`}>
            <input
              className="toggle-btn__input"
              type="checkbox"
              name="checkbox"
              onChange={handleThemeChange}
              checked={theme === 'light'}
            />
            <button type="button" className={`toggle-btn__input-label`} onClick={handleThemeChange}></button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
