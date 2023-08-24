import { useState, createContext, useContext } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(false);

  const [isLogin, setIsLogin] = useState(false);

  return (
    <ThemeContext.Provider
      value={{ isLightTheme, setIsLightTheme, isLogin, setIsLogin }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => {
  return useContext(ThemeContext);
};

export { ThemeContext, ThemeProvider, useThemeContext };
