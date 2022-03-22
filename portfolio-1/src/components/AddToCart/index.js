//import React from "react";
import {useState} from 'react';

function AddToCart() {

    const [initialButton, clickedButton] = useState("Add to Cart")
    const textChange = (text) => clickedButton(text);

        return(
            <button className='AddToCartButton' onClick={() => textChange(`Added to Cart`)}>{initialButton}</button>
        )
}

export default AddToCart;




