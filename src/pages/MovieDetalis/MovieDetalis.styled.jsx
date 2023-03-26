import styled from 'styled-components';

export const Button = styled.button`
  background-color: #0b2c6e;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin: 0 0 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #1a31de;
  }
`;
export const SpanForSVG = styled.span`
  display: flex;
  align-items: center;
`;
