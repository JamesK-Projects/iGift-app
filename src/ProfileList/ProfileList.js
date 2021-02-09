import React, { Component } from 'react';
import iGiftContext from '../iGiftContext';
import ProfileToken from '../ProfileToken/ProfileToken';

class ProfileList extends Component {
    static contextType = iGiftContext;
    render() { 
        return(
            <div>
                {this.context.profiles.map(profile => {
                    if(profile.user_id === this.props.user.id) {
                        return(
                            <div key={profile.id}>
                                <ProfileToken profile={profile} />
                            </div>
                        )
                    }
                })
                }
            </div>
        )
    }
}
 
export default ProfileList;