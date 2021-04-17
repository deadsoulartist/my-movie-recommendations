import React, { useState } from "react";
import "./styles.css";

const movieDB = {
  Action: [
    { name: "John Wick", rating: "5/5" },
    { name: "DeadPool", rating: "4/5" },
    { name: "6 Underground", rating: "4.5/5" },
    
  ],

  Horror: [
    {name: "The Shining",
    rating: "5/5"
      
    },
    {
      name: "Hereditary",
      rating: "4.5/5"
    },
    {
      name: "Nun",
      rating: "4/5"
    },
    
  ],
  ScienceFiction: [
    {
      name: "Matrix ",
      rating: "5/5"
    },
    {
      name: "Arrival",
      rating: "5/5"
    },
    {
      name: "Passengers ",
      rating: "4/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Action");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>My Movie Recommendations 🎬 </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favourite list of recommended movies. Select a genre to get
        started.{" "}
      </p>

      <div>
        {Object.keys(movieDB).map((genre) => (
          <button className="Btn" onClick={() => genreClickHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieDB[selectedGenre].map((movie) => (
            <li className="movie" key={movie.name}>
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
