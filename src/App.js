import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Index } from "./views/index";
import {FilterContext} from "./contexts/filterContext"

// This had ought to be in an .env
const URL = 'https://code-challenge.spectrumtoolbox.com/api/restaurants';
const key = 'Api-Key q3MNxtfep8Gt';

// Let's use app as a shell to display a home/index
export const App = () => {
  const [filterValue, setFilterValue] = useState('');
  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
    fetch(URL, {
      headers: {
        'Authorization': key,
      },
    }).then(response => response.json())
    .then(data =>{setFetchedData(data)}
    )
  }, [])

  return (
    <FilterContext.Provider value={{filterValue, setFilterValue}}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Index data={fetchedData} />
        </header>
      </div>
    </FilterContext.Provider>
  );
}
