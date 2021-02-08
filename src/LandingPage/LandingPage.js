import React, { Component } from 'react';
import './LandingPage.css';
import ProfilePageScreenshot from '../images/profile-page-screenshot.png'
import BudgetPageScreenshot from '../images/budget-page-screenshot.png'

class LandingPage extends Component {
    render() { 
        return (
            <div className="landing-page">
                <header>
                    {/* <h1 className="app-name">iGift</h1> */}
                    <h2 className="app-slogan">Gift Smarter.</h2>
                    
                </header>
                <div className="landing-page-sections">
                    <section className="budget-section">
                        <header>
                            <h3 className="section-header">Set Your Budget!</h3>
                        </header>
                        <div className="section-content">
                            <p className="budget-section-description">During the 2019 holiday season, 44% of American consumers went into debt. iGift helps you be smarter
                            about your gift-spending by allowing you to set your budget and track it as you spend.</p>
                            <img className="screenshot" src={BudgetPageScreenshot} />
                        </div>
                    </section>

                    <section className="profile-section">
                        <header>
                            <h3 className="section-header">Organize Your Gift-Giving!</h3>
                        </header>
                        <div className="section-content reverse">
                            <p className="profile-section-description">Create personalized profiles for your friends and family to keep track of potential gift ideas and their prices. Then hit the checkbox for every item that you purchase to see where you stand with your budget!</p>
                            <img className="screenshot" src={ProfilePageScreenshot} />
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}
 



export default LandingPage;