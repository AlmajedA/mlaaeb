import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';

const SignUpBox = ()=> {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confPswd, setConfPswd] = useState('')
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
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
        body: JSON.stringify({ email, password}),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        // redirect to dashboard or homepage
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
        <div className="col-lg-8">
          <div className="card mt-5">
            <div className="card-body rounded" style={{ backgroundColor: '#333333', color: 'white' }}>
              <h2 className="card-title mb-4 text-center">SignUp</h2>
              <Image
                src='/LOGO_without_caption.png'
                alt='logo'
                width={'100'}
                height={'100'}
                className="mx-auto d-block"
              />
              {error && <p style={{ color: 'red', textAlign: 'center'}}>{error}</p>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="conf-pswd" className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" id="conf-pswd" value={confPswd} onChange={handleConfPswdChange} required />
                </div>
                <div class="d-grid">
                  <button type="button" className="btn btn-outline-success btn-block" onClick={handleSubmit}>SignUp</button>
                  <p className='block mt-2 text-center'>Already have account? <Link href='/registration/login'>Login</Link></p>
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