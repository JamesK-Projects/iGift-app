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
		})
	}
	

	setProfiles = profiles => {
		this.setState({
			profiles,
			error: null
		})
	}

	setWishlists = wishlists => {
		this.setState({
			wishlists,
			error: null
		})
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
		fetch(config.API_ENDPOINT + `api/wishlists`, {
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
		fetch(config.API_ENDPOINT + `api/users/${userId}`, {
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
			<div className="main-container">
				<div className="routes">
					<iGiftContext.Provider value={contextValue}>
						<Route 
							path='/'
							component={Header}
						/>
						
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
					<div className="push"></div>
				</div>
				<footer className="footer">
        			James K Projects
    			</footer>
			</div>
		);
  	}
}

export default withRouter(App);
