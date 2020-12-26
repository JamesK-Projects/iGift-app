import React, { Component } from 'react';
import iGiftContext from '../iGiftContext';
import config from '../config';

class AddProfile extends Component {
    static contextType = iGiftContext;

    state={
        name: '',
        user_id: this.props.user.id
    }

    inputNewProfile = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    submitAddProfile = () => {
        //e.preventDefault()
        fetch(config.API_ENDPOINT + 'api/profiles', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
				'content-type': 'application/json'
		 	}

        })
        .then(res => {
            if(!res.ok){
                throw new Error(res.status)
            }
            //console.log(res.json())
            return res.json()
        })
        .then(data => {
            this.context.getProfiles()
        })
        .catch(error => this.setState({error}))
    }

    render() { 
        return (
            <div>
                <form className="add-profile">
                    <input type="text" placeholder="Name for new Profile" onChange={this.inputNewProfile}/>
                    <input type="button" value="Add Profile" onClick={this.submitAddProfile}/>
                </form>
            </div>
        );
    }
}
 
export default AddProfile;