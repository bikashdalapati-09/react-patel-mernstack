import { useState } from "react"

const Navbar = () => {
  const [btnName, setBtnName] = useState("Light")
  return (
  <div>
    <div className="navbar">
        <img src="https://i.pinimg.com/736x/05/38/a2/0538a2166b0ee8ba45e5ffb38aceb8c8.jpg" alt="logo" className="logo"/>
        <ul className="menu-bar">
            <li>Home</li>
            <li>Support</li>
            <li>About</li>
            <li>Cart</li>
            <button className="btnName" onClick={()=>{
              setBtnName(btnName == "Light" ? "Dark" : "Light")
            }}>{btnName}</button>
        </ul>
    </div>

    </div>
)
}

export default Navbar;