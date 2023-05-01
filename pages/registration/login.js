import React from 'react';
import Link from 'next/link'
import LoginBox from '../../Comps/LoginBox';
import Footer from '../../Comps/Footer';

const Login = ({pageName}) => {    
    return (
        <div style={{height: "auto", padding: 0}}>
            <nav className='pb-1'>
                <p className='text-center'>
                    <Link href={'/'}>
                        <img src="/LOGO.png" alt="logo" style={{height: '3rem'}} />
                    </Link>
                </p>
            </nav>
            <LoginBox />
            <Footer />
        </div>
    );
    }

Login.defaultProps = {
    pageName: 'SignIn'
};

export default Login;