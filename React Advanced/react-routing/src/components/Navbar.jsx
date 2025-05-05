import { useState } from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Items from "../pages/Items";
// export default function Navbar(props) {
//     const { handleState } = props;
//   return (
//     <>
//       <div className="nav">
//         <h1 onClick={() => handleState("home")}>Home</h1>
//         <h1 onClick={() => handleState("items")}>Items</h1>
//         <h1 onClick={() => handleState("about")}>About</h1>
//       </div>
//     </>
//   );
// }

import {Link,Outlet,NavLink} from "react-router-dom"
export default function Navbar() {
  return (<>
    <div className="nav">
      <NavLink style={({isActive})=>isActive?{color:"white"} :undefined}to="/">Home</NavLink>
      <NavLink style={({isActive})=>isActive?{color:"white"} :undefined}to="/items">Items</NavLink>
      <NavLink style={({isActive})=>isActive?{color:"white"} :undefined}to="/about">About</NavLink>
    </div>
    <Outlet/>
  </>) 
}

/**
 * (navData) => {
  if (navData.isActive) {
    return { color: "white" };
  }
  return undefined;
}
Shorthand for {isActive}
 */