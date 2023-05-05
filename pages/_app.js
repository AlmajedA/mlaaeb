import Layout from '../Comps/Layout'
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import { CookiesProvider } from 'react-cookie';




function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <CookiesProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CookiesProvider>
    </>
      
  )
}

export default MyApp
