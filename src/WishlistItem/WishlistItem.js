import React, { Component } from 'react';
import iGiftContext from '../iGiftContext';
import '../WishlistItem/WishlistItem.css';

class WishlistItem extends Component {
    static contextType = iGiftContext;

    

    render() { 
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        })

        return (     
            <div>
                <input type='checkbox' checked={this.context.friends[0].wishlist.checked} onChange={this.context.handleCheckboxChange} />
                <label htmlFor={this.props.item.name}>{this.props.item.name}    {formatter.format(this.props.item.cost)}</label>
                <button className="remove-button">Remove</button>
            </div>
        );
    }
}
 
export default WishlistItem;