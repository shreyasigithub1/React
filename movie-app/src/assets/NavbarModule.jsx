//the Navbar jsx component which is using Navabar.module.css

import styles from "./Navbar.module.css";

import React from "react";


 class Navbar extends React.Component {
  render() {
    return (
      <>
        <div className={styles.nav}>
          <div className={styles.title}>Movie-App</div>
          <div className={styles.cartIconContainer}>
            <img alt="Cart Icon" className={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/128/891/891462.png"/>
            <span className={styles.cartCount}>3</span>
          </div>
        </div>
      </>
    );
  }
} 
  export default Navbar;