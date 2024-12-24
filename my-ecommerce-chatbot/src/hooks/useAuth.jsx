import { useState, useEffect } from 'react';
import styled from 'styled-components';

const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const AuthButton = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return {
    isAuthenticated,
    login,
    logout,
  };
};

export const AuthComponent = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <AuthContainer>
      {isAuthenticated ? (
        <AuthButton onClick={logout}>Logout</AuthButton>
      ) : (
        <AuthButton onClick={() => login('sample-token')}>Login</AuthButton>
      )}
    </AuthContainer>
  );
};

export default useAuth;