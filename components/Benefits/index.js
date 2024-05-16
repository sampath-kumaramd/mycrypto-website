import React from 'react'
import styles from '../../styles/Styles.module.css'
import { useInView } from 'react-intersection-observer';
import {motion, useAnimation} from "framer-motion"
import {fadeUp, flipRight, fadeUpChildrenDelay, scaleUp} from '../../lib/animation'

export default function Index({userLanguage}) {
    
  return (
    <>
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
        <div className={styles.container + " " + styles.second}>
            <div>
                <img src={"ball.svg"} ref={ref}  alt='nft ball' id={styles['ball']} />
            </div>
            <motion.div initial={'hidden'} animate={controls} transition={{ duration: 1, delay: 0.5}} variants={fadeUp}>
                <h1>BENEFITS OF OWNING NFTS <br/>
                <mark>MY CRYPTO SOCCER</mark>
                </h1>

                <ul>
                    <li>Airdrops ($MYCS) proportional to the NFT value.</li>
                    <li>Lifetime Airdrop of Fantokens from each partner club.</li>
                    <li>Priority is given when buying new rare and exclusive NFTs My Crypto Soccer</li>
                    <li>Founding Member Benefits</li>
                    <li>Participate in decisions</li>
                    <li>Meeting with players</li>
                    <li>Exclusive access</li>
                    <li>VIP experience</li>
              
                </ul>
                <p>
                Every Membership ticket will have a different benefit, please read the benefits of each NFT and buy it accordingly.
                </p>
                
            </motion.div>
        </div>
        <div className={styles.container + " " + styles.second} style={{flexWrap: 'wrap-reverse'}}>
            <motion.div initial={'hidden'} animate={controls} transition={{ duration: 1, delay: 0.5}} variants={fadeUp}>
                <h1><mark>PARTNERSHIP</mark></h1>
                <p>
                My Crypto Soccer will partner with soccer clubs from all over the world to assist them in financially, promoting web3 technology and strengthening the communities in which they operate by ensuring additional income that only the big teams have access.
                </p>
                <p>
                Fans that buy NFTs from partner teams will receive free FanTokens from their teams and Airdrops from the $MYCS.
                </p>
            </motion.div>
            <div>
                <img src={"kicking3.png"} alt="My Crypto Soccer player kicking" className={styles.rdkick}/>
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
          <div ref={ref} className={styles.container + " " + styles.second}>
            <div>
                <img src={"ball.svg"} alt='ball nft' id={styles['ball']} />
            </div>
            <motion.div initial={'hidden'} animate={controls} transition={{ duration: 1, delay: 0.5}} variants={fadeUp}>

                <h1>BENEFÍCIOS DE TER NFTS <br/>
                <mark>MY CRYPTO SOCCER</mark>
                </h1>
                <ul>
                    <li>Airdrops ($MYCS) proporcionais ao valor da NFT.</li>
                    <li>Airdrop vitalício de Fantokens de cada clube parceiro.</li>
                    <li>Será dada Prioridade para comprar novas NFTs My Crypto Soccer exclusivas e raras</li>
                    <li>Benefícios de Membro Fundador</li>
                    <li>Participe das Decisões</li>
                    <li>Conheça os Jogadores</li>
                    <li>Acesso Exclusivo</li>
                    <li>Experiência VIP</li>
                    
                </ul>
                <p> Cada ticket de Filiação terá um benefício diferente, por favor leia os benefícios de cada NFT antes de comprar.</p>
                
            </motion.div>
        </div>

        <div  className={styles.container + " " + styles.second} style={{flexWrap: 'wrap-reverse'}}>
            <motion.div initial={'hidden'} animate={controls} transition={{ duration: 1, delay: 1}} variants={fadeUp}>
                <h1><mark>PARCERIAS</mark></h1>
                <p>
              
                O My Crypto Soccer formará parcerias com clubes de futebol de todo mundo para assistir eles financeiramente, promovendo a tecnologia da web3 e reforçando as comunidades em que operam para garantir uma renda extra que somente os times grandes tem acesso.
                </p>
                <p>
                
                Fãs que comprarem as NFTs dos times parceiros iram receber FanTokens de seus times e Airdrops do $MYCS.
                </p>
            </motion.div>
            <div>
                <img src={"kicking3.png"} alt="My Crypto Soccer player kicking" className={styles.rdkick}/>
            </div>
        </div>
      </>
    )

}