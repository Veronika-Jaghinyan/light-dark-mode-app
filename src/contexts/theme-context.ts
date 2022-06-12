import { createContext } from 'react';

export const ThemeContext = createContext({
  theme: '',
  setTheme: (theme: string) => {},
});
