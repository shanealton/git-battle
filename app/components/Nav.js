import React from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'

const Nav = (props) => {
  return (
    <section className='nav-container'>
    <ul className='nav'>
      <li>
        <NavLink activeClassName='active' exact to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/battle'>Battle</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/popular'>Popular</NavLink>
      </li>
    </ul>
    </section>
  )
}

export default Nav
