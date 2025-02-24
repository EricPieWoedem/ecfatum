import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaYoutube, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 
import A from '../assets/A.png'

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white pt-12 ">
      <div className="container mx-auto px-15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {/* Column 1: Company Info */}
        <div>
          <div className="flex items-center space-x-2">
             <img className="h-10 w-10" src={A} alt="ecfatum-logo" />
            <span className="text-xl font-semibold">Ecfatum Limited</span>
          </div>
          <p className="text-sm mt-4">
            Brief description of the company goes here. You can describe what your company does.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h3 className="font-medium mb-3">Browse</h3>
          <ul className="space-y-2 font-extralight text-sm">
            <li><Link to="/" className=" hover:text-amber-400">Home</Link></li>
            <li><Link to="/about" className=" hover:text-amber-500">About</Link></li>
            <li><Link to="/services" className=" hover:text-amber-500">Services</Link></li>
            <li><Link to="/contact" className=" hover:text-amber-500">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="font-medium mb-3">Services</h3>
          <ul className="space-y-2 font-extralight text-sm">
            <li>System Design</li>
            <li>Application Development</li>
            <li>Business Analysis</li>
            <li>System Security</li>
            <li>IT Training & Support</li>
            <li>Data Management
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h3 className="font-medium mb-3">Contact</h3>
          <ul className="space-y-2 font-extralight text-sm">
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-amber-500" /> <span>123 Street, City, Country</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-amber-500" /> <span>email@example.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhone className="text-amber-500" /> <span>+123 456 7890</span>
            </li>
          </ul>
              <ul className="flex mt-10 gap-5">
                          <li className=" flex flex-col items-center space-x-2 gap-2">
                            <FaLinkedin className="text-amber-500 " />
                          </li>
                          <li className=" flex flex-col items-center space-x-2 gap-2">
                            <FaFacebook className="text-amber-500 " />
                          </li>
                          <li className=" flex flex-col items-center space-x-2 gap-2">
                            <FaYoutube className="text-amber-500 " />
                          </li>
                          <li className=" flex flex-col items-center space-x-2 gap-2">
                            <FaXTwitter className="text-amber-400" />
                          </li>
                          <li className="flex flex-col items-center space-x-2 gap-2">
                            <FaInstagram className="text-amber-500" />
                          </li>
                        </ul>
        </div>
      </div>

      <div className="mt-8 py-8 flex items-center justify-center border-t border-neutral-700 text-center text-sm font-light">
        © {new Date().getFullYear()} Ecfatum Ltd. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
