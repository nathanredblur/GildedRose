import React, { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';
type ThemeContextProps = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = React.createContext<ThemeContextProps>({
  theme: 'light',
  toggleTheme: () => undefined,
});

export const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    function loadTheme(): Theme {
      const lsTheme = localStorage.getItem('theme') as Theme;
      return lsTheme || 'dark';
    }
    setTheme(loadTheme());
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext<ThemeContextProps>(ThemeContext);