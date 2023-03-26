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

  return (
    <MovieContainer>
      <img src={poster_path} alt={title} width="300" />
      <MovieInformation>
        <MovieTitle>
          {title} {release_date}
        </MovieTitle>
        {vote_average && (
          <MovieDescription>
            <MovieSpan>User Score: </MovieSpan>
            {`${Math.round(vote_average * 10)}%`}
          </MovieDescription>
        )}
        {overview && (
          <MovieDescription>
            <MovieSpan>Overview: </MovieSpan>
            {overview}
          </MovieDescription>
        )}
        {genres && (
          <MovieDescription>
            <MovieSpan>Genres: </MovieSpan>
            {genres}
          </MovieDescription>
        )}
      </MovieInformation>
    </MovieContainer>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    vote_average: PropTypes.number,
    title: PropTypes.string,
    overview: PropTypes.string,
    poster_path: PropTypes.string,
    genres: PropTypes.string,
    release_date: PropTypes.string,
  }).isRequired,
};

export default MovieInfo;
