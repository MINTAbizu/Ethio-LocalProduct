import React, { useState } from 'react'
import '../Header/hedear.css'
import { useStateValue } from '../Staateprovider/Stateprovider'
import { Link } from 'react-router-dom'
// import { FaShoppingCart } from 'react-icons/fa'

function Header() {
  const [{ basket }] = useStateValue()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuToggle = () => setMenuOpen((prev) => !prev)
  const handleNavClick = () => setMenuOpen(false)

  return (
    <div className="header-wrapper">
      <div className="header-container">
        <div className="header-left">
          <Link to={'/'} className="logo">
            <h1>EthioShop</h1>
          </Link>
        </div>

        <div className="header-center">
          <button className="menu-icon" onClick={handleMenuToggle} aria-label="Toggle menu">
            <span className={menuOpen ? 'menu-bar open' : 'menu-bar'}></span>
            <span className={menuOpen ? 'menu-bar open' : 'menu-bar'}></span>
            <span className={menuOpen ? 'menu-bar open' : 'menu-bar'}></span>
          </button>
          <nav className={menuOpen ? 'header-nav open' : 'header-nav'}>
            <ul onClick={handleNavClick}>
            <li><Link to={'/Jacket'}>Shoose</Link></li>
              <li><Link to={'/Jacket'}>Jackets & Coats</Link></li>
              <li><Link to={'/jeans'}>Jeans</Link></li>
              <li><Link to={'/dress'}>Dresses</Link></li>
              <li><Link to={'/suits'}>Suits</Link></li>
              <li><Link to={'/Tops'}>Tops</Link></li>
              <li><Link to={'/shirts'}>Shirts</Link></li>
              <li><Link to={'/sweatshirts'}>Sweatshirts & Hoodies</Link></li>
              <li><Link to={'/Login'}>  Signup</Link></li>
            </ul>
          </nav>
        </div>

        <div className="header-right">
          <Link to={'/Checkout'} className="cart-icon">
            {/* <FaShoppingCart /> */}
            <span className="cart-count">{basket.length}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
