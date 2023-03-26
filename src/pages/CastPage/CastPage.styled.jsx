import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const CastItem = styled.li`
  width: 25%;
  box-sizing: border-box;
  text-align: center;
  img {
    display: block;
    margin: 0 auto;
    padding: 0 0 10px;
    max-width: 100%;
  }
  p {
    margin-top: 0.5rem;
    font-size: 0.8rem;
    font-weight: 600;
  }
`;
