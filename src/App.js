/** @format */

import React, { Component } from "react";
import Movies from "./features/movies/movies";
import Navbar from "./components/navbar/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Admin from "./routes/admin/admin";
import Posts from "./routes/posts/posts";
import Product from "./routes//product/product";
import Home from "./routes//home/home";
import productDetails from "./routes//productDetails/productDetails";
import NotFoundPage from "./features/notFound/notFound";
import Rentals from "./features/rentals/rentals";
import Customer from "./features/customer/customer";
import MovieForm from "./features/movieForm/movieForm";
import LoginForm from "./features/loginForm/loginForm";
import RegisterForm from "./features/registerForm/registerForm";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className='container'>
          <div>
            <Switch>
              <Route path='/register' component={RegisterForm} />
              <Route path='/login' component={LoginForm} />
              <Route path='/movies/:id' exact component={MovieForm} />
              <Route path='/movies' exact component={Movies} />
              <Route path='/rentals' component={Rentals} />
              <Route path='/customers' component={Customer} />
              <Route path='/not-found-page' component={NotFoundPage} />
              <Redirect from='/' to='/movies' exact />
              <Redirect to='/not-found-page' exact />
            </Switch>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
