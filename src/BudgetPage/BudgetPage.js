import React, { Component } from 'react';
import FriendList from '../FriendList/FriendList';
import iGiftContext from '../iGiftContext';
import RemainingBudget from '../RemainingBudget/RemainingBudget';
import AddFriend from '../AddFriend/AddFriend';

class BudgetPage extends Component {
    static contextType = iGiftContext;

    render() { 
        console.log(this.context)
        return (
            <iGiftContext.Consumer>
                {(context) => (
                    <div>
                        <section className="total-budget">
                            <h1>My Budget:</h1>
                            <h2>$1000.00</h2>
                            {/* <input type="text" name="budget" id="budget" onChange={e => context.updateBudget(e.target.value)} /><br /> */}
                            <input type="button" value="Update Budget" />
                        </section>
                        <FriendList friends={this.context.friends}/>
                        <AddFriend />
                        <section className="current-budget">
                            <RemainingBudget budget={this.context.budget} friends={this.context.friends} {...this.props}/>
                        </section>
                    </div>
                )}
            </iGiftContext.Consumer>
        );
    }
}
 
export default BudgetPage;