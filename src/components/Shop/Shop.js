import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'
const Shop = () => {

const[products, setProducts]= useState([])
useEffect(()=>{
    fetch('./products.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))
},[])




    return (
        <div className='shop-section'>
            

            <div className="product"><h2>this is product</h2>
            
            {products.map(product=><Products
            key={product.id}
            product={product}
            ></Products>)}
            </div>
            <div className="summary"><h2>this is summary</h2></div>
        </div>
    );
};

export default Shop;