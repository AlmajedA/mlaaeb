import React from 'react';
import Image from 'next/image'
import TwoSides from '../../Comps/TwoSides';
import LoginBox from '../../Comps/LoginBox';
import Footer from '../../Comps/Footer';

const Login = ({pageName}) => {    
    return (
        <div style={{height: "100%", padding: 0}}>
        <TwoSides 
            left={<Image src='/../public/LOGO Horizantal.png' alt='logo' width={1000} height={1000} layout="responsive"/>}
            right={<LoginBox />} 
        />
        <Footer />
        </div>
    );
    }

Login.defaultProps = {
    pageName: 'SignIn'
};

export default Login;