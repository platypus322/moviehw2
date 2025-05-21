import React, { useEffect, useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/api/movies')
      .then((res) => res.json())
      .then((data) => setMovies(data.results || []));
  }, []);

  return (
    <div>
      <h1>🎬 인기 영화</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
