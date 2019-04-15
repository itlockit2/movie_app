import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

const movieTitles = ["Matrix", "Full Metal Jacket", "Oldboy", "Star Wars"];
const movieImages = [
  "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L._SY445_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/41TvQPuP-XL._SY450_.jpg",
  "https://ih1.redbubble.net/image.224519982.2775/flat,550x550,075,f.u2.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/81WjGytz7HL._SY445_.jpg"
];

const movies = [
  {
    title: "Matrix",
    poster:
      "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L._SY445_.jpg"
  },
  {
    title: "Full Meta Jacket",
    poster:
      "https://images-na.ssl-images-amazon.com/images/I/41TvQPuP-XL._SY450_.jpg"
  },
  {
    title: "Oldboy",
    poster:
      "https://ih1.redbubble.net/image.224519982.2775/flat,550x550,075,f.u2.jpg"
  },
  {
    title: "Star Wars",
    poster:
      "https://images-na.ssl-images-amazon.com/images/I/81WjGytz7HL._SY445_.jpg"
  }
];
class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return (
            <Movie title={movie.title} poster={movie.poster} key={index} />
          );
        })}
      </div>
    );
  }
}

export default App;
