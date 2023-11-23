import React, {useState} from 'react'
import "./Navbar.scss"
import { Link } from "react-router-dom";
import { Cart } from '../Cart/Cart';

export const Navbar = () => {
  // It is for cart open
  const [open,setOpen] = useState(false)
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="" />
            MI
          </div>
          <div className="item">
            <span>USD</span>
            MI
          </div>
          <div className="item">
            <Link className ="link" to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/3">Children</Link>
          </div>
        </div>
        <div className="center">
          <Link className ="link" to="/">LAMASTORE</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className ="link" to="/">Homepage</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">About</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Stores</Link>
          </div>
          <div className="icons">
            MI
            MI
            MI
            {/* onclick - if it is TRUE then false if FALSE then true */}
            <div className="cartIcon" onClick={()=>setOpen(!open)} >
              SHOP
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  )
}
