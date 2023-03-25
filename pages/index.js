import Head from 'next/head'
import Image from 'next/image'
import Footer from '../Comps/Footer'
import Navbar from '../Comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (

    <>
      <Head>
        <title>MLAAEB</title>
        <meta name='keywords' content='Court Reservation'/>

      </Head>
      
      <div className={styles.container}>

        <h1>Homepage</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim omnis quia molestiae tenetur quos ab tempore, inventore eveniet cumque unde exercitationem doloremque dolore, non ipsa labore, voluptate repellat officia cum.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim omnis quia molestiae tenetur quos ab tempore, inventore eveniet cumque unde exercitationem doloremque dolore, non ipsa labore, voluptate repellat officia cum.</p>
        

        
      </div>
    </>
  )
}
