import React from "react";
//import MenuApp from "../../App";
import AddToCart from '../AddToCart';

export default class MenuItem extends React.Component {
  render() {
    let itemId = "menu-item-" + this.props.itemId;
    return (
      <div className = "menu-item" id={itemId}>
        <p>${this.props.itemPrice}</p>
        <h2>{this.props.itemName}</h2>
        <p>{this.props.itemDescription}</p>
        <AddToCart>{this.props.itemName}</AddToCart>
      </div>
    );
  }
}