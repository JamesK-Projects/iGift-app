

const ApiService = {
    getUsers() {
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
    },
    
    getProfiles() {
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
    },
    
    getWishlists() {
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
    },

    addItem(newItem, price, profileId) {
		console.log(newItem, price, profileId)
		const item = { 
			name: newItem,
			cost: price,
			checked: false,
			profile_id: profileId 
		}
		console.log(item)
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
		console.log(this.state)
    },
    
    updateBudget(newBudget, id) {
		const updatedBudget = Number(newBudget);
		console.log(typeof(updatedBudget))
		console.log(id)
		const userId  = id //temporary - need to use authenticated user's id later
		const budget = { budget: updatedBudget, id: 1 }
		console.log(budget)
		fetch('http://localhost:8000/' + `api/users/1`, {
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
	},

	changeCheckbox(newWishlist) {
		const newWishlists = [...this.state.wishlists]
		newWishlists.push(newWishlist)
		console.log(newWishlists)

		this.setState({
			wishlists: newWishlists
		},
		() => {
			this.props.history.push('/')
		})
	},

	handleCheckboxChange(checkedBoolean, item) {
		console.log(checkedBoolean)
		console.log(item.id)
		const checkedStatus = { checked: checkedBoolean, id: item.id}
		fetch('http://localhost:8000/' + `api/wishlists/${item.id}`, {
			method: 'PATCH',
			body: JSON.stringify(checkedStatus),
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
			this.changeCheckbox(data)
		})
			
		.catch(error => this.setState({error}))
		
	}
}



export default ApiService;