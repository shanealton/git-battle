import React from 'react'
import PropTypes from 'prop-types'
import Loader from './presentational/Loader'
import '../index.css'

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
      <form className='column' onSubmit={this.handleSubmit}>
        <label htmlFor='username'>
          {this.props.label}
        </label>
        <input
          id='username'
          className='column-input'
          placeholder='GitHub username'
          type='text'
          autoComplete='off'
          value={this.state.username}
          onChange={this.handleChange}
        />
        <button
          className='button'
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
  }

  handleSubmit(id, username) {
    this.setState(() => {
      let newState = {}
      newState[id + 'Name'] = username
      newState[id + 'Image'] = 'https://github.com' + username + '.png?size=200'
      return newState
    })
  }
  render() {
    let playerOneName = this.state.playerOneName
    let playerTwoName = this.state.playerTwoName

    return (
      <section>
        <div className='row'>
          {!playerOneName && <PlayerInput id='playerOne' label='Player One' onSubmit={this.handleSubmit} />}
          {!playerTwoName && <PlayerInput id='playerTwo' label='Player Two' onSubmit={this.handleSubmit} />}
        </div>
      </section>
    )
  }
}
