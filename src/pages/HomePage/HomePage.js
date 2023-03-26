import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'servise/fetchAPI';
import { HomeTitle } from './HomePages.styled';

const HomePage = () => {
  const [movies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(({ data }) => {
      setTrendingMovies(data.results);
    });
  }, []);

  return (
    <>
      <HomeTitle>Trending today</HomeTitle>
      <MovieList movies={movies} />
    </>
  );
};

export default HomePage;
