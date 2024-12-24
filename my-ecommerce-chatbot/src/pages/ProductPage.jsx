import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductDetails = styled.div`
  width: 60%;
  text-align: center;
`;

const Button = styled.button`
  background-color: #28a745;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ProductPage = () => {
  const { id } = useParams();

  return (
    <Container>
      <h1>Product Details: {id}</h1>
      <ProductDetails>
        <h2>Travel Package {id}</h2>
        <p>Details about the selected product.</p>
        <Button>Add to Cart</Button>
      </ProductDetails>
    </Container>
  );
};

export default ProductPage;
