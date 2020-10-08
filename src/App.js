import React, { useEffect, useState } from 'react';
import { Title } from './components/Title'
import { FilterContext } from "./contexts/filterContext"
import { Index } from "./views/Index";
import './App.css';

const URL = process.env.REACT_APP_URL;
const key = process.env.REACT_APP_KEY;

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
