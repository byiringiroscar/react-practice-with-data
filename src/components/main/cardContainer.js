import React from 'react';
import Card from './card';

const movies = [
  { title: 'Jungle book', image: 'https://teaser-trailer.com/wp-content/uploads/Daniel-Radcliffe-Jungle-New-Poster.jpg' },
  { title: 'The call of the wild', image: 'https://upload.wikimedia.org/wikipedia/en/4/43/The_Call_of_the_Wild_poster.jpg' },
  { title: 'The wild life', image: 'https://m.media-amazon.com/images/M/MV5BMjA4OTE0MjAwNl5BMl5BanBnXkFtZTgwMjY4Mzg2OTE@._V1_.jpg' },
  { title: 'Operation Overlord', image: 'https://cdn.moviefone.com/image-assets/946552/7nOL8FuiWdSuQo6uGJaKFfFBTZ9.jpg?d=360x540&q=60' },
  { title: 'Hacksaw Ridge', image: 'https://m.media-amazon.com/images/M/MV5BMjQ1NjM3MTUxNV5BMl5BanBnXkFtZTgwMDc5MTY5OTE@._V1_FMjpg_UX1000_.jpg' },
  { title: 'The nun', image: 'https://m.media-amazon.com/images/M/MV5BMjM3NzQ5NDcxOF5BMl5BanBnXkFtZTgwNzM4MTQ5NTM@._V1_.jpg' },
  { title: 'Redeeming Love', image: 'https://m.media-amazon.com/images/M/MV5BMTMxMmRmMWUtNGNhZS00MWYxLTkwNzUtM2QwNzI4MGU1ZTI2XkEyXkFqcGdeQXVyNTQ3MjE4NTU@._V1_FMjpg_UX1000_.jpg' },
  { title: 'Shutter Island', image: 'https://www.boredpanda.com/blog/wp-content/uploads/2022/05/best-thriller-movies-53-628c95ea5bf80__700.jpg' },
];
const CardContainer = () => (
  <div className="card-container">
    {movies.map((movie) => (<Card key={movie.title} movie={movie} />))}
  </div>
);

export default CardContainer;
