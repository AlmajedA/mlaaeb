
import Navbar from "./Navbar";

import Footer from "./Footer";

const Layout = ({children}) => {
    const isSignInPage = children.props.pageName === 'SignIn';
    const isSignUpPage = children.props.pageName === 'SignUp';
    console.log(children.props);
  
    return (
      <div>
        {isSignInPage || isSignUpPage ? null : <Navbar />}
        {children}
        {isSignInPage || isSignUpPage ? null : <Footer />}
      </div>
    );
}
export default Layout;