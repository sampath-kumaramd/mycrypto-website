import Link from 'next/link'
import React from 'react'
import styles from '../styles/Styles.module.css'
import Footer from "../components/Footer"

import {BiArrowBack} from 'react-icons/bi'
import Image from 'next/image'

import Tilt from "react-parallax-tilt"

export default function Whitepaper() {

  const[hindiHover, setHindiHover] = React.useState({})

  const handleEng =() =>{
    window.open("https://drive.google.com/file/d/1Ohb96Oh0tPTp6xe13sTiwD990NosLbby/view?usp=sharing")
  }

  const handlePt = () =>{
    window.open("https://drive.google.com/file/d/15KkFYM9VIy7oVvbLVFEKybZJPMoakJ_c/view?usp=sharing")
  }

  const handleHindi = () =>{
    console.log('click')
    window.open("https://drive.google.com/file/d/1wLnWRGpUVKWYJFLD4giWumf5V3VC6mm0/view?usp=sharing")
  }

  const handleHindiHover =(x, y)=>{
    console.log(x + " " + y)
      setHindiHover({transform: `rotateX(${x/2}deg) rotateY(${y/2}deg)`})
  }
  return (
      <>
          <div className={styles.container+ " " + styles.nftsPage + " " + styles.whitepaper }>
            <Link  href="/">
                <p className={styles.backBtn}><BiArrowBack/> BACK</p>
            </Link>

            <h1>WHITE<mark>PAPER</mark></h1>
            <h2>CHOOSE YOUR LANGUAGE</h2>
            <div className={styles.whitepaperContainer}>
              <div>
                
                <div onClick={handleEng}>
                  <Tilt className={styles.tilt}>
                    <p>ENGLISH</p>
                    <Image src={"/engcover.png"} alt='whitepaper english cover' width={240} height={330} />
                  </Tilt>
                </div>
                
              </div>
              <div>
                <div onClick={handlePt}>
                  <Tilt className={styles.tilt} >
                    <p>PORTUGUÊS</p>
                    <Image src={"/ptcover.png"} alt='whitepaer portuguese cover' width={240} height={330}  />
                  </Tilt>
                </div>
                

              </div>
              <div>
                
              <div onClick={handleHindi}>
              <Tilt className={styles.tilt} scale={1.02} >
                  <p>HINDI</p>
                  <Image src={"/hindicover.png"} alt='whitepaper hindi cover' width={240} height={330}  />
                </Tilt>
              </div>
              </div>
            </div>

        </div>
        {/* <Footer /> */}
      </>
  )
}
