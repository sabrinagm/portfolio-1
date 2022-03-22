//import React from "react";
import {useState} from 'react';

function AddToCart(props) {
    const [initialButton, clickedButton] = useState("Add to Cart")
    const textChange = (text) => clickedButton(text);

        return(
            <button className='AddToCartButton' onClick={() => textChange(`Added ${props.itemName}`)}>{initialButton}</button>
        )
}

export default AddToCart;




