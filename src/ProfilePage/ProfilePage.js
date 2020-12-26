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
                            <div>
                                <h1>
                                    <Link to={`/budget-page/users/${profile.user_id}`}>
                                        Back
                                    </Link>
                                </h1>
                                <h1>{profile.name}'s Profile</h1>
                                <div className='profile-wishlist'>
                                    <ProfileWishlist profile={profile} wishlists={this.context.wishlists} key={profile.id} />
                                </div>
                                <div className='profile-total'>
                                    <ProfilePurchased profile={profile} key={profile.id} />
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