import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ movie }) => (
  <div className="card">
    <img className="movie-img" src="https://teaser-trailer.com/wp-content/uploads/Daniel-Radcliffe-Jungle-New-Poster.jpg" alt="movies" />
    <h4 className="movie-title">{movie.title}</h4>
  </div>
);

Card.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
