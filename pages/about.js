import Head from 'next/head'
import Link from 'next/link';

const About = () => {
    return ( 
        <>
        <Head>
            <title>About</title>
            <meta name='keywords' content='Court Reservation'/>

        </Head>
        
        <div className='text-center my-5'>
            <h1>About Us</h1>
            <p><b>MLAAEB</b> is where you can reserve courts for most popular sports</p>
            <p>Follow us on Instagram for up-to-date infomation: <Link className = 'link-success' href={"https://instagram.com/mlaaebsa?igshid=YmMyMTA2M2Y="}>MLAAEB Instagram</Link></p>

        </div> 
    </>);
}
 
export default About;