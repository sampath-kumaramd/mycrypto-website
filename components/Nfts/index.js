import React from 'react'
import styles from '../../styles/Styles.module.css'
import {Link as LinkTo} from 'next/link';

import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import { useInView } from 'react-intersection-observer';
import {motion, useAnimation} from "framer-motion"
import {fadeUp, flipRight, fadeUpChildrenDelay, scaleUp} from '../../lib/animation'

export default function Index({userLanguage}) {

  return (
    <>
        <Element name="nft"></Element>
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
            <div ref={ref} className={styles.container + " " + styles.nfts}>
                <motion.div initial={'hidden'} animate={controls} transition={{ duration: 1, delay: 0.5}} variants={fadeUp}>
                    <h1><mark>OUR</mark> NFTS</h1>
                    <p>
                        All the earnings from My Crypto Soccer NFTs will be utilized for marketing initiatives, collaborations, operating expenditures, partnerships, and initial fund creation.
                    </p>
                    <p>
                        My Crypto Soccer NFTs Gallery is now accessible on the {"world"+"'"+"s"} largest NFTs marketplace (OpenSea). When more partner clubs join the initiative, their NFTs will be added to the gallery (see our NFT gallery and how to buy). 
                    </p>
                    <p>
                        Holders of My Crypto Soccer NFTs will receive free tokens ($MYCS) proportional to the number of NFTs obtained from Series 1 according to our tokenomics.
                    </p>
                </motion.div>
                <div className={styles.nftHolder}>
                    <img src='ticket1.png' className={styles.nft} alt='nft ticket' />
                    <img src='ticket2.png' className={styles.nft} alt='nft ticket' />
                    <img src='ticket3.png' className={styles.nft} alt='nft ticket' />
                    <img src='ticket4.png' className={styles.nft} alt='nft ticket' />

                    <a href={"/Nfts"} className={styles.btn}>
                        <span >
                            Buy Now
                        </span>
                    </a>

                </div>

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
            <div ref={ref} className={styles.container + " " + styles.nfts}>
                <motion.div initial={'hidden'} animate={controls} transition={{ duration: 1, delay: 0.5}} variants={fadeUp}>
                    <h1><mark>NOSSAS</mark> NFTS</h1>
                    <p>
                        Todos os ganhos dos NFTs My Crypto Soccer serão utilizados para iniciativas de marketing, colaborações, despesas operacionais, parcerias e criação de fundos iniciais.

                    </p>
                    <p>
                        
                        A galeria de NFTs My Crypto Soccer já está disponível no maior mercado de NFTs do mundo (OpenSea). Quando mais times parceiros se afiliarem a iniciativa, suas NFTs vão ser adicionadas a nossa galeria (veja nossa galeria de NFTs e como comprar).
                    </p>
                    <p>
                        
                        Donos das nossas NFTs vão receber tokens gratuitos ($MYCS) proporcionais ao número de NFTs da série 1 adquiridas de acordo com nosso tokenomics.
                    </p>
                </motion.div>
                <div className={styles.nftHolder}>
                    <img src='ticket1.png' className={styles.nft} alt='nft ticket' />
                    <img src='ticket2.png' className={styles.nft} alt='nft ticket' />
                    <img src='ticket3.png' className={styles.nft} alt='nft ticket' />
                    <img src='ticket4.png' className={styles.nft} alt='nft ticket' />

                    <a href={"/Nfts"} className={styles.btn}>
                        <span >
                            Comprar Agora
                        </span>
                    </a>

                </div>

            </div>
          </>
      )

}