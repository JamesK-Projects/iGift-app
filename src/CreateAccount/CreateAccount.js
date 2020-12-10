import React, { Component } from 'react';

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
                            <label htmlFor="first-name">First Name</label>
                            <input placeholder="First Name" type="text" name="first-name" id="first-name" />
                        </div>
                        <div className="form-item">
                            <label htmlFor="last-name">Last Name</label>
                            <input placeholder="Last Name" type="text" name="last-name" id="last-name" />
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