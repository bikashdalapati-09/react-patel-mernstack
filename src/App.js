import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";



const App = () => {
  const [limit, setLimit] = useState(0);
    return (
    <div>
    <Navbar limit={limit} setLimit={setLimit}/>
    <ProductCard limit={limit} />
    </div>
)
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)