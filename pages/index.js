import Head from 'next/head'
import Image from 'next/image'
import BlockList from '../components/BlockList'
import Clock from '../components/Clock'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
const axios = require('axios');

const {Base64} = require('js-base64');
const BLOCKCHAIN_SERVER_ADDRESS = 'http://localhost:8080'

export default function Home() {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    axios.get(BLOCKCHAIN_SERVER_ADDRESS + '/api/blocks').then(res => setBlocks(res.data.blocks)).catch(err => console.log(err))
  })
    
  return (
    <div className={styles.container}>
        <BlockList blocks={blocks}></BlockList>
        <div className={styles.input_control_bg}></div>
        <div className={styles.input_control}>
          <input placeholder='Leave your message here! :)' className={styles.input}></input>
          <Clock time={3600}></Clock>
          <button className={styles.button}>Start Mining</button>
        </div>
    </div>
  )
}
