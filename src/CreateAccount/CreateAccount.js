import React, { Component } from 'react';
import config from '../config';
import '../CreateAccount/CreateAccount.css';
import iGiftContext from '../iGiftContext';

class CreateAccount extends Component {
    static contextType = iGiftContext;
    state = {
        name: '',
        username: '',
        email: '',
        password: '',
        budget: 0
    }

    handleNameInput = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleUsernameInput = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handleEmailInput = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handlePasswordInput = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    validateInputs = (e) => {
        if(this.state.name == '' || this.state.username == '' || this.state.email == '' || this.state.password == ''){
            window.alert('Please fill out all fields')
        } else this.confirmUniqueUsername(e)
    }

    confirmUniqueUsername = (e) => {
        var uniqueUsername = true;
        this.context.users.map(user => {
            if(user.username === this.state.username){
                uniqueUsername = false;
            }
        })
        if(uniqueUsername == false) {
            window.alert('Username is taken, please choose something else')
        } else this.handleSubmit(e)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(config.API_ENDPOINT + 'api/users', {
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
            return res.json()
        })
        .then(() => {
            this.context.getUsers()
        })
        .then(() => {
            this.setState({
                name: '',
                username: '',
                email: '',
                password: '',
                budget: 0
            })
        })
        .then(() => {
            window.alert('Account created successfully!')
        })
        .catch(error => this.setState({error}))
        
    }


    render() { 
        return (
            <div>
                <section className="create-account-section">
                    <header>
                        <h3 className="section-header">Create A New Account</h3>
                    </header>
                    <form className="signup-form" onSubmit={e => this.validateInputs(e)}>
                        <div className="form-item">
                            <label htmlFor="name">Name</label>
                            <input placeholder="Name" type="text" name="create-name" id="create-name" value={this.state.name} onChange={e => this.handleNameInput(e)}/>
                        </div>
                        <div className="form-item">
                            <label htmlFor="username">Username</label>
                            <input placeholder="Username" type="text" name="create-username" id="create-username" value={this.state.username} onChange={e => this.handleUsernameInput(e)}/>
                        </div>
                        <div className="form-item">
                            <label htmlFor="email">Email</label>
                            <input placeholder="Email" type="text" name="create-email" id="create-email" value={this.state.email} onChange={e => this.handleEmailInput(e)}/>
                        </div>
                        <div className="form-item">
                            <label htmlFor="password">Password</label>
                            <input placeholder="Password" type="password" name="create-password" id="create-password" value={this.state.password} onChange={e => this.handlePasswordInput(e)}/>
                        </div>
                        <button type="submit" className="submit-button">Create Account</button>
                    </form>
                </section>
            </div>
        );
    }
}
 
export default CreateAccount;