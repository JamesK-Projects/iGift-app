import React, { Component } from 'react';
import TokenService from '../Services/token-service'

class Login extends Component {
    handleSubmitBasicAuth = ev => {
        ev.preventDefault()
        const { username, password } = ev.target

        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken(username.value, password.value)
        )
    }

    render() { 
        return (
            <div>
                <form className="LoginForm" onSubmit={this.handleSubmitBasicAuth}>
                    <div className="username">
                        <label htmlFor="LoginForm__username">Username</label>
                        <input placeholder="Username" type="text" name="username" id="LoginForm__username" />
                    </div>
                    <div className="password">
                        <label htmlFor="LoginForm__password">Password</label>
                        <input placeholder="Password" type="password" name="password" id="LoginForm__password" />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}
 
export default Login;