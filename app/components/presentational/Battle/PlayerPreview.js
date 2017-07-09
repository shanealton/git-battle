import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../../index.css';

const PlayerPreview = (props) => {
  return (
    <section>
      <div className={styles.column}>
        <img
          className={styles.avatar}
          src={props.avatar}
          alt={props.username}
        />
        <h2 className={styles.username}>@{props.username}</h2>
        <button
          className={styles.reset}
          onClick={props.onReset.bind(null, props.id)}>
            Reset
        </button>
      </div>
    </section>
  )
}

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired
}

export default PlayerPreview
