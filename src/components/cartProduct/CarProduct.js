import React from 'react';
import './cartProduct.css'

const CarProduct = (props) => {
   
    return (
        <div >
            <div className='cartProduct'>
            <img src={props.img} alt="" />
            <h4>{props.name}</h4>
            </div>
           

        </div>
    );
};

export default CarProduct;