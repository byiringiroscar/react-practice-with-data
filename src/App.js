import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/header';
import MainMovies from './components/main/mainSection';
import MovieDetail from './components/movieDetail/movieDetail';
import MainContainerVudu from './components/myVudu/MaincontainerVudu';
import MainFree from './components/free/mainFree';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<MainMovies />} />
        <Route path="/series" element={<MovieDetail />} />
        <Route path="/custom" element={<MainContainerVudu />} />
        <Route path="/free" element={<MainFree />} />
      </Routes>
    </div>
  );
}

export default App;
