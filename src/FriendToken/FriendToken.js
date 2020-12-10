import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../FriendToken/FriendToken.css';

class FriendToken extends Component {
    render() { 
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        })

        let total = 0;
        for(let i = 0; i < this.props.friend.wishlist.length; i++){
            total += this.props.friend.wishlist[i].cost;
        }
        
        return (
            <div>
                <Link to={`/profile/${this.props.friend.id}`}>
                    <div className="friend-token">
                        <div className="friend-name">
                            <h2>{this.props.friend.name}</h2>
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
 
export default FriendToken;

