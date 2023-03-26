import React from 'react';
import Image from 'next/image'
import TwoSides from '../../Comps/TwoSides';
import LoginBox from '../../Comps/LoginBox';

const Login = () => {    
    return (
        
        <TwoSides 
            left={<Image src='/../public/LOGO-TITLE-HORIZONTAL.png' alt='logo' width={1000} height={1000} layout="responsive"/>}
            right={<LoginBox />} 
        />
        
    );
    }

export default Login;