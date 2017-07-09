import React from 'react'
import styles from './styles.css'

const Loader = () => {
  return (
    <div className={styles.spinner}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Loader
