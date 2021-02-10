/** @format */
import React, { Component } from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import Like from "../../../components/like/like";
import Table from "../../../components/table/table";
class MoviesTable extends Component {
  columns = [
  { path: "title", label: "Title",content:(movie)=><Link to={`/movies/${movie._id}`}>{movie.title}</Link> },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onLike={() => this.props.onLike(movie)} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          className='btn btn-danger btn-sm'
          onClick={() => this.props.onDelete(movie)}>
          delete
        </button>
      ),
    },
  ];
  render() {
    const { movies, sortColumn, onSort } = this.props;
    return (
      <Table
        data={movies}
        sortColumn={sortColumn}
        columns={this.columns}
        onSort={onSort}
      />
    );
  }
}
MoviesTable.propTypes = {
  movies: PropTypes.array.isRequired,
  sortColumn: PropTypes.object.isRequired,
  onLike: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
};
export default MoviesTable;
