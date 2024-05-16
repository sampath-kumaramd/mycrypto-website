import React from 'react'

import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import styles from '../../styles/Styles.module.css'

import { useInView } from 'react-intersection-observer';
import {motion, useAnimation} from "framer-motion"
import {fadeUp, flipRight, fadeUpChildrenDelay, scaleUp} from '../../lib/animation'

export default function Index({userLanguage}) {

      
  return (
    <>
        <Element name="membership"></Element>
        {userLanguage !== "pt-BR" && <DefaultLanguage />}
        {userLanguage == "pt-BR" && <PtBR />}
    </>
  )
}

export function DefaultLanguage(){
    
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
    return(
        <>
            <div ref={ref}  className={styles.container +" " +styles.membership}>
                <div>
                    <img src={"kicking2.svg"} alt="My Crypto Soccer nft player kicking" className={styles.ndkick} />
                </div>
                <motion.div initial={'hidden'} animate={controls} transition={{ duration: 1, delay: 0.5}} variants={fadeUp}>
                    <h1>
                        <mark>MEMBERSHIP</mark> THROUGH NFT                
                    </h1>
                    <p>
                        We have 35 million NFTs divided into four different categories.
                    </p>
                    <p>
                        These NFTs will help you as a member of the DAO earn profits in many different ways like never seen before. 
                    </p>
                    <p>
                        My Crypto Soccer`s Series 1 NFTs will act as a membership ticket; and will grant access to events, an initial allocation of our native token ($MYCS) and future fantokens from each partner team and many others benefits. 
                    </p>
                    <p>
                        It’s a LIFETIME EARNINGS.
                    </p>
                </motion.div>
            </div>
        </>
    )
}

export function PtBR(){
    
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

      return(
          <>
                <div ref={ref}  className={styles.container +" " +styles.membership}>
                    <div>
                        <img src={"kicking2.svg"} alt="My Crypto Soccer nft player kicking" className={styles.ndkick} />
                    </div>
                    <motion.div initial={'hidden'} animate={controls} transition={{ duration: 1, delay: 0.5}} variants={fadeUp}>
                        <h1>
                            <mark>FILIAÇÃO</mark> ATRAVÉS DE NFTS                
                        </h1>
                        <p>
                            
                            Nós temos 35 milhões de NFTs didividas entre quatro categorias.
                        </p>
                        <p>
                           
                            Estas NFTs vão ajudar os membros da DAO a lucrar em várias formas diferentes nunca vistas antes.
                        </p>
                        <p>
                        Os NFTs da Série 1 do My Crypto Soccer funcionarão como um bilhete de associação; e concederá acesso a eventos, uma alocação inicial de nosso token nativo ($MYCS) e fantokens futuros de cada equipe parceira e muitos outros benefícios.                            
                        </p>
                        <p>
                            É um GANHO PARA VIDA TODA.
                        </p>
                    </motion.div>
                </div>

          </>
      )

}