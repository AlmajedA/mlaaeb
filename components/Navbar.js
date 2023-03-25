import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

function Navbar() {

  const goLogin = () => {
    window.location.href = '/registration/login';
  };

  const goSignUp = () => {
    window.location.href = '/registration/signup';
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <Link href="/" className={styles.logo}>
            <Image src="/../public/LOGO.jpeg" alt="Logo" width={90} height={50} />
        </Link>
      </div>
      <div className={styles.navbarMenu}>
        <ul className={styles.navbarLinks}>
          <li className={styles.navbarLinkItem}>
            <Link href="/" className={styles.navbarLink}>
              Home
            </Link>
          </li>
          <li className={styles.navbarLinkItem}>
            <Link href="/about" className={styles.navbarLink}>
              About
            </Link>
          </li>
          <li className={styles.navbarLinkItem}>
            <Link href="/contact" className={styles.navbarLink}>
              Contact
            </Link>
          </li>
        </ul>
        <div className={styles.navbarAction}>
          <button className={styles.navbarButton} onClick={goLogin} >Log In</button>
          <button className={styles.navbarButton} onClick={goSignUp} >Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
