import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Gift from '../images/gift.png'

export default class Header extends Component {

  render() {
    return (
      <nav className='Header'>
        <div className='name-and-icon'>
					<img className="gift-image" src={Gift} />
					<h1 className="app-name">iGift</h1>
				</div>
				<div className='links'>
					<Link to='/login'><h5>Log In/Create Account</h5></Link>
					<Link to='/'><h5>Log Out</h5></Link>
				</div>
      </nav>
    )
  }
}
