import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { fetchMovieById } from '../../servise/fetchAPI';
import no_image from '../../images/no_image.png';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import MovieInformationAdd from '../../components/MovieInformationAdd/MovieInformationAdd';
import { Button } from './MovieDetalis.styled';

const MovieDetalis = () => {
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
            : { no_image },
          genres: genres.map(({ name }) => name).join(', '),
        };
        setMovie(movieInfo);
      })
      .catch(error => console.error(error));
  }, [id]);

  const backLink = location.state?.from ?? 'movies';
  <>
    <Button type="click" onClick={() => navigate(backLink)}>
      Back
    </Button>
    <MovieInfo movie={movie} />
    <MovieInformationAdd />
  </>;
};

export default MovieDetalis;
