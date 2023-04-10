import React, { useEffect, useState } from 'react';
import SingleMoviesFree from './singleMoviesFree';

const ContainerMoviesFree = () => {
  const [movies, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/shows');
        const data = await response.json();
        // const limitedData = data.slice(0, 24);
        // console.log(limitedData);
        setMovie(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    getMovies();
  }, []);
  return (
    <div className="container-movie-free">
      {loading && <img src="https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif" alt="loading" />}
      {error && <img src="https://media.tenor.com/hwe3vkln0_UAAAAM/error-x-error.gif" alt="loading" />}
      {!loading && !error && movies.map((movie) => (
        <SingleMoviesFree key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default ContainerMoviesFree;
