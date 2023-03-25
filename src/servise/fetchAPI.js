import axios from 'axios';

const KEY = 'db6a7f7c3b24f4239f0433ba9f35bbff';
const BAZE_URL = 'https://api.themoviedb.org/3';

export async function fetchTrendingMovies() {
  const response = await axios.get(
    `${BAZE_URL}/trending/movie/day?api_key=${KEY}`
  );
  return response;
}

export async function fetchMovieSearch(query) {
  const response = await axios.get(
    `${BAZE_URL}/search/movie?api_key=${KEY}&${query}`
  );
  return response;
}

export async function fetchMovieById(id) {
  const response = await axios.get(`${BAZE_URL}/movie/${id}?api_key=${KEY}`);
  return response;
}

export async function fetchCreditsById(id) {
  const response = await axios.get(
    `${BAZE_URL}/movie/${id}/credits?api_key=${KEY}`
  );
  return response;
}

export async function fetchReviewsById(id) {
  const response = await axios.get(
    `${BAZE_URL}/movie/${id}/reviews?api_key=${KEY}`
  );
  return response;
}
