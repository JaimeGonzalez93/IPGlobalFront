import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/Logo.png'

const Header = () => {
  return (
    <div className="px-3 w-full flex col justify-center items-center mb-12 mt-6">
      <Link  to={'/'}>
        <img src={Logo} alt="Logo" className="h-24 bg-"></img>
      </Link>
    </div>
  )
}

export default Header