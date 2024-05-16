import Link from 'next/link'
import React from 'react'
import styles from '../styles/Styles.module.css'

import {BiArrowBack} from 'react-icons/bi'


export default function ComingSoon() {
  return (
    <div className={styles.container+" "+styles.hero + " " + styles.coming}>
        <Link className={styles.backBtn} href="/">
            <p><BiArrowBack/> BACK</p>
        </Link>

        <h1>COMING <mark>SOON</mark></h1>

    </div>
  )
}
