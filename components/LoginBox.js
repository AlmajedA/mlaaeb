import { useState } from 'react';
// import Img from './Img';
import Image from 'next/image'
import styles from '../styles/Login.module.css';


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
          src='/../public/logo.png'
          alt='logo'
          width={'100'}
          height={'100'}
        />
        <h1>Login</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
        </form>
    </>
  );
}

export default LoginBox;