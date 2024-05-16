import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Styles.module.css'
import React from 'react'


import Header from '../components/Header'
import SecondSection from '../components/SecondSection'
import Membership from '../components/Membership'
import Nfts from '../components/Nfts'
import Benefits from '../components/Benefits'
import GoogleTranslate from '../components/GoogleTranslate'
import Partners from '../components/Partners'
import Footer from '../components/Footer'

import CookieWarning from '../components/CookieWarning'



export default function Home() {
  const [userLanguage, setUserLanguage] = React.useState('')
  const [language, setLanguage] = React.useState('')

  const langChange = (lang) =>{
    setLanguage(lang)
    setUserLanguage(lang)
  }

  React.useEffect(()=>{
    if(language.length < 1){
      setUserLanguage(window.navigator.userLanguage || window.navigator.language)
    }

    else{
      setUserLanguage(language)
    }
    
  },[])

  return (
    <div className={styles.container}>
      
      <Head>
        <title>My Crypto Soccer - Soccer DAO</title>
        <meta name="description" content="The first Soccer DAO, let's buy our team together" />
        <link rel="icon" href="/MCS_coin 2.png" />
        <meta name="keywords" content="NFT, bitcoin, ethereum, soccer, opensea" />
        <meta name="robots" content="index,follow" />
        
      </Head>
      <main>

        <Header langChange={langChange} userLanguage={userLanguage} />
        <SecondSection userLanguage={userLanguage} />
        <Membership userLanguage={userLanguage} />
        <Nfts userLanguage={userLanguage} />
        <Benefits userLanguage={userLanguage} />
        <Partners userLanguage={userLanguage} />
        <Footer userLanguage={userLanguage} />
        <CookieWarning userLanguage={userLanguage} />
      
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
