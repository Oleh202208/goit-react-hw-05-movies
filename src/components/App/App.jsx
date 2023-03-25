// import Layout from 'components/Layout/Layout';
// import { lazy } from 'react';
// import { Route, Routes } from 'react-router-dom';

// const HomePage = lazy(() => import('pages/HomePage/HomePage'));
// const MoviePage = lazy(() => import('pages/MoviesPage/MoviesPage'));
// const MovieDetails = lazy(() => import('pages/MovieDetalis/MovieDetalis'));
// const CastPage = lazy(() => import('pages/CastPage/CastPage'));
// const ReviewPage = lazy(() => import('pages/ReviewsPage/ReviewsPage'));

// export const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<HomePage />}></Route>
//         <Route path="movies" element={<MoviePage />}></Route>
//         <Route path="movies/:id" element={<MovieDetails />}>
//           <Route path="cast" element={<CastPage />}></Route>
//           <Route path="reviews" element={<ReviewPage />}></Route>
//         </Route>
//       </Route>
//         <Route path='*' element={<HomePage/>}></Route>
//     </Routes>
//   );
// };

import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from 'components/Layout/Layout';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviePage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieDetails = lazy(() => import('pages/MovieDetalis/MovieDetalis.js'));
const CastPage = lazy(() => import('pages/CastPage/CastPage'));
const ReviewsPage = lazy(() => import('pages/ReviewsPage/ReviewsPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="movies" element={<MoviePage />}></Route>
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<CastPage />}></Route>
          <Route path="reviews" element={<ReviewsPage />}></Route>
        </Route>
        <Route path="*" element={<HomePage />}></Route>
      </Route>
    </Routes>
  );
};
