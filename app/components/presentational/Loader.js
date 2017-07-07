import React from 'react'
import styles from '../../index.sass'

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
