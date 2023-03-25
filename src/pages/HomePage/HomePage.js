import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'servise/fetchAPI';

const HomePage = () => {
  const [movies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(({ data }) => {
      setTrendingMovies(data.results);
    });
  }, []);

  return (
    <>
      <MovieList movies={movies} />
    </>
  );
};

export default HomePage;
