import { useRouter } from 'next/router'
import '../styles/globals.css'

import Header from '../components/header/header';
import Footer from '../components/footer/footer';

export default function App({ Component, pageProps }) {

  const router = useRouter();

  return (
    <div>
      {/* {router.pathname} */}
      <Header />
      <Component {...pageProps} />
      {(router.pathname === '/navigation' ? <></>:<Footer />)}
    </div>

  )
}
