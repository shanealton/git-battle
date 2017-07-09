import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles.css'

const Nav = (props) => {
  return (
    <nav className={styles.navbar}>
    <ul className={styles.nav}>
      <li>
        <NavLink activeClassName={styles.active} exact to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink activeClassName={styles.active} to='/battle'>Battle</NavLink>
      </li>
      <li>
        <NavLink activeClassName={styles.active} to='/popular'>Popular</NavLink>
      </li>
    </ul>
    </nav>
  )
}

export default Nav
