import React, { useEffect, useState } from 'react';
import './App.css';
import { Title } from './components/Title'
import {FilterContext} from "./contexts/filterContext"
import { Index } from "./views/index";

// This had ought to be in an .env
const URL = 'https://code-challenge.spectrumtoolbox.com/api/restaurants';
const key = 'Api-Key q3MNxtfep8Gt';

const filters = {
  attire: '',
  genre: '',
  pagination: 0,
  search: '',
  state: '',
}

export const App = () => {
  const [fetchedData, setFetchedData] = useState([]);

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
      <div className="App app-base">
        <Title />
        <Index data={fetchedData} />
      </div>
    </FilterContext.Provider>
  );
}
