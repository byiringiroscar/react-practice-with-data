import React, { useEffect, useState } from 'react';
import MyForm from './movieForm';
import CardContainerCustom from './customCardContainer';

const MainContainerVudu = () => {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState({ movieName: '', movieImage: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = { name: input.movieName, image: input.movieImage };
    setMovies([...movies, newMovie]);
    setInput({ movieName: '', movieImage: '' });
  };
  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  useEffect(() => {
  }, [movies]);
  return (
    <main>
      <div className="movie-container-custom">
        <h2>Enter Your specified movie</h2>
        <MyForm handleSubmit={handleSubmit} handleInputChange={handleInputChange} input={input} />
        <CardContainerCustom movies={movies} />
      </div>
    </main>
  );
};

export default MainContainerVudu;
