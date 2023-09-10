import React, { Suspense, lazy } from "react";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
import "./app.scss";
// import Home from "./Pages/Home/Home";
// import Products from "./Pages/Products/Products";
// import Product from "./Pages/Product/Product";
// import Navbar from "./Component/Navbar/Navbar";
// import Footer from "./Component/Footer/Footer";

const Home = lazy(() => import("./Pages/Home/Home"));
const Products = lazy(() => import("./Pages/Products/Products"));
const Product = lazy(() => import("./Pages/Product/Product"));
const Navbar = lazy(() => import("./Component/Navbar/Navbar"));
const Footer = lazy(() => import("./Component/Navbar/Navbar"));
function App() {
  const Layout = () => {
    return (
      <>
        <div className="app">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Product/:id",
          element: <Product />,
        },
        {
          path: "/Products/:id",
          element: <Products />,
        },
      ],
    },
  ]);
  return (
    <>
      <Suspense fallback={<BeatLoader color="#36d7b7" style={{display:"flex",justifyContent:"center",alignItems:'center'}} />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
