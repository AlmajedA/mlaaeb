import React from 'react';

import Image from 'next/image'
import TwoSides from '../../Comps/TwoSides';
import SignUpBox from '../../Comps/SignUpBox';

const Signup = ({pageName}) => {    
    
    return (
        
        <TwoSides
            left={<Image src='/../public/LOGO-TITLE-HORIZONTAL.png' alt='logo' width={1000} height={1000} layout="responsive"/>}
            right={<SignUpBox />} 
        />
        
    );
    }

Signup.defaultProps = {
    pageName: 'SignUp'
};

export default Signup;