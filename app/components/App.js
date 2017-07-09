import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Nav from './presentational/Nav/Nav'
import Home from './presentational/Home/Home'
import Battle from './container/Battle/Battle'
import Results from './Results'
import Popular from './container/Popular/Popular'
import styles from '../index.css'

export default class App extends React.Component {
  render() {
    return (
      <Router>
      <section>
      <Nav />
        <div className={styles.container}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle} />
            <Route path='/battle/results' component={Results} />
            <Route path='/popular' component={Popular} />
          </Switch>
        </div>
        </section>
      </Router>
    )
  }
}
