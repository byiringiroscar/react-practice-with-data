import React from 'react';
import Card from './card';

const movies = [
  { title: 'Jungle book' },
  { title: 'Jungle book' },
  { title: 'Jungle book' },
  { title: 'Jungle book' },
  { title: 'Jungle book' },
  { title: 'Jungle book' },
  { title: 'Jungle book' },
  { title: 'Jungle book' },
];
const CardContainer = () => (
  <div className="card-container">
    {movies.map((movie) => (<Card key={movie.title} movie={movie} />))}
  </div>
);

export default CardContainer;
