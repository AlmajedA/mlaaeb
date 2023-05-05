
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router'


const LoginBox = ()=> {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('');
  const [userAcc, setUserAcc] = useState(null);
  
  // cookies (new things)
  const [cookies, setCookie, removeCookie] = useCookies(['user']);

  const router = useRouter();



  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/signin', {
        method: 'POST',
        body: JSON.stringify({ email: email, password: password }),
        headers: { 'Content-Type': 'application/json' },
      });
    
      if (response.ok) {
        const userAcc = await response.json(); // Parse the response JSON object
      
        if (userAcc.name) {
          // redirect to dashboard or homepage
          setCookie('user', userAcc, {
            path: '/',
          });

          router.replace("/");
        } else {
          setError('Email or password are incorrect');
        }
      } 
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      setError('An unexpected error occurred');
    }
    
  };


  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-4 mb-5 position-relative">
          <div className="card mt-5 mb-5">
            <div className="card-body rounded shadow-lg" style={{ backgroundColor: '', color: '', heigh: 'auto' }}>
              <h2 className="card-title mb-4 text-center">Sign in</h2>
              <Link href={'/'}>
              <Image
                src='/LOGO_without_caption.png'
                alt='logo'
                width={'100'}
                height={'100'}
                className="mx-auto d-block"
              />
              </Link>
              {error && <p style={{ color: 'red', textAlign: 'center'}}>{error}</p>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control text-bg-light" id="email" value={email} onChange={handleEmailChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control text-bg-light" id="password" onChange={handlePasswordChange} required />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-outline-success btn-block">Sign in</button>
                  <p className='block mt-2 text-center'>Don't have account? <Link href='/registration/signup'>create account</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginBox