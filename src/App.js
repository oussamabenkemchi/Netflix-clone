import React from "react";
import "./App.css";
import Row from "./Row";
import Requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
import movieTrailer from "movie-trailer"

function App() {


  movieTrailer("Lucifer")
      .then(trailer => console.log(trailer))
      
  return (
    <div className="App">

      


      <Nav />
      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={Requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={Requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={Requests.fetchTopRated} />
      <Row title="Science Fiction" fetchUrl={Requests.fetchScienceFiction} />
      <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} />
      <Row title="Animation" fetchUrl={Requests.fetchAnimation} />
      <Row title="Documentaries" fetchUrl={Requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
