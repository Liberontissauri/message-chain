import React from 'react'
import styles from './style.module.scss'

function Clock(props) {
    function computeTime(time) {
        let hours = Math.floor(time/3600);
        let minutes = Math.floor(time/60) - hours*60;
        let seconds = time - hours*3600 - minutes*60;
        let timeString = `Mining Time: ${hours}h ${minutes}min ${seconds}s`;
        return timeString;
    }
  return (
    <div className={styles.container}>{computeTime(props.time)}</div>
  )
}

export default Clock