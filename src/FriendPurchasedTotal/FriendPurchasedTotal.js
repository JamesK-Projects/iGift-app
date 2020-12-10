import React, { Component } from 'react';

class FriendPurchasedTotal extends Component {
    render() { 
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        })

        let purchasedTotal = 0;
        this.props.friend.wishlist.map((item, index) => {
            if(item.checked == true){
                purchasedTotal += item.cost
            }
        })
        console.log(purchasedTotal)
        return (
            <div>
                <h2>Total Spent on {this.props.friend.name}: {formatter.format(purchasedTotal)}</h2>
            </div>
        );
    }
}
 
export default FriendPurchasedTotal;