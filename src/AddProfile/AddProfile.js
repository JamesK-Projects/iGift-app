import React, { Component } from 'react';
import iGiftContext from '../iGiftContext';
import config from '../config';

class AddProfile extends Component {
    static contextType = iGiftContext;

    state={
        name: '',
        user_id: 1 //temporary - need to set based on user login info
    }

    inputNewProfile = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    submitAddProfile = (e) => {
        e.preventDefault()
        fetch(config.API_ENDPOINT + 'api/profiles', {
            method: 'POST',
            body: JSON.stringify(this.state)
        })
        .then(res => {
            if(!res.ok){
                throw new Error(res.status)
            }
            console.log(res.json())
            return res.json()
        })
        .catch(error => this.setState({error}))
    }

    render() { 
        return (
            <div>
                <form className="add-profile">
                    <input type="text" placeholder="Name for new Profile" onChange={this.inputNewProfile}/>
                    <input type="button" value="Add Profile" onClick={(e) => this.submitAddProfile}/>
                </form>
            </div>
        );
    }
}
 
export default AddProfile;