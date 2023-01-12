import { useRouter } from 'next/router'
import '../styles/globals.css'

import Header from '../components/header/header';
import Footer from '../components/footer/footer';

import Head from 'next/head';

export default function App({ Component, pageProps }) {

  const router = useRouter();

  return (
    <div>

      <Head><title>GlobalTalk</title></Head>

      {/* {router.pathname} */}
      <Header />
      <Component {...pageProps} />
      {((router.pathname === '/navigation' 
      || router.pathname === '/login' 
      || router.pathname === '/std_signup'
      || router.pathname === '/ins_signup'
      ) ? <></> : <Footer />)}
    </div>

  )
}
