
import styles from "../styles/Navbar.module.css";
import React from "react";
import { useValue } from "../itemContext";



function Navbar() {
 //Only destructure what is needed
  // const {item,total} = useContext(itemContext);
  const {item,total,handleReset,toggle} = useValue();
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <div className={styles.buttonsWrapper}>
        <button className={styles.button}  onClick={toggle} >Cart</button>
        &nbsp; &nbsp; &nbsp;
        <button className={styles.button} onClick={handleReset}>Reset</button>

      </div>
    </div>
  );
}

export default Navbar;
