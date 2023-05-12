import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router'




const Navbar = () => {
      
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const [user, setUser] = useState(null)

  useEffect(() => setUser(cookies.user), [])
  const router = useRouter();


    

    const signOut = () => {
        setUser(null)
        removeCookie('user');
        router.replace("/");
      }



    return ( 
        <nav className='navbar navbar-expand-lg navbar-light bg-light shadow-sm border-bottom'>
            <div className='container-fluid'>
                <Link href={'/'}>
                    <Image src="/LOGO.png" alt="" className='navbar-brand' width={128} height={64}/>
                </Link>
                    
                {
                    user ? (
                        
                        <Dropdown>
                            <Dropdown.Toggle style={{background: 'transparent', border: 'none', boxShadow: 'none' }} id="dropdown-basic">
                                <Image src="/user.png" alt="" width={64} height={64}/>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                                {user.type === 'owner' && (
                                    <Dropdown.Item href={`/${user.id}/new`}>Add Court</Dropdown.Item>
                                )}
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