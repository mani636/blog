import { useState, createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [isLogin, setIsLogin] = useState(null);

  const [editPost, setEditPost] = useState();

  const fetchLoginInfo = () => {
    const loginInfo =
      localStorage.getItem('isLogin') !== 'undefined'
        ? JSON.parse(localStorage.getItem('isLogin'))
        : localStorage.clear();

    return loginInfo;
  };

  useEffect(() => {
    const user = fetchLoginInfo;
    setIsLogin(user);
  }, []);

  console.log(isLogin);

  return (
    <ThemeContext.Provider
      value={{
        isLightTheme,
        setIsLightTheme,
        isLogin,
        setIsLogin,
        editPost,
        setEditPost,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => {
  return useContext(ThemeContext);
};

export { ThemeContext, ThemeProvider, useThemeContext };
