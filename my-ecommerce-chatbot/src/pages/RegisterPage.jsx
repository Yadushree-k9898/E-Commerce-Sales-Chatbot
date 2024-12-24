import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  padding: 20px;
  width: 50%;
  margin: 0 auto;
`;

const Button = styled.button`
  background-color: #28a745;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const RegisterPage = () => {
  return (
    <Container>
      <h1>Register</h1>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" required />
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" required />
        <label>Password:</label>
        <input type="password" placeholder="Enter your password" required />
        <Button>Register</Button>
      </form>
      <Link to="/login">Already have an account? Login here</Link>
    </Container>
  );
};

export default RegisterPage;
