import { useEffect, useState } from "react"
import React from 'react'
import { Link } from "react-router-dom"
import {styles} from '../styles'
import { navLinks } from '../constants'
import {logo, menu, close } from '../assets'


const Navbar = () => {
  const [active, setActive] = useState('');
  const [toogle, setToogle] = useState('');

  return (
    <nav className={`${styles.paddingX} w-full flex item-center py-5 fixed top-0 z-20 bg-[#0000009f]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}>
{/*           <img src={logo} alt="logo" className="w-12 h-12 object-contain"/> */}
          <p className="text-white text-[22px] font-bold cursor-pointer flex">Kalash Telkar</p>
          </Link>
          
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li key={link.id} className={`${
              active === link.title ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
          

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toogle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px]
          object-contain cursor-pointer"
          onClick={() => setToogle(!toogle)}>
          </img>
          <div className={`${!toogle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl `}>
          <ul className="list-none flex justify-end item-start flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.id} className={`${
            active === link.title ? "text-white" : "text-secondary"
            } font-poppins font-medium text-[16px] cursor-pointer`}
            onClick={() =>{ 
            setToogle(!toogle);
            setActive(link.title);
            }}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}

        </ul>
          </div>
        </div>
      </div>     
    </nav>
  )
}

export default Navbar
