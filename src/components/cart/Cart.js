import React from 'react';
import "./Cart.css"

const Cart = ({props}) => {
  
    return (
        <div className='cart'>
            <h3>Selected Product</h3>
            <p>name:{ props.name}</p>
           
        </div>
    );
};

export default Cart;