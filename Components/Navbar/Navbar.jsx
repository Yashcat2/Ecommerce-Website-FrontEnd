import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'


import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assests/nav_dropdown.png'


 const Navbar = () => {

    const[menue,setMenue] =useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menueRef = useRef();

    const dropdown_toggle =(e)=>{
      menueRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');
    }



  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <img className='nav-dropdown' src={nav_dropdown} onClick={dropdown_toggle} alt="" />
        <ul ref ={menueRef} className="nav-menue">
            <li onClick={()=>{setMenue("shop")}}><Link to='/'>Shop</Link>{menue==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenue("mens")}}><Link to='/mens'>Men</Link>{menue==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenue("womens")}}><Link to='/womens'>Women</Link>{menue==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenue("kids")}}><Link to='/kids'>Kids</Link>{menue==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to="/login"><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>

    </div>
  )
}
export default Navbar
