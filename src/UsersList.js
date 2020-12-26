import React, { Component } from 'react';
import iGiftContext from './iGiftContext';

class UsersList extends Component {
    static contextType = iGiftContext;

    render() { 
        this.context.users.map(user => {
            console.log(user)
            return(user)
            
        })
        return (
                <div></div>
            )
    }
}
 
export default UsersList;

//do not need

