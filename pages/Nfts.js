import React from 'react'
import styles from '../styles/Styles.module.css'
import Footer from '../components/Footer'

import Link from 'next/link'
import {BiArrowBack} from 'react-icons/bi'
import {BsDiscord, BsFacebook, BsTwitter, BsYoutube} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTelegramPlane} from 'react-icons/fa'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-flip";
 
import { Navigation, EffectFlip } from "swiper";
import Head from 'next/head'
export default function Nfts() {
    const [userLanguage, setUserLanguage] = React.useState('')

    React.useEffect(()=>{
      setUserLanguage(window.navigator.userLanguage || window.navigator.language)
    },[])
  return (
    <>
    <Head>
        <title>My Crypto Soccer - Soccer DAO</title>
        <meta name="description" content="The first Soccer DAO, let's buy our team together, buy our NFTs" />
        <link rel="icon" href="/MCS_coin 2.png" />
    </Head>

    <div className={styles.container+ " " + styles.nftsPage}>
        <Link  href="/">
            <p className={styles.backBtn}><BiArrowBack/> {userLanguage !== 'pt-BR' ? 'BACK' : 'VOLTAR'}</p>
        </Link>
        {userLanguage !== 'pt-BR' && <h1>BUY <mark>MY CRYPTO SOCCER&apos;S</mark> NFT&apos;s</h1>}
        {userLanguage == 'pt-BR' && <h1>COMPRE NFTS <mark>MY CRYPTO SOCCER</mark></h1>}
        <div className={styles.sales}>
                <a href='https://opensea.io/MyCryptoSoccer' rel='noreferrer' className={styles.btn}  target="_blank">
                    {userLanguage !== 'pt-BR' ? 'Buy Now' : 'Comprar'}
                </a>
            </div>
        <div className={styles.nftsContainer}>
        <div className={styles.sales}>
        <Swiper navigation={true}        
        effect={"flip"}
        grabCursor={true} 
        modules={[Navigation, EffectFlip]} 
        loop={true} 
        className={styles.mySwiper}>
            <SwiperSlide className={styles.mySlide}><img src='ticket1.png' className={styles.nft} alt='nft ticket'  /></SwiperSlide>
            <SwiperSlide className={styles.mySlide}> <img src='ticket2.png' className={styles.nft} alt='nft ticket'  /></SwiperSlide>
            <SwiperSlide className={styles.mySlide}> <img src='ticket3.png' className={styles.nft} alt='nft ticket' /></SwiperSlide>
            <SwiperSlide className={styles.mySlide}> <img src='ticket4.png' className={styles.nft} alt='nft ticket' /></SwiperSlide>
        </Swiper>
        </div>




            {/* 
            <div className={styles.nftHolder}>
                <img src='ticket1.png' className={styles.nft} />
                <img src='ticket2.png' className={styles.nft} />
                <img src='ticket3.png' className={styles.nft} />
                <img src='ticket4.png' className={styles.nft} />
            </div> */}



        </div>

    </div>
    <div className={styles.socialMedia}>
            <a href='https://t.me/mycryptosoccer'>
                <FaTelegramPlane />
            </a>
            <a href='https://www.youtube.com/channel/UCI-wutITFLBOtCwBI0VVYhQ' rel='noreferrer' target={"_blank"}>
                <BsYoutube />
            </a>
            <a href='https://instagram.com/mycryptosoccer?utm_medium=copy_link' rel="noreferrer" target={"_blank"}>
                <AiFillInstagram />
            </a>
            <a href='' rel="noreferrer" target={"_blank"}>
                <BsFacebook />
            </a>
            <a href='https://twitter.com/MyCryptoSoccer1?t=-b08nfTwPxND6bYImUOHlw&s=08' rel="noreferrer" target={"_blank"}>
                <BsTwitter />
            </a>

            <p>{userLanguage !== 'pt-BR' ? 'FOLLOW US' : 'SIGA'}</p>

            <div className={styles.line}>
                <img src='line.svg' alt='line' />
            </div>

        </div>
    <Footer />
    
    </>
  )
}
