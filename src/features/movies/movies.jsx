/** @format */

import React, { Component } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import * as MoviesAPI from "../../services/fakeMoviesService";
import * as GenresAPI from "../../services/fakeGenresService";
import MoviesTable from "./moviesTable/moviesTable";
import Pagination from "../../components/pagination/pagination";
import ListGroupItems from "../../components/listGroupItems/listGroupItems";
import SearchBox from '../../components/searchBox/searchBox';
import { paginate } from "../../utils/paginate";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    search: "",
    currentPage: 1,
    pageSize: 10,
    sortColumn: { path: "title", order: "asc" },
  };
  componentDidMount() {
    const genres = [{ _id: "", name: "All Movies" }, ...GenresAPI.getGenres()];
    this.setState({ movies: MoviesAPI.getMovies(), genres });
  }
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies, currentPage: 1 });
  };
  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1,search:"" });
  };
  NextPrevPageHandler = (label) => {
    const { currentPage } = this.state;
    if (label === "prev") {
      // if(currentPage===1) this.setState({currentPage:6});
      // else{this.setState({ currentPage: currentPage - 1 });}
      this.setState({ currentPage: currentPage - 1 });
    } else if (label === "next") {
      // if(currentPage===6) this.setState({currentPage:1});
      // else{this.setState({ currentPage: currentPage + 1 });}
      this.setState({ currentPage: currentPage + 1 });
    }
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  getPageData = () => {
    const {
      movies: allMovies,
      sortColumn,
      currentPage,
      search,
      pageSize,
      selectedGenre,
    } = this.state;
    let filtered=allMovies;
    if(search){
      filtered = allMovies.filter(m=> m.title.toLowerCase().includes(search.toLowerCase()));
    }
    else if( selectedGenre && selectedGenre._id){
      filtered = allMovies ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
      : allMovies;
    }
     
        
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: movies };
  };
  handleSearch = (input)=>{
   const search = input['name'] = input['value'];
   this.setState({search,selectedGenre:null});
  };
  render() {
    const {
      movies: allMovies,
      sortColumn,
      genres,
      currentPage,
      pageSize,
      selectedGenre,
      search,
    } = this.state;
    const { length: count } = this.state.movies;
    const { totalCount, data: movies } = this.getPageData();
    if (count === 0) return <p>There are no movies into database.</p>;
    return (
      <div className='row'>
        <div className='col-3'>
          <ListGroupItems
            items={genres}
            selectItem={selectedGenre || {}}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className='col'>
          <Link
            to={`/movies/new`}
            className='btn btn-primary'
            style={{ "margin-bottom": 20 }}>
            New Movies
          </Link>
          <p>Showing ({totalCount}) movies in the database.</p>
          <SearchBox placeholder="Search ..." value={search} onChange={this.handleSearch}/>
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
            onNextPrev={this.NextPrevPageHandler}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
