import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ProductCard = styled.div`
  width: 200px;
  padding: 10px;
  margin: 20px;
  border: 1px solid #ddd;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Home = () => {
  return (
    <Container>
      <h1>Welcome to Our E-Commerce Store</h1>
      <p>Chat with our bot to find the best products for you!</p>
      <div>
        <ProductCard>
          <h3>Product 1</h3>
          <p>High-quality product at an affordable price.</p>
          <Link to="/product/1">
            <Button>View Details</Button>
          </Link>
        </ProductCard>
        <ProductCard>
          <h3>Product 2</h3>
          <p>Top-rated product with excellent reviews.</p>
          <Link to="/product/2">
            <Button>View Details</Button>
          </Link>
        </ProductCard>
        <ProductCard>
          <h3>Product 3</h3>
          <p>Best-selling product with great features.</p>
          <Link to="/product/3">
            <Button>View Details</Button>
          </Link>
        </ProductCard>
        {/* Add more products as needed */}
      </div>
    </Container>
  );
};

export default Home;