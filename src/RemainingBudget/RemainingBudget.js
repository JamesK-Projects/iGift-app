import React, { Component } from 'react';
import '../RemainingBudget/RemainingBudget.css';

class RemainingBudget extends Component {
    state = {
        overBudget: false
    }
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
                // this.setState({ overBudget: false }) 
            if(totalRemaining < 0){
                budgetMessage = `You are ${formatter.format(-totalRemaining)} over budget :(`
                // this.setState({ overBudget: true })
            }
        } 
        
        // let finalMessage = ''
        // if(this.state.overBudget == true){
        //     finalMessage = (
        //         <div className="remaining-budget">
        //             <h3>Total Spent: <span>{formatter.format(totalSpent)}</span></h3>
        //             <h3 className="net-budget over">{budgetMessage}</h3>
        //         </div>
        //     )
        // } else {
        //     finalMessage = (
        //         <div className="remaining-budget">
        //             <h3>Total Spent: <span>{formatter.format(totalSpent)}</span></h3>
        //             <h3 className="net-budget under">{budgetMessage}</h3>
        //         </div>
        //     )
        // }

        return(
            <div className="remaining-budget">
                <h3>Total Spent: <span>{formatter.format(totalSpent)}</span></h3>
                <h3 className="net-budget over">{budgetMessage}</h3>
            </div>
        )
        
    }
}
 
export default RemainingBudget;

