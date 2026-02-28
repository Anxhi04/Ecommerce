import React from "react";
import "./navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
const Navbar= ()=>{
    const [menu , setmenu]= React.useState("shop");
    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="logo" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>setmenu("shop")}><Link to='/'>Shop</Link>{menu==="shop" && <hr />}</li>
                <li onClick={()=>setmenu("men")}><Link to='/mens'>Men</Link>{menu==="men" && <hr />}</li>
                <li onClick={()=>setmenu("women")}><Link to='/womens'>Women</Link>{menu==="women" && <hr />}</li>
                <li onClick={()=>setmenu("kids")}><Link to='/kids'>Kids</Link>{menu==="kids" && <hr />}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="cart" />
                <div className="nav-cart-count">0</div>
                </Link>

            </div>
  
        </div>
    )
}
export default Navbar;