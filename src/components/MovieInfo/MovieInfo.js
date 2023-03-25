import PropTypes from 'prop-types';
import {
  MovieContainer,
  MovieDescription,
  MovieInformation,
  MovieSpan,
  MovieTitle,
} from './MovieInfo.styled';

const MovieInfo = ({ movie }) => {
  const { title, vote_average, overview, poster_path, genres, release_date } =
    movie;
  const scores = vote_average * 100;

  return (
    <MovieContainer>
      <img src={poster_path} alt={title} width="300" />
      <MovieInformation>
        <MovieTitle>
          {title} {release_date}
        </MovieTitle>
        {vote_average === '0' && (
          <MovieDescription>
            <MovieSpan>User Score:</MovieSpan> {scores.toString().slice(0, 2)}%
          </MovieDescription>
        )}
        {overview && (
          <MovieDescription>
            <MovieSpan>Overview:</MovieSpan>
            {overview}
          </MovieDescription>
        )}
        {genres && (
          <MovieDescription>
            <MovieSpan>Genres:</MovieSpan>
            {genres}
          </MovieDescription>
        )}
      </MovieInformation>
    </MovieContainer>
  );
};

MovieInfo.propTypes = {
  vote_average: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
};

export default MovieInfo;
