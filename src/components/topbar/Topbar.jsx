import React from 'react'
import './topbar.css'
import Logo from "../../media/logo.png"
const Topbar = () => {
  return (
    <div className='topbar'>
        <div className='logo'>
            <img className='logo_img' src={Logo} alt="logo" />
            <p className='potal_name'>FlipDish Portal</p>
        </div>
    </div>
  )
}

export default Topbar