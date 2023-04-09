import React from 'react';
import Card from './card';

const movies = [
  { title: 'Jungle book', image: 'https://teaser-trailer.com/wp-content/uploads/Daniel-Radcliffe-Jungle-New-Poster.jpg' },
  { title: 'Jungle book', image: 'https://teaser-trailer.com/wp-content/uploads/Daniel-Radcliffe-Jungle-New-Poster.jpg' },
  { title: 'Jungle book', image: 'https://teaser-trailer.com/wp-content/uploads/Daniel-Radcliffe-Jungle-New-Poster.jpg' },
  { title: 'Jungle book', image: 'https://teaser-trailer.com/wp-content/uploads/Daniel-Radcliffe-Jungle-New-Poster.jpg' },
  { title: 'Jungle book', image: 'https://teaser-trailer.com/wp-content/uploads/Daniel-Radcliffe-Jungle-New-Poster.jpg' },
  { title: 'Jungle book', image: 'https://teaser-trailer.com/wp-content/uploads/Daniel-Radcliffe-Jungle-New-Poster.jpg' },
  { title: 'Jungle book', image: 'https://teaser-trailer.com/wp-content/uploads/Daniel-Radcliffe-Jungle-New-Poster.jpg' },
  { title: 'Jungle book', image: 'https://teaser-trailer.com/wp-content/uploads/Daniel-Radcliffe-Jungle-New-Poster.jpg' },
];
const CardContainer = () => (
  <div className="card-container">
    {movies.map((movie) => (<Card key={movie.title} movie={movie} />))}
  </div>
);

export default CardContainer;
