import React from 'react';
import './Products.css'
const Products = (props) => {
    console.log(props.product)
    
    const{name, price, seller, img, ratings, stock,category }=props.product
    return (
        <div className='products-container'>
           <div className='product-photo'> <img src={img} alt="" /></div>
            <div>
                <h2>{name}</h2>
                <p>by:{seller}</p>
                <p>${price}</p>
              
                <h3>ratings:{ratings}</h3>
                <p>only {stock} left in stock- order soon</p>
                <button>add to cart</button>
            </div>
        </div>
    );
};

export default Products;