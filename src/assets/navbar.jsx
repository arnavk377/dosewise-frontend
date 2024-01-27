import React, { useState } from 'react';
import "./navbar.css"
import dosewiseLogo from './dosewiselogo.png'

const Navbar = () => {

  const [burger_class, setBurgerClass] = useState('burger-bar unclicked')
  const [menu_class, setMenuClass] = useState('menu hidden')
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass('burger-bar clicked')
      setMenuClass('menu shown')
    } else {
      setBurgerClass('burger-bar unclicked')
      setMenuClass('menu hidden')
    }
    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <div style={{width: '100%', height: '100vh'}}>
      <nav>
        <img src={dosewiseLogo}></img>
        <h1>Dosewise</h1>
        <div className="burger-menu">
          <div className={burger_class} onClick={updateMenu}></div>
          <div className={burger_class} onClick={updateMenu}></div>
          <div className={burger_class} onClick={updateMenu}></div>
        </div>
      </nav>

      <div className={menu_class}> </div>
    </div>
  )
}

export default Navbar