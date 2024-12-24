import React from 'react';
import styled from 'styled-components';

const HistoryContainer = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  background-color: #f9f9f9;
`;

const Message = styled.div`
  margin: 10px 0;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ sender }) => (sender === 'user' ? '#007bff' : '#f1f1f1')};
  color: ${({ sender }) => (sender === 'user' ? 'white' : 'black')};
  align-self: ${({ sender }) => (sender === 'user' ? 'flex-end' : 'flex-start')};
  max-width: 60%;
`;

const Sender = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

const Text = styled.span`
  font-size: 16px;
`;

const ConversationHistory = ({ messages }) => {
  return (
    <HistoryContainer>
      {messages.map((message, index) => (
        <Message key={index} sender={message.sender}>
          <Sender>{message.sender}:</Sender>
          <Text>{message.text}</Text>
        </Message>
      ))}
    </HistoryContainer>
  );
};

export default ConversationHistory;