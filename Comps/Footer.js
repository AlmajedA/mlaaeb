
import Link from 'next/link'


const Footer = () => {
    return ( 
        <footer className="text-center text-white border-top mt-4 bg-light">
  
            <div className="container pt-2">
                {/* Section: Social media */}
                <section className="mb-4 d-inline p-5">
                    <Link href='/about' className='text-decoration-none text-dark'><b>About</b></Link>
                
                </section>
                
            </div>

            {/* Copyright */}
            <div className="text-center text-dark p-3">
                © 2023 Copyright: <b>MLAAEB</b>
            </div>
            
        </footer>
     );
}
 
export default Footer;