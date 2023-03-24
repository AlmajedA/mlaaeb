import Head from 'next/head'
import styles from '../styles/Home.module.css'
const About = () => {
    return ( 
        <>
        <Head>
            <title>About</title>
            <meta name='keywords' content='Court Reservation'/>

        </Head>
        
        <div className={styles.container}>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque maiores sit exercitationem iste, a praesentium ipsum similique dolorum repellendus cum veritatis nobis ipsam adipisci minus et. Veniam quam culpa odio?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque maiores sit exercitationem iste, a praesentium ipsum similique dolorum repellendus cum veritatis nobis ipsam adipisci minus et. Veniam quam culpa odio?</p>

        </div> 
    </>);
}
 
export default About;