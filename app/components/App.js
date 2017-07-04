import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Nav from './Nav/Nav'
import Home from './Home/Home'
import Battle from './Battle/Battle'
import Popular from './Popular/Popular'


export default class App extends React.Component {
  render() {
    return (
      <Router>
      <section>
      <Nav />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle} />
            <Route path='/popular' component={Popular} />
          </Switch>
        </div>
        </section>
      </Router>
    )
  }
}
