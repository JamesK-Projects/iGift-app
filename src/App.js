import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import BudgetPage from './BudgetPage/BudgetPage';
import ProfilePage from './ProfilePage/ProfilePage';
import iGiftContext from './iGiftContext';
import Login from './Login/Login';
import config from './config';
import Header from './Header/Header';

class App extends Component {
	constructor(props){
        super(props);
        this.state = {
			users: [],
			profiles: [],
			wishlists: [],
			error: null
        }
	}

	setUsers = users => {
		this.setState({
			users,
			error: null
		},
		// () => {
		// 	this.props.history.push('/')
		// }
		)
		console.log(this.state.users)
	}

	setProfiles = profiles => {
		this.setState({
			profiles,
			error: null
		},
		// () => {
		// 	this.props.history.push('/')
		// }
		)
	}

	setWishlists = wishlists => {
		this.setState({
			wishlists,
			error: null
		},
		// () => {
		// 	this.props.history.push('/')
		// }
		)
	}

	handleCheckboxChange = () => {
		// this.state.friends.map(friend => {
		// 	if(friend.id == friendId)
		// })
        // this.setState({
		// 	friends
		// })
		console.log('checkbox')
	}

	getUsers = () => {
		const url=config.API_ENDPOINT;
		const urlUsers = url + 'api/users';
		fetch(urlUsers, {
			method: 'GET',
		})
		.then(res => {
			if(!res.ok) {
				throw new Error(res.status)
			}
			return res.json()
		})
		.then(this.setUsers)
		.catch(error => this.setState({error}))
	}

	getProfiles = () => {
		const url=config.API_ENDPOINT;
		const urlProfiles = url + 'api/profiles';
		fetch(urlProfiles, {
			method: 'GET',
		})
		.then(res => {
			if(!res.ok) {
				throw new Error(res.status)
			}
			return res.json()
		})
		.then(this.setProfiles)
		.catch(error => this.setState({error}))
	}

	getWishlists = () => {
		const url=config.API_ENDPOINT;
		const urlWishlists = url + 'api/wishlists';
		fetch(urlWishlists, {
			method: 'GET',
		})
		.then(res => {
			if(!res.ok) {
				throw new Error(res.status)
			}
			return res.json()
		})
		.then(this.setWishlists)
		.catch(error => this.setState({error}))
	}

	componentDidMount() {
		console.log('hello')
		this.getUsers()
		this.getProfiles()
		this.getWishlists()
	}

	addItem = (newItem, price, profileId) => {
		console.log(newItem, price, profileId)
		
		this.state.profiles.map(profile => {
			const newWishlist = profile.wishlist
			if(profile.id == profileId){
				newWishlist.push({
					name: newItem,
					cost: price,
					checked: true
				})
			}
			this.setState({
				wishlists: newWishlist //need to match profiles.id to wishlists.profile_id
			})
		})
		console.log(this.state)
	}


	updateBudget = (newBudget) => {
		const updatedBudget = Number(newBudget);
		console.log(typeof(updatedBudget))
		const { userId } = 1 //temporary - need to use authenticated user's id later
		const budget = { budget: updatedBudget, id: 1 }
		console.log(budget)
		fetch('http://localhost:8000/' + `api/users/1`, {
			method: 'PATCH',
			body: JSON.stringify(budget)
		})
		.then(res => {
			if(!res.ok){
				throw new Error(res.status)
			}
			console.log(res.json())
			return res.json() 
		})
		.then(data => {
			this.setUsers(data)
		})
		.catch(error => this.setState({error}))
	}
	
  	render() { 
		const contextValue = {
			users: this.state.users,
			profiles: this.state.profiles,
			wishlists: this.state.wishlists,
			updateBudget: this.updateBudget,
			addItem: this.addItem,
			getUsers: this.getUsers,
			getProfiles: this.getProfiles,
			getWishlists: this.getWishlists,
			handleCheckboxChange: this.handleCheckboxChange
		}
    	return (
			<div>
				<iGiftContext.Provider value={contextValue}>
					<Header />
					
					<Route 
						exact path='/'
						component={LandingPage}
					/>
					<Route 
						path='/budget-page'
						component={BudgetPage}
					/>
					<Route 
						path='/login'
						component={Login}
					/>
					<Route 
						path='/profiles/:profileId'
						component={ProfilePage}
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
