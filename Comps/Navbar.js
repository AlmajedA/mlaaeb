import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';



const Navbar = () => {
    const [userAcc, setUserAcc] = useState(null);
    useEffect(() => {
        const loggedInUser = localStorage.getItem("userAcc") || null;
        if (loggedInUser) {
            setUserAcc(loggedInUser);
        }
      }, []);

    const signOut = () => {
        setUserAcc(null);
        localStorage.removeItem("userAcc");
      }



    return ( 
        <nav className='navbar navbar-expand-lg navbar-light bg-light shadow-sm border-bottom'>
            <div className='container-fluid'>
                <Link href={'/'}>
                    <Image src="/LOGO.png" alt="" className='navbar-brand' width={128} height={64}/>
                </Link>
                    
                {
                    userAcc ? (
                        
                        <Dropdown>
                            <Dropdown.Toggle style={{background: 'transparent', border: 'none', boxShadow: 'none' }} id="dropdown-basic">
                                <Image src="/user.png" alt="" width={64} height={64}/>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={signOut}>Log out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    ) : (
                
                
                <div className="d-flex">


                    <Link className='btn btn-outline-success m-2' href='/registration/login'>Sign in</Link>
                    <Link className='btn btn-success m-2' href='/registration/signup'>Sign up</Link>

                </div>

                )}
            </div>
        </nav>
     );
}
 
export default Navbar;