import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  &:nth-last-child(2) {
    margin-right: 30px;
  }
`;

export const Link = styled(NavLink)`
  display: inline-block;
  padding: 5px 10px;
  width: 60px;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #f7b75d;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease-in-out;
  &.active {
    background-color: #f87b07;
  }
`;
