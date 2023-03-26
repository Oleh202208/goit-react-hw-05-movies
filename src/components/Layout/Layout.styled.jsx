import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #0b2c6e;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  text-decoration: none;
  margin-left: 20px;
  transition: background-color 0.3s ease-in-out;
  &.active {
    background-color: #1a31de;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 70px;
  background-color: rgb(245, 245, 245);
`;
