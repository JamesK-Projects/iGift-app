import React, { Component } from 'react';

class AddFriend extends Component {
    render() { 
        return (
            <div>
                <input type="text" placeholder="Name of Friend" />
                <input type="button" value="Add Friend" />
            </div>
        );
    }
}
 
export default AddFriend;