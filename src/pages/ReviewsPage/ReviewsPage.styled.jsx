import styled from 'styled-components';

export const ReviewList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ReviewItem = styled.li`
  margin-bottom: 1rem;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  background-color: #fff;
  h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
  }
  p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

export const ReviewText = styled.p`
  padding: 10px 0 0;
`;

export const ReviewSpan = styled.span`
  font-weight: bold;
`;
