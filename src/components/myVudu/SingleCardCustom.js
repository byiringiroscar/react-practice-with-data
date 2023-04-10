import React from 'react';
import PropTypes from 'prop-types';

const CustomCard = ({ movie }) => (

  <div className="card-custom">
    <img src={movie.image} alt="customImage" />
    <h4>
      Title:
      {' '}
      { movie.name}
    </h4>
  </div>
);
CustomCard.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
export default CustomCard;
