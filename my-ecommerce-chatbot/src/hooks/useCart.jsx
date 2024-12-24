import { useState } from 'react';
import styled from 'styled-components';

// /c:/Users/user/Desktop/E-Commerce Sales Chatbot/my-ecommerce-chatbot/src/hooks/useCart.jsx

const CartContainer = styled.div`
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 5px;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

const CartButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const useCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    CartContainer,
    CartItem,
    CartButton
  };
};

export default useCart;