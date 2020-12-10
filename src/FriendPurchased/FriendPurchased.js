import React, { Component } from 'react';
import PurchasedItem from '../PurchasedItem/PurchasedItem';
import FriendPurchasedTotal from '../FriendPurchasedTotal/FriendPurchasedTotal';

class FriendPurchased extends Component {
    render() { 
        return (
            <div>
                <h2>Gifts Purchased</h2>
                <ul>
                    {this.props.friend.wishlist.map((item, index) => {
                        if(item.checked == true){
                            return(
                                <PurchasedItem item={item} key={index} />
                            )
                        }
                    })}  
                </ul>
                <FriendPurchasedTotal friend={this.props.friend} />
            </div>
        );
    }
}
 
export default FriendPurchased;