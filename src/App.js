import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Index } from "./views/index"

const URL = 'https://code-challenge.spectrumtoolbox.com/api/restaurants';
const key = 'Api-Key q3MNxtfep8Gt';

// Let's use app as a shell to display a home/index
export const App = () => {
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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. holloer?? yp
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Index data={fetchedData} />
        </a>
      </header>
    </div>
  );
}
