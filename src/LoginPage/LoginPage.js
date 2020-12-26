import React, { Component } from 'react';
import iGiftContext from '../iGiftContext';

class LoginPage extends Component {
    static contextType = iGiftContext;
    state = {
        username: '',
        password: ''
    }

    checkCredentials = (e) => {
        e.preventDefault()
        this.context.users.map(user => {
            if (user.username == this.state.username && user.password == this.state.password){
                this.props.history.push(`/budget-page/users/${user.id}`)
            }
            
        })
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
            <div>
                <form className="login-form" onSubmit={(e) => this.checkCredentials(e)}>
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
            </div>
        );
    }
}
 
export default LoginPage;