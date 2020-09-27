import React, {useContext} from 'react';
import { FilterContext } from '../contexts/filterContext'

// Should probably break up the table into more components.  I say keep running for now.
export const Table = (tableData) => {
  const {filterValues} = useContext(FilterContext);

  const data = tableData.tableData.sort((a, b) => (a.name > b.name) ? 1 : -1)
    // State filter is pretty straight forward.
    .filter(elem => elem.state.toLowerCase().includes(filterValues.state.toLowerCase()))
    // Genre filtering logic should filter on an array of strings separated by commas.
    // User inputs should be an array separated by spaces, commas, periods.
    // Then we should compare the two arrays.
    .filter(elem => elem.genre.toLowerCase().includes(filterValues.genre.toLowerCase()))
    // Search filtering logic should filter on an array of strings separated by commas.
    // User inputs should be an array separated by spaces, commas, periods.
    // Then we should compare the two arrays.
    .filter(elem => elem.name.toLowerCase().includes(filterValues.search.toLowerCase())
      || elem.city.toLowerCase().includes(filterValues.search.toLowerCase())
      || elem.genre.toLowerCase().includes(filterValues.search.toLowerCase())
    );

    return (
    data.length ? 
    <table className="table">
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            City
          </th>
          <th>
            State
          </th>
          <th>
            Phone Number
          </th>
          <th>
            Genres
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, r) => {
          return (
            <tr key={r}>
              <td>
                {row.name}
              </td>
              <td>
                {row.city}
              </td>
              <td>
                {row.state}
              </td>
              <td>
                {row.telephone}
              </td>
              <td>
                {row.genre}
              </td>
            </tr>
          )
          })}
      </tbody>
    </table>
    : 
    <div>Oops! Something went wrong...</div>
  );
}
