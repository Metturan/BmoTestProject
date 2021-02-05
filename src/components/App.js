import React from 'react';
import {Helmet} from 'react-helmet'
import SearchBar from './SearchBar'
import FoodList from './FoodList'
import '../App.css';
import { useSelector } from 'react-redux';

function App() {

  const listOfRestaurants = useSelector(state => state.searchResults)

  return (
    <div className="App">
        <Helmet>
            <meta charSet="utf-8" />
            <title>BMO Test Project</title>
            <meta name="description" content="Doing a test project for a cool company." />
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <meta name="og:title" property="og:title" content="My BMO Test Project"></meta>
            <link rel="canonical" href="http://mysite.com/" />
        </Helmet>
        <SearchBar />
        <FoodList list={listOfRestaurants} />
    </div>
  );
}

export default App;
