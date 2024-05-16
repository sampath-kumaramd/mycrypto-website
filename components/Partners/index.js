import React from 'react'
import styles from '../../styles/Styles.module.css'

import {AiFillInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'

import { useInView } from 'react-intersection-observer';
import {motion, useAnimation} from "framer-motion"
import {fadeUp, flipRight, fadeUpChildrenDelay, scaleUp} from '../../lib/animation'

export default function Index({userLanguage}) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
      triggerOnce: true
  });

  React.useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
      if (!inView) {
        controls.start('hidden');
      }
    }, [controls, inView]);
    
  return (
    <>
        <div ref={ref} className={styles.container + " " + styles.partners}>
          {userLanguage !== "pt-BR" && <h1>INVESTORS & <mark>PARTNERS</mark></h1>}
          {userLanguage == "pt-BR" && <h1 style={{fontSize: "32px"}}>INVESTIDORES & <mark>PARCEIROS</mark></h1>}

          <div className={styles.row}>
            <div>
              <img src='genus.png' alt='Sport Clube Genus' />
              <p>S.C. GENUS DE PORTO VELHO</p>
              <div>
                <a href='https://www.instagram.com/sportclubgenus.oficial/' rel='noreferrer' target={'_blank'}>
                  <AiFillInstagram/> 
                </a>
                <a href='https://www.facebook.com/SportClubGenusdePortoVelho' rel='noreferrer' target={'_blank'}>
                  <BsFacebook/>
                </a>                
              </div>
            </div>
            <div>
              <img src='uniao.png' alt='Sociedade Esportiva União Cacoalense' />
              <p>S.E. UNIÃO CACOELENSE</p>
              <div>
                <a href='https://www.instagram.com/s.e.uniaocacoalense/' rel='noreferrer' target={'_blank'}>
                  <AiFillInstagram/> 
                </a>
                <a href='https://www.facebook.com/s.e.uniaocacoalenseoficial' rel='noreferrer' target={'_blank'}>
                  <BsFacebook/>
                </a>                
              </div>
            </div>
            <div>
             <img src='rondoniense.png' alt='Rondoniense social clube' />
             <p>RONDONIENSE SOCIAL CLUBE</p>
             <div>
                <a href='https://www.instagram.com/rondoniensesc/' rel='noreferrer' target={'_blank'}>
                  <AiFillInstagram/> 
                </a>
                <a href='https://www.facebook.com/rondoniensesc' rel='noreferrer' target={'_blank'}>
                  <BsFacebook/>
                </a>                
              </div>
            </div>
{/* 
            <div>
             <img src='tiago.png' />
             <p>TIAGO BIAL SOCCER ACADEMY</p>
             <div>
                <a href='https://instagram.com/albalongacalciobrasil?utm_medium=copy_link' rel='noreferrer' target={'_blank'}>
                  <AiFillInstagram/> 
                </a>
                <a href='https://www.facebook.com/rondoniensesc' rel='noreferrer' target={'_blank'}>
                  <BsFacebook/>
                </a>                
              </div>

            </div> */}

            <div>
             <img src='abalonga.png' alt='Albalonga Calcio'/>
             <p>ALBALONGA CALCIO</p>
             <div>
                <a href='https://instagram.com/albalongacalciobrasil?utm_medium=copy_link' rel='noreferrer' target={'_blank'}>
                  <AiFillInstagram/> 
                </a>
                {/* <a href='https://www.facebook.com/rondoniensesc' rel='noreferrer' target={'_blank'}>
                  <BsFacebook/>
                </a>                 */}
              </div>
            </div>

          </div>
        </div>
    </>
  )
}
