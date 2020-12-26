import React, { Component } from 'react';
import PurchasedItem from '../PurchasedItem/PurchasedItem';
import ProfilePurchasedTotal from '../ProfilePurchasedTotal/ProfilePurchasedTotal';
import iGiftContext from '../iGiftContext';

class ProfilePurchased extends Component {
    static contextType = iGiftContext;

    render() { 
        return (
            <div>
                <h2>Gifts Purchased</h2>
                <ul>
                    {this.context.wishlists.map((item, index) => {
                        if(item.profile_id === this.props.profile.id){
                            if(item.checked == true){
                                return(
                                    <PurchasedItem item={item} key={index} />
                                )
                            }
                        }
                        
                    })}  
                </ul>
                <ProfilePurchasedTotal profile={this.props.profile} />
            </div>
        );
    }
}
 
export default ProfilePurchased;