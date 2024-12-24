import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  padding: 20px;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const Button = styled.button`
  background-color: #dc3545;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const CartPage = () => {
  return (
    <Container>
      <h1>Your Cart</h1>
      <CartItem>
        <span>Travel Package 1</span>
        <Button>Remove</Button>
      </CartItem>
      {/* Add more cart items */}
      <Link to="/checkout">
        <Button>Proceed to Checkout</Button>
      </Link>
    </Container>
  );
};

export default CartPage;
