import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchMovieById } from '../../servise/fetchAPI';
import no_image from '../../images/no_image.png';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import MovieInformationAdd from '../../components/MovieInformationAdd/MovieInformationAdd';
import { Button, SpanForSVG } from './MovieDetalis.styled';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieById(id)
      .then(({ data }) => {
        const {
          title,
          vote_average,
          overview,
          poster_path,
          genres,
          release_date,
        } = data;
        const movieInfo = {
          title,
          release_date: release_date.slice(0, 4),
          vote_average,
          overview,
          poster_path: poster_path
            ? `https://image.tmdb.org/t/p/original/${poster_path}`
            : no_image,
          genres: genres.map(({ name }) => name).join(', '),
        };

        setMovie(movieInfo);
      })
      .catch(error => console.error(error));
  }, [id]);

  const backLink = location.state?.from ?? 'movies';

  return (
    <>
      <Button type="click" onClick={() => navigate(backLink)}>
        <SpanForSVG>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d="M8.59 12L14.59 6L16 7.41L11.83 11H20v2H11.83L16 16.59L14.59 18L8.59 12Z" />
          </svg>
        </SpanForSVG>
      </Button>
      <MovieInfo movie={movie} />
      <MovieInformationAdd />
    </>
  );
};

export default MovieDetails;
