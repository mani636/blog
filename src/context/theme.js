import { useState, createContext, useContext } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{ isLightTheme, setIsLightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => {
  return useContext(ThemeContext);
};

export { ThemeContext, ThemeProvider, useThemeContext };
