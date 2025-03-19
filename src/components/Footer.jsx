import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaYoutube, FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 
import logo from '../assets/logo.png'
import { Link as ScrollLink } from "react-scroll";


const Footer = () => {

  const serviceItems = [
    {label: "System Design", href: "services"},
    {label: "Application Development", href: "services"},
    {label: "Business Analysis", href: "services"},
    {label: "System Security", href: "services"},
    {label: "IT Training & Support", href: "services"},
    {label: "Data Management", href: "services"},
  ]

  return (
    <footer className="bg-gradient-to-br from-yellow-300 to-red-500 text-black pt-12 ">
      <div className="container mx-auto px-15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_150px_1fr_1fr]">

        <div>
          <div className="flex items-center space-x-2">
             <img className="h-15 w-50 bg-black border-none p-1" src={logo} alt="ecfatum-logo" />
          </div>
          <p className="mt-4 w-[70%]">
          We provide cutting-edge solutions tailored to your needs, designed for efficiency and innovation.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div className="">
          <h3 className="font-semibold mb-3">Browse</h3>
          <ul className="space-y-2">
            <li><ScrollLink
              to= "home"
              smooth={true}
              duration={50}
              offset={-70}
              className = 'cursor-pointer hover:underline'
              >
                Home
              </ScrollLink></li>
            <li><Link to="/about_page" className=" hover:underline">About</Link></li>
            <li><ScrollLink
              to= "services"
              smooth={true}
              duration={50}
              offset={-70}
              className = 'cursor-pointer hover:underline'
              >
                Services
              </ScrollLink></li>
            <li><Link to="/contact" className=" hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="font-semibold mb-3">Services</h3>
          <ul className="space-y-2">
          {serviceItems.map((item, index) => (
            <li key={index}>
              <ScrollLink
              to= {item.href}
              smooth={true}
              duration={50}
              offset={-70}
              className = 'text-black text-small cursor-pointer hover:underline'
              >
                {item.label}
              </ScrollLink>

            </li>
          ))}
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div >
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="flex flex-col space-y-2 gap-2">
            <li className="flex items-start space-x-2">
            <FaMapMarkerAlt className="text-black text-4xl"/>
              <ul className="text-sm">
                <li className="mb-2"><a href="https://maps.app.goo.gl/zWKRzBJcxdy5KBk49" target="_blank" rel="noopener noreferrer" className="hover:underline">4 Saxel Street, Tesano, Accra, Ghana</a></li>
                <li><a href="https://maps.app.goo.gl/3b1d2Pd3iJ1Hp9yE6" target="_blank" rel="noopener noreferrer" className="hover:underline">35 Old Court House, Old Court Place, Kensington, London, W8 4PD, United Kingdom</a></li>
              </ul>
            </li>
            <li className="flex items-center space-x-2">
              <a href="mailto:info@ecfatum.com" className="flex items-center gap-2 hover:underline"><FaEnvelope className="text-black text-xl" /> <span>info@ecfatum.com</span></a>
            </li>
            <li className="flex items-center space-x-2">
              <a href="tel:+233 54 7946562" className="flex items-center gap-2 hover:underline"><FaPhone className="text-black text-xl" /> <span>+233 54 7946562</span></a>
            </li>
          </ul>
              <ul className="flex mt-10 gap-5">
                          <li className=" flex flex-col items-center space-x-2 gap-2">
                            <a href="https://www.linkedin.com/company/ecfatum/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-xl text-black transition-all duration-100 hover:scale-120"/></a>
                          </li>
                          <li className=" flex flex-col items-center space-x-2 gap-2">
                            <a href="https://www.facebook.com/share/1KWRft5gUG/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"><FaFacebook className="text-xl text-black transition-all duration-100 hover:scale-120"/></a>
                          </li>
                          <li className=" flex flex-col items-center space-x-2 gap-2">
                            <a href="" target="_blank" rel="noopener noreferrer"><FaYoutube className="text-xl text-black transition-all duration-100 hover:scale-120"/></a>
                          </li>
                          <li className=" flex flex-col items-center space-x-2 gap-2">
                            <a href="" target="_blank" rel="noopener noreferrer"><FaXTwitter className="text-xl text-black transition-all duration-100 hover:scale-120"/></a>
                          </li>
                          <li className="flex flex-col items-center space-x-2 gap-2">
                            <a href="https://www.instagram.com/ecfatum_ltd?igsh=YzFnN3FoNncxZTl2&utm_source=qr" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-xl text-black transition-all duration-100 hover:scale-120"/></a>
                          </li>
                          <li className="flex flex-col items-center space-x-2 gap-2">
                            <a href="" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="text-xl text-black transition-all duration-100 hover:scale-120"/></a>
                          </li>
                          <li className="flex flex-col items-center space-x-2 gap-2">
                            <a href="https://www.tiktok.com/@ecfatumlimited?_t=8otbT2grLLZ&_r=1" target="_blank" rel="noopener noreferrer"><FaTiktok className="text-xl text-black transition-all duration-100 hover:scale-120"/></a>
                          </li>
              </ul>
        </div>
      </div>

      <div className="w-[90%] mx-auto mt-8 py-8 flex items-center justify-center border-t border-black text-center">
        © {new Date().getFullYear()} Ecfatum Ltd. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
