import React from 'react'
import TopBar from '../Layout/TopBar'
import NavBar from './NavBar'


const Header = () => {
  return (
    <header>
        {/*Topbar*/}
        <TopBar />
        {/*navbar*/}
        <NavBar />
        {/*Cart Drawer*/}
    </header>
  )
}

export default Header;