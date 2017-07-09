import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.css'

export default class Home extends React.Component {
  render() {
    return (
      <section className={styles.center}>
        <h1>Github Battle: Battle your friends.</h1>
        <Link className={styles.button} to='/battle'>Battle</Link>
      </section>
    )
  }
}
