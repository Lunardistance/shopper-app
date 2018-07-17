import React from 'react';
import PropTypes from 'prop-types';
import './Item.css'

const Item = ({ item, onAddToCart }) => (
    <div className = "item">
    <div className = 'item-left'>
        <div className = 'item-image' />
        <div className = "item-title">{item.name}</div>
        <div className = "item-description">{item.description}</div>
    </div>
    <div className = 'item-right'>
    <div className = 'item-price'>
    ${item.price}
    </div>
    <button 
        className = 'item-addToCart'
        onClick={onAddToCart}
        >
        Add To Cart
        </button>
    </div>
    </div>
);

Item.propType = {
    item: PropTypes.object.isRequired,
    onAddToCart: PropTypes.func.isRequired
}

export default Item;

//Create a new page add to cart.js, will grab the id of the item (object) selected within the array
//and then it will put the item on the cart page. The id has to match the item clicked.
//WHne I click remove it will take the id and you use .remove
