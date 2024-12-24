import React from 'react';
import styled from 'styled-components';

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

const CheckoutPage = () => {
  return (
    <Container>
      <h1>Checkout</h1>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" required />
        <label>Address:</label>
        <input type="text" placeholder="Enter your address" required />
        {/* Add more fields */}
        <Button>Place Order</Button>
      </form>
    </Container>
  );
};

export default CheckoutPage;
