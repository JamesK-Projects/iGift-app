import React, { Component } from 'react';
import iGiftContext from '../iGiftContext';

class ProfilePurchasedTotal extends Component {
    static contextType = iGiftContext;

    render() { 
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        })

        let purchasedTotal = 0;
        this.context.wishlists.map((item, index) => {
            if(item.profile_id === this.props.profile.id){
                if(item.checked == true){
                    purchasedTotal += item.cost
                }
            }
            
        })

        return (
            <div>
                <h2 className="total-spent">Total Spent on {this.props.profile.name}: {formatter.format(purchasedTotal)}</h2>
            </div>
        );
    }
}
 
export default ProfilePurchasedTotal;