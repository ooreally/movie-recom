import React from "react";
import "./styles.css";

import { useState } from "react";

const movieDB = {
  Sci_fi: [
    { name: "Interstellar", rating: "5/5" },
    { name: "Inception", rating: "5/5" },
    { name: "Oblivion", rating: "4.5/5" },
    { name: "The Martian", rating: "4.5/5" },
    { name: "Coherence", rating: "4/5" },
    { name: "Back to the future", rating: "4/5" },
    { name: "Prometheus", rating: "4/5" },
    { name: "Passengers", rating: "4/5" },
    { name: "John Carter", rating: "4/5" }
  ],

  Mystery: [
    { name: "Sherlock Holmes", rating: "5/5" },
    { name: "A Wednesday", rating: "5/5" },
    { name: "Drishyam", rating: "4.5/5" },
    { name: "Se7en", rating: "4.5/5" },
    { name: "Mirage", rating: "4/5" },
    { name: "Gone Girl", rating: "3.5/5" },
    { name: "Badla", rating: "3.5/5" },
    { name: "The detective Pikachu", rating: "3/5" }
  ],

  Horror: [
    { name: "The Conjuring", rating: "5/5" },
    { name: "Oculus", rating: "4.5/5" },
    { name: "1920", rating: "4.5/5" },
    { name: "The ring", rating: "4.5/5" },
    { name: "Get Out", rating: "4.5/5" },
    { name: "Horror Story", rating: "4/5" },
    { name: "Annabelle", rating: "4/5" }
  ],

  Comedy: [
    { name: "Hera Pheri", rating: "5/5" },
    { name: "The Hangover", rating: "5/5" },
    { name: "Golmaal", rating: "5/5" },
    { name: "Dumb and dumber", rating: "5/5" },
    { name: "Dhamaal", rating: "5/5" },
    { name: "Dhol", rating: "4/5" }
  ],

  Action: [
    { name: "300: Rise Of an Empire", rating: "5/5" },
    { name: "Avengers", rating: "5/5" },
    { name: "Troy", rating: "5/5" },
    { name: "The Legends Of Hercules", rating: "4.5/5" },
    { name: "The Punisher", rating: "4.5/5" },
    { name: "Logan", rating: "4.5/5" },
    { name: "Clash of the Titans", rating: "4.5/5" },
    { name: "Mission: Impossible", rating: "4/5" }
  ],

  Animation: [
    { name: "Onward", rating: "5/5" },
    { name: "Inside Out", rating: "5/5" },
    { name: "Toy Story", rating: "5/5" },
    { name: "Coco", rating: "5/5" },
    { name: "Boss Baby", rating: "5/5" },
    { name: "Frozen", rating: "4.5/5" },
    { name: "Moana", rating: "4/5" },
    { name: "Cars", rating: "4/5" }
  ],

  Rom_com_drama: [
    { name: "Eternal Sunshine Of The Spotless Mind", rating: "5/5" },
    { name: "La La Land", rating: "5/5" },
    { name: "500 days of Summer", rating: "5/5" },
    { name: "Five feet apart", rating: "5/5" },
    { name: "After", rating: "4.5/5" },
    { name: "Call me by your name", rating: "4.5/5" },
    { name: "The fault in our stars", rating: "4.5/5" },
    { name: "Fifty shades of grey", rating: "4/5" },
    { name: "Hungama", rating: "4/5" },
    { name: "Date Night", rating: "4/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Sci_fi");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <br />
      <h1>
        <span role="img" aria-label="new-im">
          🎬
        </span>
        Movies
      </h1>
      <p style={{ fontSize: "smaller" }}>
        &nbsp;&nbsp;&nbsp;Checkout my favorite movies. Select a genre to get
        started.
      </p>

      <div>
        {Object.keys(movieDB).map((genre) => (
          <button onClick={() => genreClickHandler(genre)} key={genre}>
            {genre}
          </button>
        ))}
      </div>
      <hr />

      <div>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieDB[selectedGenre].map((movie) => (
            <li key={movie.name}>
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
