import axios from "axios";
import React, { Component } from 'react';


const BASE_URL = "https://api.themoviedb.org/3/trending/movie/day";
const KEY_API = "5f08b247cb38717273191ac24579da48";


class HomePage extends Component {
  state = {
    results: [],
  };
  
  componentDidMount() {

    axios
      .get(
        'https://api.themoviedb.org/3/trending/movie/day?api_key=5f08b247cb38717273191ac24579da48')
      .then(response => {
      this.setState({
        results: response.data.results,
      });
      });

  }

  render() {
    const { results } = this.state;
    return (
      <div>
        <h1>Trending today</h1>
        <ul>
          {results.map(({ original_title, poster_path }) => (
            <li key={original_title}>
              <a href={poster_path}>{original_title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

  export default HomePage;
