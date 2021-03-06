/** @format */
import React, { Component } from 'react';
import Joi from "joi-browser";
import Form from "../../components/form/form";
import * as GenresAPI from "../../services/fakeGenresService";
import * as MoviesAPI from "../../services/fakeMoviesService";
class MoviesForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock:'',
      dailyRentalRate:""
    },
    genres:[],
    errors: {},
  };
  schema={
    _id:Joi.string(),
    title:Joi.string().required().label('Title'),
    genreId:Joi.string().required().label('Genre'),
    numberInStock:Joi.number().required().min(0).max(100).label('Number In Stock'),
    dailyRentalRate:Joi.number().required().min(0).max(10).label('Daily Rental Rate')
  };
  componentDidMount() {
    const genres = GenresAPI.getGenres();
    this.setState({genres});
    const movieId = this.props.match.params.id ;
    if(movieId === 'new') return;
    const movie = MoviesAPI.getMovie(+movieId);
    if(!movie){ return this.props.history.replace('/not-found');
    
  }
    this.setState({data:this.mapToViewModel(movie)});
  }
  mapToViewModel = (movie) =>{
    return {
      _id:movie._id,
      title:movie.title,
      genreId:movie.genre._id,
      numberInStock:movie.numberInStock,
      dailyRentalRate:movie.dailyRentalRate
    }
  };
  doSubmit = ()=>{
    MoviesAPI.saveMovie(this.state.data);
    this.props.history.push('/movies');
  };

  render() { 
    return ( 
    <React.Fragment>
    <h1>Movie Form</h1>
    <form onSubmit={this.handleFormSubmit}>
      {this.renderInput("title", "Title")}
      {this.renderSelect('genreId','Genre',this.state.genres)}
      {this.renderInput("numberInStock", "Number In Stock")}
      {this.renderInput("dailyRentalRate", "Rate")}
      {this.renderButton("save")}
    </form>
  </React.Fragment> );
  }
}
 
export default MoviesForm;

