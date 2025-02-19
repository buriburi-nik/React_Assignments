import Movie from './components/Movie';
import moviesData from './data/movies.json';
import './index.css';

function App() {
  return (
    <div className="App">
      <h1>Movie List</h1>
      <div className="movies-container">
        {moviesData.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
