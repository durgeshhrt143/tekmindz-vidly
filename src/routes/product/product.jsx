
import React, { Component } from 'react';
import {Link } from 'react-router-dom';
class Product extends Component {
    state = { 
        products:[
            {
            id:1,name:'product1',
        },
        {
            id:2,name:'product2',
        },
        {
            id:3,name:'product3',
        }
    ]
     }
    render() { 
        return (this.state.products.map(product=>(<div key={product.id}><Link to={`/product/${product.id}`} key={product.id}>{product.name}</Link></div>))  );
    }
}
 
export default Product;