import { createContext, useState, useContext } from "react";
import CartModal from "./components/CartModal";
import data from "./data/itemData";

export const itemContext = createContext();

export function useValue() {
  const value = useContext(itemContext);
  return value;
}

export default function CustomItemProvider({ children }) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  const handleAdd = (prod) => {
    // setTotal(total + price);
    // setItem(item + 1);
    //console.log(prod);
    const index = cart.findIndex((item) => item.id == prod.id);

    if (index == -1) {
      setCart([...cart, { ...prod, qty: 1 }]);
      console.log(cart);
      setTotal(total + prod.price);
    } else {
      cart[index].qty++;
      setTotal(total + cart[index].price);
    }
    setItem(item + 1);
  };

  const handleRemove = (id) => {
    const index = cart.findIndex((item) => item.id == id);
    if (index !== -1) {
      cart[index].qty--;
        setItem(item - 1);
        setTotal(total - cart[index].price);
      if (cart[index].qty == 0) {
        cart.splice(index, 1);
      }
    }
    setCart(cart);
    

    // if (total > 0 && item >= 1) {
    //   setTotal((prevState) => prevState - price);
    //   setItem(item - 1);
    // }
  };

  function handleReset() {
    setItem(0);
    setTotal(0);
  }
  function toggle() {
    if (showCart == false) {
      setShowCart(true);
    } else {
      setShowCart(false);
    }
  }
  function clear() {
    setCart([]);
  }
  return (
    <itemContext.Provider
      value={{
        item,
        total,
        handleAdd,
        handleRemove,
        handleReset,
        toggle,
        cart,
        clear,
      }}
    >
      {showCart ? <CartModal /> : children}
    </itemContext.Provider>
  );
}
