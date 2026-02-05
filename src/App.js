import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Skeleton from "./components/Skeleton";



const App = () => {
    return (
    <div>
    <Navbar />
    <ProductCard />
    </div>
)
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)