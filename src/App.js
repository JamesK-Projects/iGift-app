import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import BudgetPage from './BudgetPage/BudgetPage';
import FriendProfilePage from './FriendProfilePage/FriendProfilePage';
import iGiftContext from './iGiftContext';

class App extends Component {
	constructor(props){
        super(props);
        this.state = {
            budget: 1000,
            friends: [
                {
                    id: 1,
                    name: 'Amy',
                    wishlist: [
                        {
                            name: 'boots',
                            cost: 50,
                            checked: true
                        },
                    ]
                },
            ]
        }
	}

	// handleCheckboxChange = (event) => {
	// 	this.state.friends.map(friend => {
	// 		if(friend.id == friendId)
	// 	})
    //     this.setState({
	// 		friends
    //     })
    // }

	addItem = (newItem, price, friendId) => {
		console.log(newItem, price, friendId)
		
		this.state.friends.map(friend => {
			const newWishlist = friend.wishlist
			if(friend.id == friendId){
				newWishlist.push({
					name: newItem,
					cost: price,
					checked: true
				})
			}
			this.setState({
				friend: [
					{wishlist: newWishlist}
				]
			})
		})
		console.log(this.state)
	}

	updateBudget = (newBudget) => {
		const updatedBudget = newBudget;
		this.setState({
			budget: updatedBudget
		},
			() => {}	
		)
	}
	
  	render() { 
		const contextValue = {
			budget: this.state.budget,
			friends: this.state.friends,
			updateBudget: this.updateBudget,
			addItem: this.addItem,
			handleCheckboxChange: this.handleCheckboxChange
		}
    	return (
			<div>
				<iGiftContext.Provider value={contextValue}>
					<nav>
						<Link to='/budget-page'>
							<p>Home</p>
						</Link>
					</nav>
					<Route 
						exact path='/'
						component={LandingPage}
					/>
					<Route 
						path='/budget-page'
						component={BudgetPage}
					/>
					<Route 
						path='/profile/:profileId'
						component={FriendProfilePage}
					/>
				</iGiftContext.Provider>
				<footer>
        			James K Projects
    			</footer>
			</div>
		);
  	}
}

export default withRouter(App);
