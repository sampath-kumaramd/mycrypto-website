import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {

  return (<>
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-JP238PEBLE"></Script>
    <Script id='gtag' strategy="afterInteractive" dangerouslySetInnerHTML={{
      __html:`  window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-JP238PEBLE');`
    }} ></Script>
    <Component {...pageProps} />
  </>)
}

export default MyApp
