import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, id, img, seller, shipping } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />

            <h3>This is Product: {name}</h3>
        </div>
    );
};

export default Product;