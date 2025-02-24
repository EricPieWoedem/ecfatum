import React from 'react'
import { useState } from 'react'
import A from '../assets/A.png'
import { navItems } from '../constants'
import { Menu, X } from 'lucide-react'
import { Link } from "react-router-dom";

export const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };
  
    return (
      <nav className="sticky top-0 z-50 py-5 backdrop-blur-lg border-b border-neutral-800">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-center gap-0.5 flex-shrink-0">
              <img className="h-10 w-10" src={A} alt="ecfatum-logo" />
              <span className="text-xl pt-0.5">Ecfatum</span>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12 text-base">
              {navItems.map((items, index) => (
                <li key={index}><a href={items.href} className='transition-all duration-100 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-red-500 hover:py-0.5 hover:px-4 hover:rounded-full '>{items.label}</a></li>
              ))}
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
            <Link to="/contact"><button className='flex justify-center items-center mt-4 rounded-md bg-gradient-to-r from-yellow-500 to-red-500 p-0.5 transition-all duration-100 hover:shadow-[0_0_10px_rgba(249,115,22,0.1)] hover:shadow-orange-500'><Link to="/contact" className='rounded-md bg-neutral-900 h-full w-full flex justify-center items-center px-5 py-2 transition-all duration-100'>Get In Touch</Link></button> </Link>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end ">
                <button onClick={toggleNavbar} >
                    {mobileDrawerOpen ? <X/> : <Menu/>}
                </button>
            </div>
          </div>
           {mobileDrawerOpen && (
            <div className="fixed right-0 z-50 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                <ul >
              {navItems.map((items, index) => (
                <li key={index} className='py-4'><a href={items.href}>{items.label}</a></li>
              ))}
            </ul>
            <div className="flex space-x-6 overflow-visible">
            <Link to="/contact"><div className='flex justify-center items-center mt-4 rounded-md bg-gradient-to-r from-yellow-500 to-red-500 p-0.5 transition-all duration-100 hover:shadow-[0_0_10px_rgba(249,115,22,0.1)] hover:shadow-orange-500'><Link to="/contact" className='rounded-md bg-neutral-900 h-full w-full flex justify-center items-center px-5 py-2 transition-all duration-100'>Get In Touch</Link></div> </Link>
            </div>
            </div>
          )} 
        </div>
      </nav>
    );
  }
  
