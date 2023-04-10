import React from 'react';
import PropTypes from 'prop-types';

const Series = ({ movie }) => (
  <div className="card-series">
    <img className="series-img" alt="seriesimage" src={movie.image} />
    <div className="series-descr">
      <h3>
        Title:
        {movie.title}
      </h3>
      <p>{movie.description}</p>
    </div>
  </div>
);

Series.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
export default Series;
