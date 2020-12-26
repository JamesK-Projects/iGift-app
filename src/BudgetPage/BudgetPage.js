import React, { Component } from 'react';
import ProfileList from '../ProfileList/ProfileList';
import iGiftContext from '../iGiftContext';
import RemainingBudget from '../RemainingBudget/RemainingBudget';
import AddProfile from '../AddProfile/AddProfile';
import '../BudgetPage/BudgetPage.css'

class BudgetPage extends Component {
    static contextType = iGiftContext;
    state = {
        budget: ''
    }

    setBudget = (event) => {
        this.setState({
			budget: event.target.value
        })
    }

    handleUpdateBudget = () => {
        this.context.updateBudget(this.state.budget, this.props.match.params.userId)
        this.setState({
            budget: ''
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
                            <div key={user.id}>
                                <section className="total-budget">
                                    <h2>My Budget:</h2>
                                    <h2>{formatter.format(user.budget)}</h2>
                                    <input type="text" placeholder="New Budget" name="budget" id="budget" className="textbox" value={this.state.budget} onChange={(event) => this.setBudget(event)}/>
                                    <input type="button" value="Update Budget" className="button" onClick={() => this.handleUpdateBudget()}/>
                                </section>
                                <ProfileList user={user}/>
                                <AddProfile user={user}/>
                                <section className="current-budget">
                                    <RemainingBudget budget={user.budget} user={user} profiles={this.context.profiles} wishlists={this.context.wishlists} {...this.props}/>
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