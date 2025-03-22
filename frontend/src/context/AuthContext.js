import React, { createContext, useContext, useState } from 'react';
import { jwtDecode } from 'jwt-decode'; // Ensure this line is correct

// Create Auth Context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('access_token'));
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refresh_token'));
  const [user, setUser] = useState(localStorage.getItem('access') ? jwtDecode(localStorage.getItem('access')) : null);

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        refreshToken,
        setAccessToken,
        setRefreshToken,
        user,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook to use the Auth Context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};