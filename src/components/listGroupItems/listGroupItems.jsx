/** @format */

import React from "react";
import PropTypes from 'prop-types';
const listGroupItems = ({items,selectItem,textProperty,valueProperty,onItemSelect}) => {
  return (
    <ul className='list-group'>
      {items.map(item=> (<li
       style={{cursor:'pointer'}}
       onClick={()=>onItemSelect(item)}
      key={item[valueProperty]}
      className={item === selectItem ? 'list-group-item active':'list-group-item'}>
      {item[textProperty]}</li>))}
    </ul>
  );
};
listGroupItems.defaultProps ={
  textProperty:'name',
  valueProperty:'_id'
}
listGroupItems.propTypes = {
  items:PropTypes.array.isRequired,
  selectItem:PropTypes.object.isRequired,
  onItemSelect:PropTypes.func.isRequired
}
export default listGroupItems;
