import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";
import data from "../data/itemData";

function Items() {
  return (
    <div className={styles.wrapper}>
      {data.map((d) => {
        return <ItemCard name={d.name} price={d.price} key={d.id} id={d.id} />;
      })}
    </div>
  );
}

export default Items;
