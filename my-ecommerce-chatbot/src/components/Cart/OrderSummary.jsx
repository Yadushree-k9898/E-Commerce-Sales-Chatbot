import React from 'react';
import styled from 'styled-components';

const SummaryContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;
`;

const SummaryTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const ItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const TotalPrice = styled.h3`
  margin-top: 20px;
  text-align: right;
`;

const OrderSummary = ({ items, total }) => {
  return (
    <SummaryContainer>
      <SummaryTitle>Order Summary</SummaryTitle>
      <ItemList>
        {items.map((item, index) => (
          <Item key={index}>
            {item.name} - ${item.price} x {item.quantity}
          </Item>
        ))}
      </ItemList>
      <TotalPrice>Total: ${total}</TotalPrice>
    </SummaryContainer>
  );
};

export default OrderSummary;