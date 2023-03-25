import styles from '../styles/Login.module.css';

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
      </form>
    </>
  );
}

export default SignUpBox;