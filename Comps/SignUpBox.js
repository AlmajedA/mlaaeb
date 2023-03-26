import styles from '../styles/Login.module.css';
import Link from 'next/link';

const SignUpBox = ()=> {
  return (
    <>
      <form className={styles.loginForm}>
        <h1>Sign Up</h1>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <label htmlFor="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" name="confirm-password" />
        <button type="submit">Sign Up</button>
        <p>Already have account? <Link href='/registration/login'>Sign in</Link></p>
      </form>
    </>
  );
}

export default SignUpBox;