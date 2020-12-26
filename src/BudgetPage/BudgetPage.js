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

        if(!this.context.users[0]){
            return null
        }

        console.log(this.context)
        return (
            <iGiftContext.Consumer>
                {(context) => (
                    <div>
                        <section className="total-budget">
                            <h1>My Budget:</h1>
                            <h2>{formatter.format(context.users[0].budget)}</h2>
                            <input type="text" placeholder="New Budget" name="budget" id="budget"  onChange={(event) => this.setBudget(event)}/>
                            <input type="button" value="Update Budget" onClick={() => context.updateBudget(this.state.budget)}/>
                        </section>
                        <ProfileList />
                        <AddProfile />
                        <section className="current-budget">
                            <RemainingBudget budget={this.context.users[0].budget} users={context.users} profiles={context.profiles} wishlists={context.wishlists} {...this.props}/>
                        </section>
                    </div>
                )}
            </iGiftContext.Consumer>
        );
    }
}
 
export default BudgetPage;