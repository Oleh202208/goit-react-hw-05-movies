import MovieItem from 'components/MovieItem/MovieItem';
import PropTypes from 'prop-types';
import List from './MovieList.styled';

const MovieList = ({ movies }) => {
  return (
    <List>
      <MovieItem movies={movies} />
    </List>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
