import React from 'react'
import styles from '../../styles/Styles.module.css'
import {GiHamburgerMenu} from 'react-icons/gi'

import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import Lottie from 'react-lottie'
import * as animationData from '../../public/burger.json'

export default function Index({userLanguage, langChange}) {
  return(

      <>
        {userLanguage == "pt-BR" && <PtBR userLanguage={userLanguage} langChange={langChange} />}
        {userLanguage !== "pt-BR" && <DefaultLanguage userLanguage={userLanguage} langChange={langChange} />}


      </>
    )
}


export function DefaultLanguage({userLanguage, langChange}){
  const[navBar, setNavBar] = React.useState(false)

  const[animationState, setAnimationState] = React.useState({
    isStopped: true, isPaused: false, direction: -1
  })

  const defaultOptions ={
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const handleNavBar = () =>{
    setAnimationState({
      ...animationState,
      isStopped: false,
      direction: animationState.direction === 1 ? -1 : 1
       
    })
    setNavBar(!navBar)
  }
   return (
    <>
        <div className={styles.nav} style={{zIndex: '999'}}>
          <div className={styles.logo}>
              <img src={"MCS_coin 2.png"} width={80} height={80} />
              <select onChange={(e)=> langChange(e.target.value)}>
                <option selected={userLanguage !== 'pt-BR' && true} value={'en'}>Eng</option>
                <option selected={userLanguage == 'pt-BR' && true} value={'pt-BR'}>Por</option>
              </select>
          </div>
          <div className={styles.burger} onClick={handleNavBar}>
          <Lottie options={defaultOptions}
              height={50}
              width={50}
              isStopped={animationState.isStopped}
              isPaused={animationState.isPaused}
              direction={animationState.direction}
              speed={2}
              />
          </div>
      </div>
      <div className={!navBar ? styles.navBar : styles.navBarActive}>
        <ul>
          <li>
            <Link to="about" spy={true} smooth={true} offset={50} duration={500} onClick={handleNavBar}>
              ABOUT
            </Link>
          </li>
          <li>
            <a href='ComingSoon'>BLOG & NEWS</a>
          </li>
          
          {/* <li>DISCORD</li> */}
          <li>
            <Link to="nft" spy={true} smooth={true} offset={50} duration={500} onClick={handleNavBar}>
              NFT
            </Link>
          </li>

          <li>
            <a href='Whitepaper'>WHITEPAPER</a>
          </li>

          <li>FAQ</li>


          <li>
            <a href='ComingSoon'>JOIN US</a>
          </li>
          <li></li>
        </ul>

      </div>
    </>
  )
}

export function PtBR({userLanguage, langChange}){
  const[navBar, setNavBar] = React.useState(false)

  const[animationState, setAnimationState] = React.useState({
    isStopped: true, isPaused: false, direction: -1
  })

  const defaultOptions ={
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const handleNavBar = () =>{
    setAnimationState({
      ...animationState,
      isStopped: false,
      direction: animationState.direction === 1 ? -1 : 1
       
    })
    setNavBar(!navBar)
  }
   return (
    <>
        <div className={styles.nav} style={{zIndex: '999'}}>
          <div className={styles.logo}>
              <img src={"MCS_coin 2.png"} width={80} height={80} />
              <select onChange={(e)=> langChange(e.target.value)}>
                <option selected={userLanguage !== 'pt-BR' && true} value={'en'}>Eng</option>
                <option selected={userLanguage == 'pt-BR' && true} value={'pt-BR'}>Por</option>
              </select>
          </div>
          <div className={styles.burger} onClick={handleNavBar}>
          <Lottie options={defaultOptions}
              height={50}
              width={50}
              isStopped={animationState.isStopped}
              isPaused={animationState.isPaused}
              direction={animationState.direction}
              speed={2}
              />
          </div>
      </div>
      <div className={!navBar ? styles.navBar : styles.navBarActive}>
        <ul>
          <li>
            <Link to="about" spy={true} smooth={true} offset={50} duration={500} onClick={handleNavBar}>
              SOBRE
            </Link>
          </li>
          <li>
            <a href='ComingSoon'>BLOG & NEWS</a>
          </li>
          
          {/* <li>DISCORD</li> */}
          <li>
            <Link to="nft" spy={true} smooth={true} offset={50} duration={500} onClick={handleNavBar}>
              NFT
            </Link>
          </li>

          <li>
            <a href='Whitepaper'>WHITEPAPER</a>
          </li>

          <li>FAQ</li>


          <li>
            <a href='ComingSoon'>FAÇA PARTE</a>
          </li>
          <li></li>
        </ul>

      </div>
    </>
  )
}