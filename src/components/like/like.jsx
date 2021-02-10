import React from 'react';
const like = ({liked,onLike}) => {
    let classes = liked ? "fa fa-heart-o" : "fa fa-heart";
    return ( <i style={{cursor:"pointer"}} onClick={onLike} className={classes} aria-hidden="true"></i> );
}
 
export default like;