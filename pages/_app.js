import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>FrostBite: College Website</title>
        <link rel="icon" type="image/x-icon" href="/Frostbite.ico"></link>
      </Head>
      
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
