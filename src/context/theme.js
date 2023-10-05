import { useState, createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [editPost, setEditPost] = useState();
  const [userList, setUserList] = useState();
  const [loginUserEmail, setLoginUserEmail] = useState();
  const [searchTerm, setSearchTerm] = useState('');

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

  return (
    <ThemeContext.Provider
      value={{
        isLightTheme,
        setIsLightTheme,
        isLogin,
        setIsLogin,
        editPost,
        setEditPost,
        userList,
        setUserList,
        loginUserEmail,
        setLoginUserEmail,
        searchTerm,
        setSearchTerm,
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
