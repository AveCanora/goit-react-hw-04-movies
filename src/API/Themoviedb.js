import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/trending/movie/day";
const KEY_API = "5f08b247cb38717273191ac24579da48";

const fetchMovie = async () => {
  const r = await axios.get(`${BASE_URL}?api_key=${KEY_API}`);
  return r.data.hits;
};

export default fetchMovie;
