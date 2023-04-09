import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ movie }) => (
  <div className="card">
    <img className="movie-img" src={movie.image} alt="movies" />
    <h4 className="movie-title">{movie.title}</h4>
  </div>
);

Card.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
