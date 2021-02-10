/** @format */

import React from "react";
import PropTypes from 'prop-types';
import TableHeader from "../tableHeader/tableHeader";
import TableBody from "../tableBody/tableBody";
const Table = ({ data, sortColumn, columns, onSort }) => {
  return (
    <table className='table'>
      {/* <thead>
      <tr>
        <th onClick={()=>this.raiseSort('title')}>Title</th>
        <th onClick={()=>this.raiseSort('genre.name')}>Genre</th>
        <th onClick={()=>this.raiseSort('numberInStock')}>Stock</th>
        <th onClick={()=>this.raiseSort('dailyRentalRate')}>Rate</th>
        <th></th>
        <th></th>
      </tr>
    </thead> */}
      <TableHeader
        onSort={onSort}
        columns={columns}
        sortColumn={sortColumn}
      />
      <TableBody data={data} columns={columns} />
      {/* <tbody>
      {movies.map((movie) => (
        <tr key={movie._id}>
          <td>{movie.title}</td>
          <td>{movie.genre.name}</td>
          <td>{movie.numberInStock}</td>
          <td>{movie.dailyRentalRate}</td>
          <td>
            <Like liked={movie.liked} onLike={() => onLike(movie)} />
          </td>
          <td>
            <button
              className='btn btn-danger btn-sm'
              onClick={() => onDelete(movie)}>
              delete
            </button>
          </td>
        </tr>
      ))}
    </tbody> */}
    </table>
  );
};
Table.propTypes = {
    data:PropTypes.array.isRequired,
    columns:PropTypes.array.isRequired, 
    sortColumn:PropTypes.object.isRequired,
    onSort:PropTypes.func.isRequired
};
export default Table;
