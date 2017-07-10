import React from 'react'
import PropTypes from 'prop-types'
import queryString from 'query-string'
import api from '../utils/api'
import Loader from './presentational/Loader/Loader'
import styles from '../index.css'

const Player = (props) => {
  return (
    <div>
      <h1>{props.label}</h1>
      <h3>Score: {props.score}</h3>
    </div>
  )
}

Player.propTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  profile: PropTypes.object.isRequired
}

class Results extends React.Component {
  constructor() {
    super()
    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true
    }
  }
  componentDidMount() {
    let players = queryString.parse(this.props.location.search)

    console.log(players)
    api.battle([
      players.playerOneName,
      players.playerTwoName
    ]).then((results) => {
      if (results === null) {
        return this.setState({
          error: 'Looks like there was a problem. Make sure both players have a GitHub account.',
          loading: false
        })
      }
      this.setState({
        error: null,
        winner: results[0],
        loser: results[1],
        loading: false
      })
      console.log(results)
    })
  }
  render() {
    let error = this.state.error,
        winner = this.state.winner,
        loser = this.state.loser,
        loading = this.state.loading

    if (loading) {
      return <Loader />
    }
    return (
      <section className={styles.center}>
        <div className={styles.row}>
          <div className={styles.column}>
            <Player label='Winner' score={winner.score} profile={winner.profile} />
          </div>
          <div className={styles.column}>
            <Player label='Loser' score={loser.score} profile={loser.profile} />
          </div>
        </div>
      </section>
    )
  }
}

export default Results
