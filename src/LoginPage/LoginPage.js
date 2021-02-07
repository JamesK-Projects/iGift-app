import React, { Component } from 'react';
import iGiftContext from '../iGiftContext';
import CreateAccount from '../CreateAccount/CreateAccount';
import '../LoginPage/LoginPage.css';

class LoginPage extends Component {
    static contextType = iGiftContext;
    state = {
        username: '',
        password: ''
    }

    checkCredentials = (e) => {
        e.preventDefault()
        var correctCredentials = false;
        var correctUser = '';
        this.context.users.map(user => {
            if (user.username === this.state.username && user.password === this.state.password){
                correctCredentials = true;
                correctUser = user;
            } 
        })
        if (correctCredentials == true){
            this.props.history.push(`/budget-page/users/${correctUser.id}`)
        } else window.alert('Username and/or Password are incorrect. Please try again')
    }

    handleUsernameInput = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handlePasswordInput = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    render() { 
        return (
            <div className="login-page">
                <section className="login-section">
                    <form className="login-form" onSubmit={(e) => this.checkCredentials(e)}>
                        <div>
                            <h3 className='section-header'>Log In to an Existing Account</h3>
                            
                        </div>
                        <div className="form-item">
                                <label htmlFor="username">Username</label>
                                <input placeholder="Username" type="text" name="username" id="username" onChange={e => this.handleUsernameInput(e)}/>
                        </div>
                        <div className="form-item">
                                <label htmlFor="password">Password</label>
                                <input placeholder="Password" type="password" name="password" id="password" onChange={e => this.handlePasswordInput(e)}/>
                        </div>
                        <button>Log In</button>
                    </form>
                </section>
                <section className="create-account">
                    <CreateAccount />
                </section>
            </div>
        );
    }
}
 
export default LoginPage;