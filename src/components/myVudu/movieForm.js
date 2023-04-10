import React from 'react';
import PropTypes from 'prop-types';

const MyForm = ({ handleSubmit, handleInputChange, input }) => (
  <form onSubmit={handleSubmit}>
    <input type="text" value={input.movieName} onChange={handleInputChange} name="movieName" placeholder="Enter movie name" required />
    <input type="url" value={input.movieImage} onChange={handleInputChange} name="movieImage" placeholder="Enter movie image url" required />
    <button type="submit">Add Movie</button>
  </form>
);

MyForm.propTypes = {
  input: PropTypes.shape({
    movieName: PropTypes.string.isRequired,
    movieImage: PropTypes.string.isRequired,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default MyForm;
