import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import iGiftContext from '../iGiftContext';
import './ProfileToken.css';

class ProfileToken extends Component {
    static contextType = iGiftContext

    render() { 
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        })

        let total = 0;
        for(let i = 0; i < this.context.wishlists.length; i++){
            if(this.context.wishlists[i].profile_id === this.props.profile.id && this.context.wishlists[i].checked === true){
                total += this.context.wishlists[i].cost;
            }
        }
        
        return (
            <div>
                <Link to={`/profiles/${this.props.profile.id}`}>
                    <div className="profile-token">
                        <div className="profile-name">
                            <h2>{this.props.profile.name}</h2>
                        </div>
                        <div className="total-spent">
                            <h2>Spent: {formatter.format(total)}</h2>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}
 
export default ProfileToken;

