import React from 'react';
import Layout from '../../components/Layout';
import Image from 'next/image'
import TwoSides from '../../components/TwoSides';
import SignUpBox from '../../components/SignUpBox';

const Signup = () => {    
    return (
        <Layout>
        <TwoSides 
            left={<Image src='/../public/LOGO-TITLE-HORIZONTAL.png' alt='logo' width={1000} height={1000} layout="responsive"/>}
            right={<SignUpBox />} 
        />
        </Layout>
    );
    }

export default Signup;