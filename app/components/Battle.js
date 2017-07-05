import React from 'react'
import Loader from './presentational/Loader'
import '../index.css'

export default class Battle extends React.Component {
  render() {
    return (
      <section>
        <Loader />
      </section>
    )
  }
}
