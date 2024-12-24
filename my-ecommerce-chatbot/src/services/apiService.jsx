import axios from 'axios';
import styled from 'styled-components';

// /c:/Users/user/Desktop/E-Commerce Sales Chatbot/my-ecommerce-chatbot/src/services/apiService.jsx

// Base URL for the API
const API_BASE_URL = 'https://api.yourbackend.com';

// Styled components for CSS
const Button = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

// API service functions
export const apiService = {
  getProducts: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/products`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },
  getProductById: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/products/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching product with id ${id}:`, error);
      throw error;
    }
  },
  createOrder: async (orderData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/orders`, orderData);
      return response.data;
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  }
};

// Example usage of styled components
const ExampleComponent = () => (
  <Container>
    <h1>Welcome to the E-Commerce Chatbot</h1>
    <Button>Click Me</Button>
  </Container>
);

export default ExampleComponent;