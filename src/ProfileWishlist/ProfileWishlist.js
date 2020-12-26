import React, { Component } from 'react';
import iGiftContext from '../iGiftContext';
import WishlistItem from '../WishlistItem/WishlistItem';
import '../ProfileWishlist/ProfileWishlist.css';

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
        this.setState({
            name: '',
            cost: ''
        })
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
                <h2 className="section-header">Wishlist</h2>
                {this.props.wishlists.map((item, index) => {
                    
                    if(item.profile_id === this.props.profile.id){
                        return(
                            <WishlistItem item={item} key={index} />
                        )
                    }
                    
                })}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.name} onChange={this.handleItemChange} placeholder="Item Name" className="new-item-name"/>
                    <input type="text" value={this.state.cost} onChange={this.handlePriceChange} placeholder="Price" className="new-item-price"/>
                    <input type="submit" value="Add Item" className="new-item-submit"/>
                </form>
            </div>
        );
    }
}
 
export default ProfileWishlist;