import React from 'react';
import PropTypes from 'prop-types';
import CustomCard from './SingleCardCustom';

const CardContainerCustom = ({ movies }) => (
  <div className="card-container-custom">
    {movies.map((movie) => (<CustomCard key={movie.name} movie={movie} />))}
  </div>
);

CardContainerCustom.propTypes = {
  movies: PropTypes.instanceOf(Array).isRequired,
};

export default CardContainerCustom;
