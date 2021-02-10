import React from 'react';
import {Link,NavLink} from 'react-router-dom';
const navbar = (props) => {
    return ( 
        <nav className="navbar navbar-expand-sm bg-light navbar-dark">
  <Link className="navbar-brand" to="/">Vidly</Link>

 
  <ul className="navbar-nav">
    <li className="nav-item">
      <NavLink className="nav-link" to="/movies">Movies</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/customers">Customers</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/rentals">Rentals</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/login">Login</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/register">Register</NavLink>
    </li>
  </ul>
</nav>
     );
}
 
export default navbar;