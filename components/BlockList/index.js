import React from 'react'
import styles from "./style.module.scss"

const {Base64} = require('js-base64');

function BlockList(props) {
  return (
    <div className={styles.container}>
        {
            props.blocks.map((block, index) => {
                if(index < props.blocks.length - 1 - 10) return
                return (
                    <div className={styles.block} key={index}>
                        <p className={styles.block_content}>{Base64.decode(block.Header.Data)}</p>
                    </div>
                )
            }
            )
        }
    </div>
  )
}

export default BlockList