import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import PlayerPreview from '../../presentational/Battle/PlayerPreview'
import styles from './styles.css'

class PlayerInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    let username = e.target.value
    this.setState({
      username
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(
      this.props.id,
      this.state.username
    )
  }

  render() {
    return (
      <form className={styles.formColumn} onSubmit={this.handleSubmit}>
        <label htmlFor='username'>
          {this.props.label}
        </label>
        <input
          id='username'
          className={styles.input}
          placeholder='GitHub username'
          type='text'
          autoComplete='off'
          value={this.state.username}
          onChange={this.handleChange}
        />
        <button
          className={styles.button}
          type='submit'
          disabled={!this.state.username}>
            Submit
        </button>
      </form>
    )
  }
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default class Battle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleSubmit(id, username) {
    this.setState(() => {
      let newState = {}
      newState[id + 'Name'] = username
      newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200'
      return newState
    })
  }

  handleReset(id) {
    this.setState(() => {
      let newState = {}
      newState[id + 'Name'] = ''
      newState[id + 'Image'] = null
      return newState
    })
  }
  render() {
    const playerOneName = this.state.playerOneName,
          playerTwoName = this.state.playerTwoName,
          playerOneImage = this.state.playerOneImage,
          playerTwoImage = this.state.playerTwoImage,
          match = this.props.match



    return (
      <section className={styles.center}>
        <div className={styles.row}>
          {!playerOneName &&
            <PlayerInput
              id='playerOne'
              label='Player One'
              onSubmit={this.handleSubmit} />}

          {playerOneImage !== null &&
            <PlayerPreview
              avatar={playerOneImage}
              username={playerOneName}
              onReset={this.handleReset}
              id='playerOne' />}

          {!playerTwoName &&
            <PlayerInput
              id='playerTwo'
              label='Player Two'
              onSubmit={this.handleSubmit} />}

          {playerTwoImage !== null &&
            <PlayerPreview
              avatar={playerTwoImage}
              username={playerTwoName}
              onReset={this.handleReset}
              id='playerTwo' />}
        </div>
        <div className={styles.row}>
        {playerOneImage && playerTwoImage
          ? <Link
              className={styles.button}
              to={{ pathname: match.url + '/results', search: `?playerOneName=` + playerOneName + '&playerTwoName=' + playerTwoName }}>
                Battle
            </Link>
          : <div className={styles.disabled}>Battle</div>
        }
        </div>
      </section>
    )
  }
}
