import { useState } from 'react';
// import Img from './Img';
import Image from 'next/image'
import styles from '../styles/Login.module.css';
import Link from 'next/link';


const LoginBox = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
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
    <>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
        <Image
          src='/LOGO_without_caption.png'
          alt='logo'
          width={'100'}
          height={'100'}
        />
        <h1>Login</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <label htmlFor='username'>
            Username:
        </label>
        <input type="text" value={username} name='username' onChange={(e) => setUsername(e.target.value)} />
        <br />
        <label htmlFor='password'>
            Password:
        </label>
        <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit">Login</button>
        <p>Don't have account? <Link href='/registration/signup'>create account</Link></p>
        </form>
        
    </>
  );
}

export default LoginBox;