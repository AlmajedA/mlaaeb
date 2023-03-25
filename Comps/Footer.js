
import Link from 'next/link'

const Footer = () => {
    return ( 
        <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
            <h5>
        
                <p>Copyright 2023 MLAAEB</p>
                <Link href="/about" className='nav-link'>About</Link>
        
            </h5>      


        </footer>
     );
}
 
export default Footer;