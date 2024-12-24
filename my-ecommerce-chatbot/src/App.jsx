import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

// Importing pages
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

// Importing layout components
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

// Importing context providers
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import ChatbotProvider from './context/ChatbotContext';




const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
  background-color: #f9f9f9;
`;

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <ChatbotProvider>
          <Router>
            <AppContainer>
              <Header />
              <MainContent>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/product/:id" element={<ProductPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                </Routes>
              </MainContent>
              <Footer />
            </AppContainer>
          </Router>
        </ChatbotProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;