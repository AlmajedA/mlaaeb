import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { Radio } from "@nextui-org/react";
const SignUpBox = ()=> {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [telNo, setTelNo] = useState('');
  const [password, setPassword] = useState('')
  const [confPswd, setConfPswd] = useState('')
  const [userType, setUserType] = useState('User')

  const [error, setError] = useState('');


  const handleNameChange = (event) => {
    setName(event.target.value)
  }
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleTelNoChange = (event) => {
    setTelNo(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleConfPswdChange = (event) => {
    setConfPswd(event.target.value)
  }



  const handleSubmit = async (e) => {
    e.preventDefault();

    // check if password and confirm password are the same
    if (password !== confPswd) {
      setError('Passwords do not match');
      return;
    }
    // send request to server
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        body: JSON.stringify({ name: name, email: email, telNo: telNo, password: password, user: userType}),
        headers: { 'Content-Type': 'application/json' },
      });
      

      if (response.ok) {
        // redirect to dashboard or homepage
        location.replace("/")
    
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      setError('An unexpected error occurred');
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-5 mb-5 position-relative">
          <div className="card  mt-5 mb-5 ">
            <div className="card-body rounded shadow-lg " style={{ backgroundColor: '', color: '', heigh: 'auto'  }}>
              <h2 className="card-title mb-4 text-center">Sign up</h2>
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
                <div className='container'>
                  <div className='row'>
                    <div className="mb-3 col">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" pattern='^[^\s]+$' className="form-control text-bg-light" id="name" placeholder="Your name" value={name} onChange={handleNameChange} required />
                    </div>
                    <div className="mb-3 col">
                        <label htmlFor="telNo" className="form-label">Phone</label>
                        <input type="tel" pattern="^05\d{8}$" className="form-control text-bg-light" id="telNo" placeholder="05xxxxxxxx" value={telNo} onChange={handleTelNoChange} required />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control text-bg-light" id="email" value={email} onChange={handleEmailChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$" className="form-control text-bg-light" id="password" onChange={handlePasswordChange} required />
                  <p className='fw-light text-secondary'>Password should have at least one uppercase, at least one lowercase, at least one digit, and a minimum length of 6 characters.</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="conf-pswd" className="form-label">Confirm Password</label>
                  <input type="password" className="form-control text-bg-light" id="conf-pswd" onChange={handleConfPswdChange} required />
                </div>
                <div className="mb-3">
                  <Radio.Group label="User Type" orientation="horizontal" value={userType} onChange={setUserType}>
                  
                    <Radio value="User" color="success" labelColor="success" >
                      User
                    </Radio>
                    <Radio value="Onwer" color="success" labelColor="success" >
                      Owner
                    </Radio>
                    
                </Radio.Group>
                  
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-outline-success btn-block">Sign up</button>
                  <p className='block mt-2 text-center'>Already have account?<Link href='/registration/login'>Login</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpBox;