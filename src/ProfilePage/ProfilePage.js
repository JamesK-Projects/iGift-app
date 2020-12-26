import React, { Component } from 'react';
import iGiftContext from '../iGiftContext';
import ProfileWishlist from '../ProfileWishlist/ProfileWishlist';
import ProfilePurchased from '../ProfilePurchased/ProfilePurchased';
import './ProfilePage.css';

class ProfilePage extends Component {
    static contextType = iGiftContext;

    render() { 
        console.log(this.props)
        return (
            <div>
                {this.context.profiles.map((profile) => {
                    if(this.props.match.params.profileId == profile.id){
                        console.log(this.context)
                        console.log(profile)
                        return(
                            <div>
                                <h1>{profile.name}'s Profile</h1>
                                <div className='profile-wishlist'>
                                    <ProfileWishlist profile={profile} key={profile.id} />
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