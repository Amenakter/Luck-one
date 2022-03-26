import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../product/Product';

import './cosmetic.css'

const Cosmetic = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data =>setProducts(data))
        
    },[])

    const handleAddToCart = (product) => {
   
        if (product.length === 4) {
            alert("Already 4 product selected")
        }
        else {
            const newCart = [...cart, product]
        setCart(newCart)
        }
        

    }
    const chooseProduct = () => {
        const randomProduct = cart[(Math.random() * cart.length) | 0]
        setCart([randomProduct]);
        
    }
    const deleted = () => {
        setCart([]);
        
    }

    return (
        <div>
            <div  className='header'>
            <h1>Cosmetics Shop</h1>
            <h3>Your Choise</h3>
          </div>
            <div className='products'>
        
        <div className="product-container">
            {
                products.map(product =>
                    <Product key={product.id}
                        product={product}
                        handleAddToCart = {handleAddToCart}
                    ></Product>)
           }
        </div>
        <div className="card-container">
            <h2>Selected Product:</h2>
            {
                cart.map(cart => <Cart
                    key = {Math.random()}
                    cart={cart}
                
                    ></Cart>)
            }
            <div className='cart-btn'>
            <button onClick={()=>chooseProduct(cart)}>Choose one</button>
            <button onClick={deleted}>Choose Again</button>
          </div>
          
           
        </div>
        
    </div>
        </div>
    );
};

export default Cosmetic;