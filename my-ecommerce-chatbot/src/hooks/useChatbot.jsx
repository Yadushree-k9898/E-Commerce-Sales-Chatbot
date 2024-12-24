import { useState } from 'react';
import styled from 'styled-components';

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border: 1px solid #ccc;
  padding: 10px;
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 10px;
`;

const Message = styled.div`
  background-color: #f1f1f1;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 5px;
  align-self: ${props => (props.isUser ? 'flex-end' : 'flex-start')};
`;

const InputContainer = styled.div`
  display: flex;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SendButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  margin-left: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const useChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      setInput('');
      // Add logic to handle chatbot response here
    }
  };

  return {
    messages,
    input,
    setInput,
    sendMessage,
    ChatContainer,
    MessagesContainer,
    Message,
    InputContainer,
    Input,
    SendButton,
  };
};

export default useChatbot;