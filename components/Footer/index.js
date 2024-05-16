import React from 'react'
import Link from 'react-scroll/modules/components/Link'

import styles from '../../styles/Styles.module.css'

import {BsDiscord, BsYoutube, BsFacebook, BsTwitter} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'

export default function index({userLanguage}) {
  return (
    <>
        {userLanguage == "pt-BR" && <PtBR />}
        {userLanguage !== "pt-BR" && <DefaultLanguage />}
      
    </>
  )
}

export function DefaultLanguage(){

  return(

      <div className={styles.container + ' ' + styles.footer}>
      <div>
      <ul>
          <li>
            <Link to="about" spy={true} smooth={true} offset={50} duration={500} >
              ABOUT
            </Link>
          </li>
          <li>
            <a href='ComingSoon'>BLOG & NEWS</a>
          </li>
          
          {/* <li>DISCORD</li> */}
          <li>
            <Link to="nft" spy={true} smooth={true} offset={50} duration={500} >
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
      <p style={{textAlign: 'center'}}>ALL RIGHTS RESERVED</p>
    </div>
    )
}

export function PtBR(){

  return(
          <div className={styles.container + ' ' + styles.footer}>
      <div>
      <ul>
          <li>
            <Link to="about" spy={true} smooth={true} offset={50} duration={500} >
              SOBRE
            </Link>
          </li>
          <li>
            <a href='ComingSoon'>BLOG & NEWS</a>
          </li>
          
          {/* <li>DISCORD</li> */}
          <li>
            <Link to="nft" spy={true} smooth={true} offset={50} duration={500} >
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
      <p style={{textAlign: 'center'}}>TODOS OS DIREITOS RESERVADOS</p>
    </div>


    )
}