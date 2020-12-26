import React, { Component } from 'react';
import config from '../config';

class CreateAccount extends Component {
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

    handleSubmit = (e) => {
        //e.preventDefault()
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
        .catch(error => this.setState({error}))
    }


    render() { 
        return (
            <div>
                <section className="create-account-section">
                    <header>
                        <h3 className="section-header">Create Your Account</h3>
                    </header>
                    <form className="signup-form" onSubmit={e => this.handleSubmit(e)}>
                        <div className="form-item">
                            <label htmlFor="name">Name</label>
                            <input placeholder="Name" type="text" name="name" id="name" onChange={e => this.handleNameInput(e)}/>
                        </div>
                        <div className="form-item">
                            <label htmlFor="username">Username</label>
                            <input placeholder="Username" type="text" name="username" id="username" onChange={e => this.handleUsernameInput(e)}/>
                        </div>
                        <div className="form-item">
                            <label htmlFor="email">Email</label>
                            <input placeholder="Email" type="text" name="email" id="email" onChange={e => this.handleEmailInput(e)}/>
                        </div>
                        <div className="form-item">
                            <label htmlFor="password">Password</label>
                            <input placeholder="Password" type="password" name="password" id="password" onChange={e => this.handlePasswordInput(e)}/>
                        </div>
                        <button type="submit">Create Account</button>
                    </form>
                </section>
            </div>
        );
    }
}
 
export default CreateAccount;