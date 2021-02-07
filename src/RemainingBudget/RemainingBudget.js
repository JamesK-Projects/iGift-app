import React, { Component } from 'react';
import '../RemainingBudget/RemainingBudget.css';

class RemainingBudget extends Component {
    render() {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        })

        let totalSpent = 0;

        this.props.profiles.map(profile => {
            if(profile.user_id === this.props.user.id){
                this.props.wishlists.map(wishlist => {
                if(wishlist.profile_id === profile.id && wishlist.checked === true){
                    totalSpent += wishlist.cost
                }
            })
            }
        })

        const totalRemaining = this.props.user.budget - totalSpent;

        let budgetMessage = 'Please input your budget';
        let className = ''
        if(this.props.budget){
            className = "net-budget under"
            budgetMessage = `You have ${formatter.format(totalRemaining)} remaining!`
            if(totalRemaining < 0){
                className = "net-budget over"
                budgetMessage = `You are ${formatter.format(-totalRemaining)} over budget`
            }
        } 

        return(
            <div className="remaining-budget">
                <h3>Total Spent: <span>{formatter.format(totalSpent)}</span></h3>
                <h3 className={className}>{budgetMessage}</h3>
            </div>
        )
        
    }
}
 
export default RemainingBudget;

