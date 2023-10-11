import { useContext, createContext, useState, useEffect } from 'react';
import { getUserData } from '../utils/firebaseFunctions';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loginUser, setLoginUser] = useState('');

  const [data, setData] = useState({});

  useEffect(() => {
    const usersData = async () => {
      const data = await getUserData();
      setUsers(data);
    };

    usersData();
  }, []);

  const userProfile = () => {
    const filterUser =
      users.length && users.find((user) => user.id === loginUser);

    setData(filterUser);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        loginUser,
        setLoginUser,
        data,
        setData,
        userProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
