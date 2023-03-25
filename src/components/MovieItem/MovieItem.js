import { useLocation } from 'react-router-dom';
import no_image from '../../images/no_image.png';
import PropTypes from 'prop-types';
import { Item, StyledLink } from './MovieItem.styled';

const MovieItem = ({ movies }) => {
  const location = useLocation();
  return movies.map(({ id, title, poster_path }) => (
    <Item key={id}>
      <StyledLink to={`/movies/${id}`} state={{ from: location }}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/original/${poster_path}`
              : { no_image }
          }
          alt={title}
          width="350"
        />
        <p>{title}</p>
      </StyledLink>
    </Item>
  ));
};

MovieItem.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MovieItem;
