import React, {createContext, useState} from 'react';
import Header from '../components/Header';

export const AuthContext = createContext('');

export const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setusername] = useState('');
  

  return (
    <AuthContext.Provider
      value={{isLoggedIn, setIsLoggedIn, username, setusername}}
    >
      {children}
     
    </AuthContext.Provider>
  );
};
