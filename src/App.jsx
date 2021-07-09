import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
// import MoviePage from './components/MoviePage';

const App = () => (
  <>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      {/* <li>
        <link to="/movies">Movies</link>
      </li> */}
    </ul>

    <Switch>
      <Route path="/">
        <HomePage />
      </Route>
      {/* <Route path="/movies">
      <MoviePage />
    </Route> */}
    </Switch>
  </>
);

export default App;