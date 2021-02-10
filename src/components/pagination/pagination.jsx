/** @format */

import React from "react";
import PropTypes from 'prop-types';
import _ from 'lodash';
const pagination = ({itemCount,currentPage,pageSize,onPageChange,onNextPrev}) => {
  const pageCount = Math.ceil(itemCount /pageSize);
  if(pageCount === 1) return null;
  const pages = _.range(1,pageCount+1);
  const activeClass = (page)=>{
      return currentPage === page ? 'page-item active' :'page-item';
  };
 
  return (
    <ul className='pagination'>
      <li className='page-item'>
        <button disabled={currentPage === 1} className='page-link' onClick={()=>onNextPrev('prev')}>
          Previous
        </button>
      </li>
      {pages.map(page=>(<li key={page} className={activeClass(page)}>
        <button className='page-link' onClick={()=>onPageChange(page)}>
          {page}
        </button>
      </li>))}
      <li className='page-item'>
        <button disabled={currentPage === pages.length} className='page-link' onClick={()=>onNextPrev('next')}>
          Next
        </button>
      </li>
    </ul>
  );
};
pagination.propTypes = {
    itemCount:PropTypes.number.isRequired, 
    pageSize:PropTypes.number.isRequired,
    currentPage:PropTypes.number.isRequired, 
    onPageChange:PropTypes.func.isRequired,
    onNextPrev:PropTypes.func.isRequired
  };
export default pagination;
