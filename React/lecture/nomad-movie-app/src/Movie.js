import React from "react";

function Movie({ posterPath, title, overview, genre_ids }) {
  return (
    <div>
      <img src={posterPath} />
      <h2>{title}</h2>
      <p>{overview}</p>
      <ul>
        {genre_ids.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
