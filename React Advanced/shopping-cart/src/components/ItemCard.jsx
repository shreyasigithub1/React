import React, { useContext } from "react";
import styles from "../styles/ItemCard.module.css";

import { itemContext } from "../itemContext";
import { useValue } from "../itemContext";
function ItemCard({ id,name, price }) {
  //const value = useValue();
  const { handleAdd, handleRemove } = useValue();


  // const handleAdd = () => {
  //   value.total = value.total + price;
  //   value.setTotal(value.total);
  //   value.setItem(value.item + 1);
  // };

  // const handleRemove = () => {
  //   //value.total = value.total-price;
  //   // value.setTotal(value.total);
  //   if (value.total > 0 && value.item >= 1) {
  //     value.setTotal((prevState) => prevState - price);
  //     value.setItem(value.item - 1);
  //   }
  // };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd({id,name,price})}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove(id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
