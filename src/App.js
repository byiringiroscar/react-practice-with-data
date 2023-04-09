import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/header';
import MainMovies from './components/main/mainSection';
import MovieDetail from './components/movieDetail/movieDetail';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<MainMovies />} />
        <Route path="/series" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
