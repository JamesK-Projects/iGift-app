import React, { Component } from 'react';
import iGiftContext from '../iGiftContext';
import WishlistItem from '../WishlistItem/WishlistItem';

class FriendWishlist extends Component {
    static contextType = iGiftContext;

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: ''
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.context.addItem(this.state.name, this.state.price, this.props.friend.id)
    } 

    handleItemChange = (e) => {
        e.preventDefault();
        this.setState({
            name: e.target.value
        })
    }

    handlePriceChange = (e) => {
        e.preventDefault();
        this.setState({
            price: Number(e.target.value)
        })
    }

    render() { 
        console.log(this.context)
        
        return (
            <div>
                <h2>Wishlist</h2>
                {this.props.friend.wishlist.map((item, index) => {
                    console.log(item)
                    return(
                        <WishlistItem item={item} key={index} />
                    )
                })}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.name} onChange={this.handleItemChange} placeholder="Item Name" />
                    <input type="text" value={this.state.price} onChange={this.handlePriceChange} placeholder="Price" />
                    <input type="submit" value="Add Item" />
                </form>
            </div>
            //<input type="text" name="budget" id="budget" onChange={e => context.updateBudget(e.target.value)} />
        );
    }
}
 
export default FriendWishlist;