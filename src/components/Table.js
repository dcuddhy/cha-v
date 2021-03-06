import React, {useContext} from 'react';
import { Pagination} from './Pagination'
import { FilterContext } from '../contexts/filterContext'
import './Table.css'

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (x, i) =>
    arr.slice(i * size, i * size + size)
  );

// Should probably break up the table into more components.  I say keep running for now.
export const Table = (tableData) => {
  const {filterValues} = useContext(FilterContext);

  const data = tableData.tableData.sort((a, b) => (a.name > b.name) ? 1 : -1)
    // Attire filter is pretty straight forward.
    .filter(elem => elem.attire.toLowerCase() === filterValues.attire.toLowerCase()
    || filterValues.attire.toLowerCase() === ''
    )
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

    const paginatedData = chunk(data, 10);
    const pagesArray = paginatedData.map((page, p) => p);
    const displayData = paginatedData[filterValues.pagination];

    return (
      <>
      <div className="table-container">
        { displayData && displayData.length ?
          (<table className="table">
            <thead className="table-head">
              <tr>
                <th className="header-name">
                  Name
                </th>
                <th className="header-city">
                  City
                </th>
                <th className="header-state">
                  State
                </th>
                <th className="header-phone-number">
                  Phone Number
                </th>
                <th className="header-genres">
                  Genres
                </th>
                <th className="header-attire">
                  Attire
                </th>
              </tr>
            </thead>
            <tbody>
              {displayData.map((row, r) => {
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
                    <td>
                      {row.attire}
                    </td>
                  </tr>
                )
                })}
            </tbody>
          </table>)
        : 
          <div className="no-results"> Oops! There are no results... </div>
      }
      </div>
      <Pagination pagesArray={pagesArray} />
      </>
  );
}
