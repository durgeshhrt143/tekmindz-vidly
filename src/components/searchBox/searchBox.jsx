/** @format */

import React from "react";
import PropTypes from 'prop-types';
const searchBox = ({value,placeholder,onChange}) => {
  return (
    <input
      type='search'
      name='search'
      value={value}
      placeholder={placeholder}
      className='form-control'
      onChange={(e) => onChange(e.currentTarget)}
    />
  );
};
searchBox.propTypes = {
    value:PropTypes.string.isRequired, 
    placeholder:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired
};
export default searchBox;
