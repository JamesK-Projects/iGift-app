import React, { Component } from 'react';
import ProfileList from '../ProfileList/ProfileList';
import iGiftContext from '../iGiftContext';
import RemainingBudget from '../RemainingBudget/RemainingBudget';
import AddProfile from '../AddProfile/AddProfile';

class BudgetPage extends Component {
    static contextType = iGiftContext;
    state = {
        budget: 0
    }

    setBudget = (event) => {
        this.setState({
			budget: event.target.value
        })
    }

    render() { 
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        })

        if(!this.context.users){
            return null
        }

        return (
            // <iGiftContext.Consumer>
            //     {(context) => (
                    this.context.users.map((user, index) => {
                        if(user.id == this.props.match.params.userId){
                            
                            return(
                            <div>
                                <section className="total-budget">
                                    <h1>My Budget:</h1>
                                    <h2>{formatter.format(user.budget)}</h2>
                                    <input type="text" placeholder="New Budget" name="budget" id="budget"  onChange={(event) => this.setBudget(event)}/>
                                    <input type="button" value="Update Budget" onClick={() => this.context.updateBudget(this.state.budget, this.props.match.params.userId)}/>
                                </section>
                                <ProfileList user={user} key={user.id}/>
                                <AddProfile user={user} key={user.username}/>
                                <section className="current-budget">
                                    <RemainingBudget budget={user.budget} key={index} user={user} profiles={this.context.profiles} wishlists={this.context.wishlists} {...this.props}/>
                                </section>
                            </div>
                        ) 
                        }
                        
                    })
            //     )}
            // </iGiftContext.Consumer>
        );
    }
}
 
export default BudgetPage;