import React from 'react';
import queryString from 'query-string';
const posts = (props) => {
    const result = queryString.parse(props.location.search);
    console.log('result',result);
return ( <h1>Year:{props.match.params.year} month:{props.match.params.month}</h1> );
}
 
export default posts;