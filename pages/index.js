import Head from 'next/head'
import Image from 'next/image'
import BlockList from '../components/BlockList'
import Clock from '../components/Clock'
import styles from '../styles/Home.module.css'

const {Base64} = require('js-base64');

export default function Home() {
  let test_blocks = [{
    "Header": {
      "Timestamp": 1659354913,
      "Data": Base64.encode("Hello World!  (=^ ◡ ^=)"),
      "PrevHash": "",
      "Nonce": 0,
      "Target": 3273390607896141870013189696827599152216642046043064789483291368096133796404674554883270092325904157150886684127560071009217256545885393053328527589376
    },
    "Hash": "l4qxa6SoZdZjogBcZnfT6vnwjdGtuO+wGS4xGQqFjNk="
  },{
    "Header": {
      "Timestamp": 1659354913,
      "Data": Base64.encode("Heyooooo!  (=^ O ^=)"),
      "PrevHash": "",
      "Nonce": 0,
      "Target": 3273390607896141870013189696827599152216642046043064789483291368096133796404674554883270092325904157150886684127560071009217256545885393053328527589376
    },
    "Hash": "l4qxa6SoZdZjogBcZnfT6vnwjdGtuO+wGS4xGQqFjNk="
  },{
    "Header": {
      "Timestamp": 1659354913,
      "Data": Base64.encode("This is a test!"),
      "PrevHash": "",
      "Nonce": 0,
      "Target": 3273390607896141870013189696827599152216642046043064789483291368096133796404674554883270092325904157150886684127560071009217256545885393053328527589376
    },
    "Hash": "l4qxa6SoZdZjogBcZnfT6vnwjdGtuO+wGS4xGQqFjNk="
  },
  {
    "Header": {
      "Timestamp": 1659354913,
      "Data": Base64.encode("This is a test!"),
      "PrevHash": "",
      "Nonce": 0,
      "Target": 3273390607896141870013189696827599152216642046043064789483291368096133796404674554883270092325904157150886684127560071009217256545885393053328527589376
    },
    "Hash": "l4qxa6SoZdZjogBcZnfT6vnwjdGtuO+wGS4xGQqFjNk="
  },
  {
    "Header": {
      "Timestamp": 1659354913,
      "Data": Base64.encode("This is a test!"),
      "PrevHash": "",
      "Nonce": 0,
      "Target": 3273390607896141870013189696827599152216642046043064789483291368096133796404674554883270092325904157150886684127560071009217256545885393053328527589376
    },
    "Hash": "l4qxa6SoZdZjogBcZnfT6vnwjdGtuO+wGS4xGQqFjNk="
  },
  {
    "Header": {
      "Timestamp": 1659354913,
      "Data": Base64.encode("This is a test!"),
      "PrevHash": "",
      "Nonce": 0,
      "Target": 3273390607896141870013189696827599152216642046043064789483291368096133796404674554883270092325904157150886684127560071009217256545885393053328527589376
    },
    "Hash": "l4qxa6SoZdZjogBcZnfT6vnwjdGtuO+wGS4xGQqFjNk="
  },
  {
    "Header": {
      "Timestamp": 1659354913,
      "Data": Base64.encode("This is a test!"),
      "PrevHash": "",
      "Nonce": 0,
      "Target": 3273390607896141870013189696827599152216642046043064789483291368096133796404674554883270092325904157150886684127560071009217256545885393053328527589376
    },
    "Hash": "l4qxa6SoZdZjogBcZnfT6vnwjdGtuO+wGS4xGQqFjNk="
  },
  {
    "Header": {
      "Timestamp": 1659354913,
      "Data": Base64.encode("This is a test!"),
      "PrevHash": "",
      "Nonce": 0,
      "Target": 3273390607896141870013189696827599152216642046043064789483291368096133796404674554883270092325904157150886684127560071009217256545885393053328527589376
    },
    "Hash": "l4qxa6SoZdZjogBcZnfT6vnwjdGtuO+wGS4xGQqFjNk="
  },
  {
    "Header": {
      "Timestamp": 1659354913,
      "Data": Base64.encode("<h1>test</h1>"),
      "PrevHash": "",
      "Nonce": 0,
      "Target": 3273390607896141870013189696827599152216642046043064789483291368096133796404674554883270092325904157150886684127560071009217256545885393053328527589376
    },
    "Hash": "l4qxa6SoZdZjogBcZnfT6vnwjdGtuO+wGS4xGQqFjNk="
  },
  {
    "Header": {
      "Timestamp": 1659354913,
      "Data": Base64.encode("This is a test!"),
      "PrevHash": "",
      "Nonce": 0,
      "Target": 3273390607896141870013189696827599152216642046043064789483291368096133796404674554883270092325904157150886684127560071009217256545885393053328527589376
    },
    "Hash": "l4qxa6SoZdZjogBcZnfT6vnwjdGtuO+wGS4xGQqFjNk="
  },
  {
    "Header": {
      "Timestamp": 1659354913,
      "Data": Base64.encode("This is a test!"),
      "PrevHash": "",
      "Nonce": 0,
      "Target": 3273390607896141870013189696827599152216642046043064789483291368096133796404674554883270092325904157150886684127560071009217256545885393053328527589376
    },
    "Hash": "l4qxa6SoZdZjogBcZnfT6vnwjdGtuO+wGS4xGQqFjNk="
  }
    
  ]
  return (
    <div className={styles.container}>
        <BlockList blocks={test_blocks}></BlockList>
        <div className={styles.input_control_bg}></div>
        <div className={styles.input_control}>
          <input placeholder='Leave your message here! :)' className={styles.input}></input>
          <Clock time={3600}></Clock>
          <button className={styles.button}>Start Mining</button>
        </div>
    </div>
  )
}
