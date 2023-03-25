import Head from "next/head";
import Navbar from "./Navbar";
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>My App</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
