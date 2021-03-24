const API_KEY = "2bf058ab4bb59db0b0e84daeb01bc4df";

const requests = {
  fetchTrending: "/trending/all/week?api_key=" + API_KEY + "&language=en-US",
  fetchNetflixOriginals:
    "/discover/tv?api_key=" + API_KEY + "&with_networks=213",
  fetchTopRated: "/movie/top_rated?api_key=" + API_KEY + "&with_networks=213",
  fetchActionMovies: "/discover/movie?api_key=" + API_KEY + "&with_genres=28",
  fetchScienceFiction:
    "/discover/movie?api_key=" + API_KEY + "&with_genres=878",
  fetchHorrorMovies: "/discover/movie?api_key=" + API_KEY + "&with_genres=27",
  fetchAnimation: "/discover/movie?api_key=" + API_KEY + "&with_genres=16",
  fetchDocumentaries: "/discover/movie?api_key=" + API_KEY + "&with_genres=99",
};
export default requests;
