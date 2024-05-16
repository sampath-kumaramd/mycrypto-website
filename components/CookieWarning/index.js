import React from 'react'
import { parseCookies, setCookie } from 'nookies'

import styles from '../../styles/Styles.module.css'

export default function Index() {
    const[show, SetShow] = React.useState(true)
    const cookies =  parseCookies()

    const handleCookie = () =>{
        if(cookies.ACCEPTED === 'true'){
            SetShow(false)
        }
        else SetShow(true)
    }
    
    React.useEffect(()=>{
        handleCookie()
    }, [])
    
    const acceptCookie = () =>{
        setCookie(null, 'ACCEPTED', true)

        SetShow(!show)
    }
  return (
    <>
        <div className={styles.cookieBar} 
            style={{display: show ? 'flex' : 'none'}}
        >
            <p>We use cookies to optimize your experience</p>
            <span onClick={acceptCookie} className={styles.cookieBtn}>
                Accept all cookies
             </span>
        </div>
    </>
  )
}
