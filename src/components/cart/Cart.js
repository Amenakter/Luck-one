import React from 'react';
import CarProduct from '../cartProduct/CarProduct';
import "./Cart.css"

const Cart = (props) => {
    const { name, image } = props.cart
    
   
  
    return (
        <div className='cart'>
         <div className='selectProduct'>
                <CarProduct name={name} img={image} ></CarProduct>
            </div>
            <div>
                
            </div>
            
        </div>
    );
};

export default Cart;