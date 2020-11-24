import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={styles.app}>
      <Navbar />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
