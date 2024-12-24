import React from 'react';
import styled from 'styled-components';

const CartContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const CartTitle = styled.h2`
  margin-bottom: 20px;
`;

const CartList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CartItem = styled.li`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemName = styled.h3`
  margin: 0;
`;

const ItemPrice = styled.p`
  margin: 5px 0;
`;

const ItemQuantity = styled.p`
  margin: 5px 0;
`;

const RemoveButton = styled.button`
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

const TotalContainer = styled.div`
  margin-top: 20px;
  text-align: right;
`;

const TotalPrice = styled.h3`
  margin: 0;
`;

const Cart = ({ cartItems, onRemoveItem }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContainer>
      <CartTitle>Your Cart</CartTitle>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <CartList>
          {cartItems.map((item) => (
            <CartItem key={item.id}>
              <ItemDetails>
                <ItemName>{item.name}</ItemName>
                <ItemPrice>Price: ${item.price}</ItemPrice>
                <ItemQuantity>Quantity: {item.quantity}</ItemQuantity>
              </ItemDetails>
              <RemoveButton onClick={() => onRemoveItem(item.id)}>Remove</RemoveButton>
            </CartItem>
          ))}
        </CartList>
      )}
      <TotalContainer>
        <TotalPrice>Total: ${getTotalPrice().toFixed(2)}</TotalPrice>
      </TotalContainer>
    </CartContainer>
  );
};

export default Cart;