import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import BudgetPage from './BudgetPage/BudgetPage';
import ProfilePage from './ProfilePage/ProfilePage';
import iGiftContext from './iGiftContext';
import LoginPage from './LoginPage/LoginPage';
import config from './config';
import Header from './Header/Header';
import './App.css'


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
		// // 	this.props.history.push('/budget-page/users/1')
		// }
		)
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
		this.getUsers()
		this.getProfiles()
		this.getWishlists()
	}

	addItem = (newItem, price, profileId) => {
		const item = { 
			name: newItem,
			cost: price,
			checked: false,
			profile_id: profileId 
		}
		fetch('http://localhost:8000/' + `api/wishlists`, {
			method: 'POST',
			body: JSON.stringify(item),
			headers: {
				'content-type': 'application/json'
		 	}
		})
		.then(res => {
			if(!res.ok){
				throw new Error(res.status)
			}
			return res.json() 
		})
		.then(data => {
			this.setWishlists(data)
		})
			
		.catch(error => this.setState({error}))
		
		// this.state.profiles.map(profile => {
		// 	const newWishlist = profile.wishlist
		// 	if(profile.id == profileId){
		// 		newWishlist.push({
		// 			name: newItem,
		// 			cost: price,
		// 			checked: true
		// 		})
		// 	}
		// 	this.setState({
		// 		wishlists: newWishlist //need to match profiles.id to wishlists.profile_id
		// 	})
		// })
	}

	deleteItem = (itemId) => {
		const newWishlists = this.state.wishlists.filter(wishlist => 
			wishlist.id !== itemId
		)
		this.setState({
			wishlists: newWishlists
		})
	}


	updateBudget = (newBudget, id) => {
		const updatedBudget = Number(newBudget);
		const userId = id //temporary - need to use authenticated user's id later
		const budget = { budget: updatedBudget, id: userId }
		fetch('http://localhost:8000/' + `api/users/${userId}`, {
			method: 'PATCH',
			body: JSON.stringify(budget),
			headers: {
				'content-type': 'application/json'
		 	}
		})
		.then(res => {
			if(!res.ok){
				throw new Error(res.status)
			}
			return res.json() 
		})
		.then(data => {
			this.setUsers(data)
		})
			
		.catch(error => this.setState({error}))
	}

	changeCheckbox = (newWishlist) => {
		const newWishlists = [...this.state.wishlists]
		var updatedItem = Object.values(newWishlist)
		var res = newWishlists.map(wishlist => newWishlist.find(w => w.id === wishlist.id || wishlist))
		
		this.setState({
			wishlists: res
		},
		() => {}
		)
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
			changeCheckbox: this.changeCheckbox,
			deleteItem: this.deleteItem,
		}
    	return (
			<div>
				<iGiftContext.Provider value={contextValue}>
					<Header props={this.props}/>
					
					<Route 
						exact path='/'
						component={LandingPage}
					/>
					<Route 
						path='/budget-page/users/:userId'
						component={BudgetPage}
					/>
					<Route 
						path='/login'
						component={LoginPage}
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
