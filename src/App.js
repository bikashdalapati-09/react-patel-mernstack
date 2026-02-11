import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Home from "./components/Home";
import About from "./components/About";
import Filter from "./components/Filter";
import Support from "./components/Support";
import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import { Provider } from "react-redux";
import appStore from "./store/store"
import Footer from "./components/Footer";

const App = () => {
  return (
    <Provider store={appStore}>
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductCard />,
      },
      {
        path: "/home",
        element: <ProductCard />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/filter",
        element: <Filter />,
      },
      {
        path: "/product/:productId",
        element: <ProductDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
