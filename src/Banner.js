import React, { useEffect, useState } from "react";
import Axios from "./axios";
import Requests from "./requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await Axios.get(Requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }
    fetchData();
  }, []);

  const style = {
    backgroundSize: "cover",
    backgroundImage:
      "url('https://image.tmdb.org/t/p/original" + movie.backdrop_path + "')",

    backgroundPosition: "center center",
  };

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
  }
  return (
    <header className="banner" style={style}>
      {/* background image */}
      {/* title */}
      {/* div with two buttons */}
      {/* description */}
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner__fadeBottom"></div>
    </header>
  );
}

export default Banner;
