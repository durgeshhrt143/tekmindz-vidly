/** @format */

import React from "react";
import {Route,Link} from 'react-router-dom';
import User from '../user/user';
import Abc from '../abc/abc';
const admin = (props) => {
  return (
    <React.Fragment>
      <h1>admin</h1>
      <ul>
          <li>
              <Link to="/admin/user">user</Link>
          </li>
          <li>
              <Link to="/admin/abc">abc</Link>
          </li>
      </ul>
      <Route path="/admin/user" component={User}/>
      <Route path="/admin/abc" component={Abc}/>
    </React.Fragment>
  );
};

export default admin;
