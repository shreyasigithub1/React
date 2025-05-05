import "./App.css";
import { useState } from "react";
import Items from "./components/Items";
import Navbar from "./components/Navbar";

import { itemContext } from "./itemContext";
import CustomItemProvider from "./itemContext"

function App() {
  
  return (
    <CustomItemProvider>
      <div className="App">
      <h2>Shopping Cart</h2>
      <Navbar />
      <Items />
    </div>
    </CustomItemProvider>
   
  );
}
export default App;
