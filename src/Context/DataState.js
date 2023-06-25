import DataContext from './DataContext';
import { useContext, useState } from 'react';
import React from 'react';

const DataState = (props) => {
    const [isSignedIn, setIsSignedIn] = useState("false")
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const removeFromCart = (itemId) => {
        const itemIndex = cart.findIndex(item => item.id == itemId);
        if (itemIndex > -1) {
          const newCart = [...cart];
          newCart.splice(itemIndex, 1);
          setCart(newCart);
        }
      };


    return (
        <DataContext.Provider value={{
            NisSignedIn: [isSignedIn, setIsSignedIn],
            Ncart: [cart, setCart],

            addToCart,
            removeFromCart,
        }}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataState