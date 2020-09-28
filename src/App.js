import React, { useEffect, useState } from 'react';
import './App.css';
import { Title } from './components/Title'
import {FilterContext} from "./contexts/filterContext"
import { Index } from "./views/index";

// This had ought to be in an .env
const URL = 'https://code-challenge.spectrumtoolbox.com/api/restaurants';
const key = 'Api-Key q3MNxtfep8Gt';

// Let's use app as a shell to display a home/index
export const App = () => {
  const [fetchedData, setFetchedData] = useState([]);

  const filters = {
    attire: '',
    genre: '',
    pagination: 0,
    search: '',
    state: '',
  }

  const [filterValues, setFilterValues] = useState(filters);
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
    <FilterContext.Provider value={{filterValues, setFilterValues}}>
      <div className="App">
        <header className="App-header">
          <Title />
          <Index data={fetchedData} />
        </header>
      </div>
    </FilterContext.Provider>
  );
}
