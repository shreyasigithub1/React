// import { useState } from "react";
// import Home from "../src/pages/Home";
// import About from "../src/pages/About";
// import Items from "../src/pages/Items";
// import Navbar from "../src/components/Navbar";

// function App() {
//   const [currentPage, setCurrentPage] = useState("home");

//   return (
//     <>
//       <Navbar handleState={setCurrentPage} />
//       {currentPage === "home" && <Home />}
//       {currentPage === "items" && <Items />}
//       {currentPage === "about" && <About />}
//     </>
//   );
// }

// export default App;

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Items from "../src/pages/Items";
import Navbar from "../src/components/Navbar";
import ItemDetails from "./pages/ItemDetails";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement:<ErrorPage/>,
      children: [
        { path: "", element: <Home /> },
        { path: "about", element: <About /> },
        {
          path: "items",

          children: [
            { index: true, element: <Items /> },
            { path: ":itemId", element: <ItemDetails /> },
          ],
        },
      ],
    },
  ]);
  // const routes = createRoutesFromElements(<>
  //<Route path="/" element={<Navbar />} >
  //   <Route index element={<Home />} />
  //   <Route path="/items" element={<Items />} />
  //   <Route path="/about" element={<About/> } />
  //</Route>
  // </>)
  // const router = createBrowserRouter(routes);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
