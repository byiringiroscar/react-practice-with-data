import React from 'react';
import Series from './series';

const moviesSeries = [
  { title: 'Luther', description: 'In publishing and graphic design, Lorem ', image: 'https://m.media-amazon.com/images/M/MV5BZWRjMzJlYmYtYzI0ZC00NjBlLThiNGUtNjdlODIzY2VkOWFjXkEyXkFqcGdeQXVyMTUzNzc3NDAz._V1_.jpg' },
  { title: 'The Strays', description: 'In publishing and graphic design, Lorem ', image: 'https://upload.wikimedia.org/wikipedia/en/9/95/TheStraysPoster.png' },
  { title: 'The Magician Elephant', description: 'In publishing and graphic design, Lorem ', image: 'https://m.media-amazon.com/images/M/MV5BOGNkNWY3NmMtMDQ3NS00NWUzLWExYTMtMzFmZDg1ZWNiMTg0XkEyXkFqcGdeQXVyMTA1OTcyNDQ4._V1_FMjpg_UX1000_.jpg' },
  { title: 'La Reine de sur', description: 'In publishing and graphic design, Lorem ', image: 'https://m.media-amazon.com/images/M/MV5BMjI2ZjRmMWYtNzcyMy00ZGUyLWE0YTUtMmNjMjY2MGMyOTgyXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_FMjpg_UX1000_.jpg' },
  { title: 'RRR', description: 'In publishing and graphic design, Lorem ', image: 'https://m.media-amazon.com/images/M/MV5BOGEzYzcxYjAtZmZiNi00YzI0LWIyY2YtOTM0MDFjODU2YTZiXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg' },
  { title: 'Unlocked', description: 'In publishing and graphic design, Lorem ipsum ', image: 'https://static.metacritic.com/images/products/movies/6/068aeb6d7dae78f7f941e94501b2633b.jpg' },
  { title: 'Matilda', description: 'In publishing and graphic design, Lorem ', image: 'https://cdn.shopify.com/s/files/1/1268/5375/products/hl01154542_0_1024x1024.jpg?v=1671616182' },
  { title: 'Venom', description: 'In publishing and graphic design, Lorem ', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Venom_Let_There_Be_Carnage_poster.jpg/220px-Venom_Let_There_Be_Carnage_poster.jpg' },
];

const SeriesContainer = () => (
  <div className="seriesContainer">
    {moviesSeries.map((movie) => (<Series movie={movie} key={movie.title} />))}
  </div>
);

export default SeriesContainer;
