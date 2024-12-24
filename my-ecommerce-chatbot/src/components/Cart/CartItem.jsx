import React from 'react';
import styled from 'styled-components';

const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #fff;
  margin-bottom: 20px;
`;

const CartItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 20px;
`;

const CartItemDetails = styled.div`
  flex: 1;
`;

const ItemName = styled.h4`
  margin: 0;
`;

const ItemPrice = styled.p`
  margin: 5px 0;
`;

const QuantityInput = styled.input`
  width: 50px;
  padding: 5px;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
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

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  const handleRemove = () => {
    onRemove(item.id);
  };

  const handleQuantityChange = (event) => {
    onUpdateQuantity(item.id, event.target.value);
  };

  return (
    <CartItemContainer>
      <CartItemImage src={item.image} alt={item.name} />
      <CartItemDetails>
        <ItemName>{item.name}</ItemName>
        <ItemPrice>${item.price}</ItemPrice>
        <QuantityInput
          type="number"
          value={item.quantity}
          onChange={handleQuantityChange}
          min="1"
        />
        <RemoveButton onClick={handleRemove}>Remove</RemoveButton>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;