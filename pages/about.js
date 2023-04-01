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
        <div className='text-center my-5'>
            <h3>Member Contribution: </h3>
                
            <p><b>Ammar Almajed:</b> Main page, Search page, About page, Navbar, and footer.</p>
            <p><b>Abdulhamid Alfaqih:</b> Profile page and Instagram account.</p>
            <p><b>Ali Almarzooq:</b> Dashboard page.</p>
            <p><b>Ali Ibrahim:</b> Sign in and Sign out pages.</p>
                
        </div>
    </>);
}
 
export default About;