import React, { Component } from 'react';
import iGiftContext from '../iGiftContext';
import WishlistItem from '../WishlistItem/WishlistItem';

class ProfileWishlist extends Component {
    static contextType = iGiftContext;

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            cost: ''
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.context.addItem(this.state.name, this.state.cost, this.props.profile.id)
    } 

    handleItemChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handlePriceChange = (e) => {
        e.preventDefault();
        this.setState({
            cost: Number(e.target.value)
        })
    }

    render() { 
        this.props.wishlists.sort((a,b) => a.id - b.id)
        return (
            <div>
                <h2>Wishlist</h2>
                {this.props.wishlists.map((item, index) => {
                    
                    if(item.profile_id === this.props.profile.id){
                        console.log(item)
                        return(
                            <WishlistItem item={item} key={index} />
                        )
                    }
                    
                })}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.name} onChange={this.handleItemChange} placeholder="Item Name" />
                    <input type="text" value={this.state.cost} onChange={this.handlePriceChange} placeholder="Price" />
                    <input type="submit" value="Add Item" />
                </form>
            </div>
            //<input type="text" name="budget" id="budget" onChange={e => context.updateBudget(e.target.value)} />
        );
    }
}
 
export default ProfileWishlist;