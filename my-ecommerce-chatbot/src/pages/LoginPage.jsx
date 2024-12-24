import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  padding: 20px;
  width: 50%;
  margin: 0 auto;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const LoginPage = () => {
  return (
    <Container>
      <h1>Login</h1>
      <form>
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" required />
        <label>Password:</label>
        <input type="password" placeholder="Enter your password" required />
        <Button>Login</Button>
      </form>
      <Link to="/register">Don't have an account? Register here</Link>
    </Container>
  );
};

export default LoginPage;
