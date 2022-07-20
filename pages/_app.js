import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import Footer from '../components/Footer'

import '../styles/chat.css'
import '../styles/landingPage.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>FrostBite: College Website</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </Head>
      <Navbar />
      <NextNProgress height={2} color="#06b4ff" />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
