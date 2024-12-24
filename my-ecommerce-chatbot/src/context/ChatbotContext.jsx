import React, { createContext, useState } from 'react';

export const ChatbotContext = createContext();

const ChatbotProvider = ({ children }) => {
  const [chatbotState, setChatbotState] = useState({
    messages: [],
    user: null,
    isAuthenticated: false,
  });

  const addMessage = (message) => {
    setChatbotState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  const setUser = (user) => {
    setChatbotState((prevState) => ({
      ...prevState,
      user,
      isAuthenticated: true,
    }));
  };

  const logout = () => {
    setChatbotState({
      messages: [],
      user: null,
      isAuthenticated: false,
    });
  };

  const resetConversation = () => {
    setChatbotState((prevState) => ({
      ...prevState,
      messages: [],
    }));
  };

  return (
    <ChatbotContext.Provider value={{ chatbotState, addMessage, setUser, logout, resetConversation }}>
      {children}
    </ChatbotContext.Provider>
  );
};

export default ChatbotProvider;