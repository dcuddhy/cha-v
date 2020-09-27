import React, {useContext} from 'react';
import { FilterContext } from '../contexts/filterContext'

// Should probably break up the table into more components.  I say keep running for now.
export const Table = (tableData) => {
  const data = tableData.tableData.sort((a, b) => (a.name > b.name) ? 1 : -1);

  const {filterValue} = useContext(FilterContext);
  const filteredData = data.filter(elem => elem.state.toLowerCase().includes(filterValue.toLowerCase()));

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
        {filteredData.map((row, r) => {
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
