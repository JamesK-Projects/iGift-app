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

    // setUser = (userId) => {
    //     console.log(userId)
    //     this.context.users.map(user => {
    //         if(user.id === userId){
                
    //             return user
    //         }
    //     })
    // }

   

    render() { 
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        })

        if(!this.context.users){
            return null
        }



        console.log(this.context)
        console.log(this.props)
        return (
            <iGiftContext.Consumer>
                {(context) => (
                    context.users.map(user => {
                        console.log(this.props.match.params.userId)
                        if(user.id == this.props.match.params.userId){
                            
                            return(
                            <div>
                                <section className="total-budget">
                                    <h1>My Budget:</h1>
                                    <h2>{formatter.format(user.budget)}</h2>
                                    <input type="text" placeholder="New Budget" name="budget" id="budget"  onChange={(event) => this.setBudget(event)}/>
                                    <input type="button" value="Update Budget" onClick={() => context.updateBudget(this.state.budget, this.props.match.params.userId)}/>
                                </section>
                                <ProfileList user={user} />
                                <AddProfile user={user} />
                                <section className="current-budget">
                                    <RemainingBudget budget={user.budget} user={user} profiles={context.profiles} wishlists={context.wishlists} {...this.props}/>
                                </section>
                            </div>
                        ) 
                        }
                        
                    })
                )}
            </iGiftContext.Consumer>
        );
    }
}
 
export default BudgetPage;