import React, { Component } from 'react';
import iGiftContext from '../iGiftContext';
import '../WishlistItem/WishlistItem.css';
import config from '../config'

class WishlistItem extends Component {
    static contextType = iGiftContext;

    deleteItemRequest(itemId, cb) {
        fetch(config.API_ENDPOINT + `api/wishlists/${itemId}`, {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json',
          }
        })
        .then(res => {
        if (!res.ok) {
            return res.json().then(error => Promise.reject(error))
        }
        // no content on success, so skip res.json()
        })
        .then(() => {
        cb(itemId)
        })
        .catch(error => {
        console.error(error)
        })
    }

    handleCheckboxChange = (checkedBoolean, item) => {
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
			this.context.getWishlists()
		})
			
		.catch(error => this.setState({error}))
		
	}

    render() { 
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        })

        return (     
            <div>
                <input type='checkbox' checked={this.props.item.checked} onChange={e => this.handleCheckboxChange(e.target.checked, this.props.item)} />
                <label htmlFor={this.props.item.name}>{this.props.item.name}    {formatter.format(this.props.item.cost)}</label>
                <button className="remove-button" onClick={() => this.deleteItemRequest(this.props.item.id, this.context.deleteItem)}>Remove</button>
            </div>
        );
    }
}
 
export default WishlistItem;