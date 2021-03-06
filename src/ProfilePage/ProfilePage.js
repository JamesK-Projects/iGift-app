import React, { Component } from 'react';
import iGiftContext from '../iGiftContext';
import ProfileWishlist from '../ProfileWishlist/ProfileWishlist';
import ProfilePurchased from '../ProfilePurchased/ProfilePurchased';
import { Link } from 'react-router-dom'
import './ProfilePage.css';

class ProfilePage extends Component {
    static contextType = iGiftContext;

    render() { 
        return (
            <div>
                {this.context.profiles.map((profile) => {
                    if(this.props.match.params.profileId == profile.id){
                        return(
                            <div key={profile.id}>
                                <h4 className="back-button">
                                    <Link to={`/budget-page/users/${profile.user_id}`}>
                                        Back
                                    </Link>
                                </h4>
                                <h2 className="profile-name">{profile.name}'s Profile</h2>
                                <div className='profile-wishlist'>
                                    <ProfileWishlist profile={profile} wishlists={this.context.wishlists} />
                                </div>
                                <div className='profile-total'>
                                    <ProfilePurchased profile={profile} />
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        );
    }
}
 
export default ProfilePage;