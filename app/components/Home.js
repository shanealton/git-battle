import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

export default class Home extends React.Component {
  render() {
    return (
      <section className='home-container'>
        <h1>Github Battle: Battle your friends.</h1>
        <Link className='button' to='/battle'>Battle</Link>
      </section>
    )
  }
}
