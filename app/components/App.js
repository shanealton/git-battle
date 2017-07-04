import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Popular from './Popular/Popular'


export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Route exact path='/' component={Popular} />
          <Route path='/popular' component={Popular} />
        </div>
      </Router>
    )
  }
}
