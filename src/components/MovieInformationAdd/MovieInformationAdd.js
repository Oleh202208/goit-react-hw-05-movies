import { Outlet, useLocation } from 'react-router-dom';
import { Item, Link, List } from './MovieInformationAdd.styled';

const MovieInformationAdd = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? `movies`;

  return (
    <div>
      <h3>Additional information</h3>
      <List>
        <Item>
          <Link to="cast" state={{ from: backLink }}>
            Cast
          </Link>
        </Item>
        <Item>
          <Link to="reviews" state={{ from: backLink }}>
            Reviews
          </Link>
        </Item>
      </List>
      <Outlet />
    </div>
  );
};

export default MovieInformationAdd;
