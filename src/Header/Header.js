import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
        <h1 className="app-name">iGift</h1>
        {/* {this.renderLogoutLink()}
        {this.renderLoginLink()} */}
        <Link to='/login'>Log In</Link>
        <Link to='/'>Log Out</Link>
      </nav>
    )
  }
}
