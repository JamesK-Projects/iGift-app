import React, { Component } from 'react';
import CreateAccount from '../CreateAccount/CreateAccount';
import Login from '../Login/Login';
import './LandingPage.css';

class LandingPage extends Component {
    render() { 
        return (
            <div>
                <header>
                    {/* <h1 className="app-name">iGift</h1> */}
                    <h2 className="app-slogan">Gift Smarter.</h2>
                </header>
                <section className="profile-section">
                    <header>
                        <h3 className="section-header">Organize Your Gift-Giving</h3>
                    </header>
                    <p>[placeholder for screenshot of profile]</p>
                    <p>Create personalized profiles for your friends and family to keep track of birthdays, potential gift ideas, 
                    and gifts given.</p>
                </section>
                <section className="budget-section">
                    <header>
                        <h3 className="section-header">Set Your Budget</h3>
                    </header>
                    <p>[placeholder for screenshot of budget page]</p>
                    <p>During the 2019 holiday season, 44% of American consumers went into debt. iGift helps you to be smart 
                    about your gift-spending by allowing you to set your budget and track it as you spend.</p>
                </section>
                <CreateAccount />
            </div>
        );
    }
}
 



export default LandingPage;