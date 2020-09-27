import React from 'react';

// Should probably break up the table into more components.  I say keep running for now.
export const Table = (tableData) => {
  console.log('tableData: ', tableData);
  const data = tableData.tableData.sort((a, b) => (a.name > b.name) ? 1 : -1);
  
  return (
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
        {data.map(row => {
          return (
            <tr>
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
  );
}
