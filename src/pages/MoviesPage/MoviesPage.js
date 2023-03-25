import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieSearch } from 'servise/fetchAPI';
import Form from '../../components/Form/Form.js';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [queryParams, setQueryParams] = useSearchParams();

  useEffect(() => {
    fetchMovieSearch(queryParams).then(({ data }) => {
      setMovies(data.results);
    });
  }, [queryParams]);

  const upDateQuerySting = query => {
    const nextParams = query !== '' ? { query } : {};
    setQueryParams(nextParams);
  };
  return (
    <>
      <Form onSubmit={upDateQuerySting} />
      <MovieList movies={movies} />
    </>
  );
};

export default MoviesPage;
