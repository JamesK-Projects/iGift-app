import React, { Component } from 'react';
//import config from '..config/';

class CreateAccount extends Component {
    render() { 
        return (
            <div>
                <section className="create-account-section">
                    <header>
                        <h3 className="section-header">Create Your Account</h3>
                    </header>
                    <form className="signup-form">
                        <div className="form-item">
                            <label htmlFor="name">Name</label>
                            <input placeholder="Name" type="text" name="name" id="name" />
                        </div>
                        <div className="form-item">
                            <label htmlFor="username">Username</label>
                            <input placeholder="Username" type="text" name="username" id="username" />
                        </div>
                        <div className="form-item">
                            <label htmlFor="email">Email</label>
                            <input placeholder="Email" type="text" name="email" id="email" />
                        </div>
                        <div className="form-item">
                            <label htmlFor="password">Password</label>
                            <input placeholder="Password" type="text" name="password" id="password" />
                        </div>
                        <button>Create Account</button>
                    </form>
                </section>
            </div>
        );
    }
}
 
export default CreateAccount;