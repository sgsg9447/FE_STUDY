import { useEffect, useState } from "react";
import "./App.css";
import Movie from "./Movie";
import CoinTest from "./test/CoinTest";
import ToDoTest from "./test/ToDoTest";

// const DB_KEY = "56c983268d4cce1655756f8668fe8f66";
// "https://api.themoviedb.org/3/movie/upcoming?api_key=56c983268d4cce1655756f8668fe8f66&language=ko-KR&page=1"
function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=56c983268d4cce1655756f8668fe8f66&language=ko-KR&page=1"
    );
    const json = await response.json();

    setMovies(json.results);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  console.log(movies[0]);
  return (
    <div className="App">
      {/* <ToDoTest /> */}
      {/* <CoinTest /> */}

      {loading ? (
        <h1>Loading......</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              posterPath={movie.poster_path}
              title={movie.title}
              overview={movie.overview}
              genre_ids={movie.genre_ids}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
