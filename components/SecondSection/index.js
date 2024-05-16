import React from 'react'
import styles from '../../styles/Styles.module.css'

import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import { useInView } from 'react-intersection-observer';
import {motion, useAnimation} from "framer-motion"
import {fadeUp, flipRight, fadeUpChildrenDelay, scaleUp} from '../../lib/animation'

export default function Index({userLanguage}) {

  return (
    <>
        <Element name='about'></Element>
        {userLanguage !== "pt-BR" && <DefaultLanguage />}
        {userLanguage == "pt-BR" && <PtBR />}
        
    </>
  )
}


export function DefaultLanguage(){
  const controls = useAnimation();
  const { ref, inView } = useInView({
      
      triggerOnce: true,
      
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
        <div ref={ref} className={styles.container+ " " + styles.second}>
            <div className={styles.coin}>
            <img src={"MCS_coin 2.png"} width={300} height={300} alt="mcs coin" />
            </div>
            <motion.div initial={'hidden'} animate={controls} transition={{ duration: 1, delay: 0.5}} variants={fadeUp}>
                <motion.h1 variants={fadeUp}>ABOUT <mark>US</mark></motion.h1>
                <motion.p variants={fadeUp}>There will be no central authority for defining rules; instead, the community member with the consensus will make and follow the rules by using our governance token ($MYCS). </motion.p>
                <motion.p variants={fadeUp}>This will lead to the first soccer team led by true fans and supporters.</motion.p>
            </motion.div>
        </div>

        <div ref={ref} className={styles.container+ " " + styles.second} style={{flexWrap: 'wrap-reverse'}}>
            
            <motion.div initial={'hidden'} animate={controls} transition={{delay: 0.5, duration: 1}} variants={fadeUp}>
                <motion.p variants={fadeUp}>The rights of the members include hiring administrators and managers, buying and selling players, which team to acquire, selling image rights, selling players NFTs, developing play-to-earn games (P2E), investments, general management, merchandising, and partnerships.</motion.p>
                <motion.p variants={fadeUp}>My Crypto Soccer will support smalls clubs and provide financial benefits to its members during the DAO creation process, long before the acquisition of a team. </motion.p>
                <motion.p variants={fadeUp}>As DAO establishes a history of successful projects, the token ($MYCS) will become more desirable by bringing demand and valuing it.</motion.p>
            </motion.div>
            <div className={styles.coin}>
            <img src={"kicking1.svg"} alt="player kicking" className={styles.stkick} />
            </div>
        </div>
      </>
    )
}

export function PtBR(){
  const controls = useAnimation();
  const { ref, inView } = useInView({
      
      triggerOnce: true,
      
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
    <div ref={ref} className={styles.container+ " " + styles.second}>
        <div className={styles.coin}>
        <img src={"MCS_coin 2.png"} alt='mcs coin' width={300} height={300} />
        </div>
        <motion.div initial={'hidden'} animate={controls} transition={{ duration: 1, delay: 0.5}} variants={fadeUp}>
            <motion.h1 variants={fadeUp}>SOBRE <mark>NÓS</mark></motion.h1>
            <motion.p variants={fadeUp}>
                    Não teremos uma autoridade central regulando, mas, os membros em consenso seguirão as regras usando nosso token de governança ($MYCS)</motion.p>
            <motion.p variants={fadeUp}> Isso levará ao primeiro time de futebol liderado por fãs e apoiadores</motion.p>
        </motion.div>
    </div>

    <div ref={ref} className={styles.container+ " " + styles.second} style={{flexWrap: 'wrap-reverse'}}>
        
        <motion.div initial={'hidden'} animate={controls} transition={{delay: 0.5, duration: 1}} variants={fadeUp}>
            <motion.p variants={fadeUp}>Os direitos dos membros incluem a contratação de administradores e gerentes, compra e venda de jogadores, qual equipe adquirir, venda de direitos de imagem, venda de NFTs de jogadores, desenvolvimento de jogos play-to-earn (P2E), investimentos, gerenciamento geral, merchandising e parcerias.</motion.p>
            <motion.p variants={fadeUp}>O My Crypto Soccer apoiará pequenos clubes e fornecerá benefícios financeiros aos seus membros durante o processo de criação do DAO, muito antes da aquisição de um time.</motion.p>
            <motion.p variants={fadeUp}>À medida que o DAO estabelece um histórico de projetos bem-sucedidos, o token ($MYCS) se tornará mais desejável ao trazer demanda e valorizá-lo.</motion.p>
        </motion.div>
        <div className={styles.coin}>
        <img src={"kicking1.svg"} alt='player kicking' className={styles.stkick} />
        </div>
    </div>
  </>
)
}