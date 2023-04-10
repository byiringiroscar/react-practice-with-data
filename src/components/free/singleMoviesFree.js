import React from 'react';
import PropTypes from 'prop-types';

const SingleMoviesFree = ({ movie }) => (
  <div className="free-movie">
    <img src={movie.image.medium} alt="movieImage" />
    <a target="_blank" href={movie.url} rel="noreferrer"><img className="play" src="https://cdn-icons-png.flaticon.com/512/148/148744.png" alt="play" /></a>
  </div>
);

SingleMoviesFree.propTypes = {
  movie: PropTypes.shape({
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
export default SingleMoviesFree;
