import React from "react";
import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./app.scss";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Product from "./Pages/Product/Product";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
function App() {
   
  const Layout=()=>{
    return (
      <>
     <div className="app">
     <Navbar/>
      <Outlet/>
      <Footer/>
     </div>
      </>
    );
  }

  const router = createBrowserRouter([

    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path: "/Product/:id",
          element: <Product/>
        },
        {
          path: "/Products/:id",
          element: <Products/>
        },
      ]
    }

  ]);
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
