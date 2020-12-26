import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Gift from '../images/gift.png'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { Hyph } from '../Utils/Utils'
import TokenService from '../Services/token-service'
//import './Header.css'

export default class Header extends Component {
  handleLogoutClick = () => {
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link
          to='/'>
          Log Out
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        {/* <Link
          to='/register'>
          Register
        </Link> */}
        {/* <Hyph /> */}
        <Link
          to='/login'>
          Log In
        </Link>
      </div>
    )
  }

  render() {
    return (
      <nav className='Header'>
        <div className='name-and-icon'>
					<img className="gift-image" src={Gift} />
					<h1 className="app-name">iGift</h1>
				</div>
        {/* {this.renderLogoutLink()}
        {this.renderLoginLink()} */}
				<div className='links'>
					<Link to='/login'><h5>Log In/Create Account</h5></Link>
					<Link to='/'><h5>Log Out</h5></Link>
					
				</div>
      </nav>
    )
  }
}
