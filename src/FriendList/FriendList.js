import React, { Component } from 'react';
import iGiftContext from '../iGiftContext';
import FriendToken from '../FriendToken/FriendToken';

class FriendList extends Component {
    static contextType = iGiftContext;

    render() { 
        return(
            <div>
                {this.context.friends.map((friend) => {
                    // if(friend.name){
                        return(
                            <div>
                                <FriendToken friend={friend} key={friend.id} />
                            </div>
                        )
                    // }
                    
                })}
            </div>
        )
    }
}
 
export default FriendList;