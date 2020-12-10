import React, { Component } from 'react';

class RemainingBudget extends Component {
    render() {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        })

        let totalSpent = 0;

        for(let i = 0; i < this.props.friends.length; i++){
            for(let j = 0; j < this.props.friends[i].wishlist.length; j++){
                totalSpent += this.props.friends[i].wishlist[j].cost;
            }
            
        }

        const totalRemaining = this.props.budget - totalSpent;

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

