import React from 'react';
import styled from 'styled-components';

const LogoutButton = styled.button`
  background-color: #ff4b5c;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff1c3c;
  }
`;

const LogoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Logout = () => {
  const handleLogout = () => {
    // Add your logout logic here
    console.log('User logged out');
  };

  return (
    <LogoutContainer>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </LogoutContainer>
  );
};

export default Logout;