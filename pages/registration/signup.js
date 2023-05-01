import React from 'react';
import SignUpBox from '../../Comps/SignUpBox';
import Footer from '../../Comps/Footer';
import Link from 'next/link'

const Signup = ({pageName}) => {    
    
    return (
        <div style={{height: "auto", padding: 0}} >
            <nav className='pb-1'>
                <p className='text-center'>
                    <Link href={'/'}>
                        <img src="/LOGO.png" alt="logo" style={{height: '3rem'}} />
                    </Link>
                </p>
            </nav>
            <SignUpBox />
            <Footer />
        </div>
    );
    }

Signup.defaultProps = {
    pageName: 'SignUp'
};

export default Signup;