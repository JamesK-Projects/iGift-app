import React, { Component } from 'react';

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
        if(this.props.budget){
                budgetMessage = `You have ${formatter.format(totalRemaining)} remaining!`
            if(totalRemaining < 0){
                budgetMessage = `You are ${formatter.format(-totalRemaining)} over budget :(`
            }
        } 
        

        return (
            <div>
                <h3>Total Spent: <span>{formatter.format(totalSpent)}</span></h3>
                <h3>{budgetMessage}</h3>
            </div>
        );
    }
}
 
export default RemainingBudget;

