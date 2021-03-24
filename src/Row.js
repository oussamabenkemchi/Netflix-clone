import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import MovieTrailer from "movie-trailer"
import Axios from "./axios";
import "./Row.css";



const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("")
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const request = await Axios.get(fetchUrl);
      //console.log(request);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) =>{
      if(trailerUrl){
          setTrailerUrl("")
      }else{
          MovieTrailer(movie?.name || movie.original_name || movie.title || "")
          .then(url => {
            console.log(movie.name);
            const urlParams = new URLSearchParams(new URL(url).search)
            console.log("url is "+urlParams);
            setTrailerUrl(urlParams.get('v'));
          })
          .catch(error => console.log(error))
      }
      console.log("after: playing: "+playing + "  , url: "+trailerUrl);

  }

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={
              isLargeRow ? "row__poster row_posterLarger" : "row__poster"
            }
            src={
              isLargeRow
                ? base_url + movie.poster_path
                : base_url + movie.backdrop_path
            }
            alt={movie.name}

            onClick={()=>handleClick(movie)}
          />
        ))}
      </div>

      {trailerUrl?<YouTube videoId={trailerUrl} opts={opts} /> : "" }

    </div>
  );
}

export default Row;
