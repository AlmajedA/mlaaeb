import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from './Navbar';
import LoginForm from './LoginBox';

const LoginHandler = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  const handleLogin = async () => {
    // perform login logic here, then set isLoggedIn to true
    const response = await fetch('/api/signin');
    const data = await response.json();
    if (data.loggedIn) {
      setIsLoggedIn(true);
      history.push('/registration/signin');
    }
  };

  const handleLogout = async () => {
    // perform logout logic here, then set isLoggedIn to false
    // const response = await fetch('/api/logout');
    // const data = await response.json();
    // if (data.loggedOut) {
    //   setIsLoggedIn(false);
    //   history.push('/');
    // }
    setIsLoggedIn(false);

  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <LoginForm isLoggedIn={isLoggedIn} handleLogin={handleLogin} />
    </>
  );
};

export default LoginHandler;
