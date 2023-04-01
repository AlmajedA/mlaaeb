
import Navbar from "./Navbar";
import styles from "../styles/footer.module.css";
import Footer from "./Footer";

const Layout = ({children}) => {
    const isSignInPage = children.props.pageName === 'SignIn';
    const isSignUpPage = children.props.pageName === 'SignUp';
  
    return (
      <div>
        {isSignInPage || isSignUpPage ? null : <Navbar />}
        
        <div className={styles.pageContainer}>
          <div className={styles.contentWrap}>{children}</div>
          
          <Footer/>
        </div>
        
      </div>
    );
}
export default Layout;