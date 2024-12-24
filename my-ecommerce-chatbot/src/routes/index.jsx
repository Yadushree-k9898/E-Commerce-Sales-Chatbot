import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './HomePage';
import ProductPage from './ProductPage';
import CartPage from './CartPage';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/product" component={ProductPage} />
          <Route path="/cart" component={CartPage} />
        </Switch>
      </AppContainer>
    </Router>
  );
};

export default App;