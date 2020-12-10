import React, { Component } from 'react';
import iGiftContext from '../iGiftContext';
import FriendWishlist from '../FriendWishlist/FriendWishlist';
import FriendPurchased from '../FriendPurchased/FriendPurchased';
import './FriendProfilePage.css';

class FriendProfilePage extends Component {
    static contextType = iGiftContext;

    render() { 
        return (
            <div>
                {this.context.friends.map((friend) => {
                    if(friend.id == this.props.match.params.profileId){
                        return(
                        <div>
                            <h1>{friend.name}'s Profile</h1>
                            <div className='friend-wishlist'>
                                <FriendWishlist friend={friend} key={friend.id} />
                            </div>
                            <div className='friend-total'>
                                <FriendPurchased friend={friend} key={friend.id} />
                            </div>
                        </div>
                    )
                    }
                    
                })}
            </div>
        );
    }
}
 
export default FriendProfilePage;