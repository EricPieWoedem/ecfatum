import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Menu, X } from 'lucide-react';
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion

export const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    const navItems = [
        { label: "About Us", href: "about" },
        { label: "Solutions", href: "services" },
        { label: "Partners", href: "partners" },
        { label: "Projects", href: "projects" },
    ];

    return (
        <nav className="sticky top-0 z-50 py-5 backdrop-blur-xl border-b border-neutral-800">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center justify-center gap-0.5 flex-shrink-0">
                        <img className="h-8 w-24 5 md:h-12 md:w-45" src={logo} alt="ecfatum-logo" />
                    </Link>

                    <ul className="hidden lg:flex ml-14 space-x-12 text-base">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <ScrollLink
                                    to={item.href}
                                    smooth={true}
                                    duration={50}
                                    offset={-70}
                                    className="text-lg cursor-pointer transition-all duration-100 ease-in-out hover:bg-gradient-to-r from-yellow-500 to-red-500 hover:text-transparent hover:bg-clip-text hover:font-semibold"
                                >
                                    {item.label}
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
             
                    {/* Contact Button */}
                    <div className="hidden lg:flex justify-center lg:items-center">
                        <Link to="/contact" >
                            <button className="flex justify-center items-center rounded-md bg-gradient-to-r from-yellow-500 to-red-500 p-0.5 transition-all duration-100 hover:shadow-[0_0_10px_rgba(249,115,22,0.1)] hover:shadow-orange-500 cursor-pointer">
                                <div className="rounded-md bg-neutral-900 h-full w-full flex justify-center items-center px-5 py-2 transition-all duration-100">
                                    Get In Touch
                                </div>
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Animated Mobile Menu */}
                <AnimatePresence>
                    {mobileDrawerOpen && (
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.1, ease: "easeInOut" }}
                            className="fixed right-0 z-50 top-17.5 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden"
                        >
                            <ul className='flex flex-col items-center'>
                                {navItems.map((item, index) => (
                                    <li key={index} className="py-4">
                                        <ScrollLink 
                                            to={item.href} 
                                            smooth={true} 
                                            duration={50} 
                                            offset={-50} 
                                            className="cursor-pointer"
                                            onClick={() => setMobileDrawerOpen(false)} 
                                        >
                                            {item.label}
                                        </ScrollLink>
                                    </li>
                                ))}
                            </ul>

                            {/* Contact Button in Mobile Menu */}
                            <div className="flex space-x-6 overflow-visible mt-4 mb-8">
                                <Link to="/contact" onClick={() => setMobileDrawerOpen(false)}>
                                    <button className="flex justify-center items-center rounded-md bg-gradient-to-r from-yellow-500 to-red-500 p-0.5 transition-all duration-100 hover:shadow-[0_0_10px_rgba(249,115,22,0.1)] hover:shadow-orange-500">
                                        <div className="rounded-md bg-neutral-900 h-full w-full flex justify-center items-center px-5 py-2 transition-all duration-100">
                                            Get In Touch
                                        </div>
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};
