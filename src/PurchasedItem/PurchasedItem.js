import React, { Component } from 'react';
import '../PurchasedItem/PurchasedItem.css';

class PurchasedItem extends Component {
    render() { 
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        })

        return (
            <div className="purchased-item">
                <h3 className="purchased-item-name">{this.props.item.name}</h3>
                <h3 className="purchased-item-cost">{formatter.format(this.props.item.cost)}</h3>
            </div>
        );
    }
}
 
export default PurchasedItem;