import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #ff4d4d;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff1a1a;
  }
`;

const ResetButton = ({ onReset }) => {
  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset the conversation?')) {
      onReset();
    }
  };

  return (
    <Button onClick={handleReset}>
      Reset Conversation
    </Button>
  );
};

export default ResetButton;