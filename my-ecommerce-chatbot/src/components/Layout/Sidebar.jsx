import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #f8f9fa;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const SidebarHeader = styled.h2`
  margin-bottom: 20px;
  color: #343a40;
`;

const SidebarItem = styled.div`
  margin-bottom: 15px;
  padding: 10px;
  color: #495057;
  cursor: pointer;
  &:hover {
    background-color: #e9ecef;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>Menu</SidebarHeader>
      <SidebarItem>Home</SidebarItem>
      <SidebarItem>Products</SidebarItem>
      <SidebarItem>About Us</SidebarItem>
      <SidebarItem>Contact</SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;