// import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import user1 from "../assets/profile-pictures/user1.jpg";
// import user2 from "../assets/profile-pictures/user2.jpg";
// import user3 from "../assets/profile-pictures/user3.jpg";
// import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaYoutube, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// // import { div } from "framer-motion/client";

// export const Contact = () => {
//   const navigate = useNavigate();
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Slideshow images
//   const images = [
//   user1,
//   user2,
//   user3,
//   ];

//   // Auto-slide every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//   <div className="animated-bg">
//     <div className="flex justify-center">
          
//     <button
//       onClick={() => navigate(-1)}
//       className="absolute top-30 left-10 bg-gray-800 text-white px-4 py-2 rounded-md"
//     >
//       ← Back
//     </button>

//     {/* Left Side - Slideshow */}
//     {/* <div className="w-2/5 h-full relative flex flex-col justify-around">
//       <img
//         src={images[currentSlide]}
//         alt="Contact Slide"
//         className="w-full h-1/2 mt-6 rounded-3xl object-cover transition-opacity duration-500"
//       />
//   <div className="flex flex-col justify-center items-center">
//     <h1 className="text-xl text-center font-medium mb-5">Visit us on social media</h1>
//     <ul className="flex w-full">
//                 <li className="flex-1/3 flex flex-col items-center space-x-2 gap-2">
//                   <FaLinkedin className="text-yellow-400 w-7 h-7" />
//                 </li>
//                 <li className="flex-1/3 flex flex-col items-center space-x-2 gap-2">
//                   <FaFacebook className="text-yellow-400 w-7 h-7" />
//                 </li>
//                 <li className="flex-1/3 flex flex-col items-center space-x-2 gap-2">
//                   <FaYoutube className="text-yellow-400 w-7 h-7" />
//                 </li>
//                 <li className="flex-1/3 flex flex-col items-center space-x-2 gap-2">
//                   <FaXTwitter className="text-yellow-400 w-7 h-7" />
//                 </li>
//                 <li className="flex-1/3 flex flex-col items-center space-x-2 gap-2">
//                   <FaInstagram className="text-yellow-400 w-7 h-7" />
//                 </li>
//               </ul>
//               </div>
//     </div> */}

//     {/* Right Side - Contact Form */}
//     <div className="flex flex-col justify-center items-center ">
//     <div className="mb-5">
//     <h1 className="text-3xl font-semibold text-center my-10">Get In Touch With Us</h1>
//     <ul className="space-y-2 flex gap-1">
//                 <li className="flex-1/3 flex flex-col items-center space-x-2 gap-2">
//                 <FaMapMarkerAlt className="text-amber-500 w-7 h-7" />
//                 <span className="text-center">123 Street, City, Country</span>
//                 </li>
//                 <li className="flex-1/3 flex flex-col items-center space-x-2 gap-2">
//                   <FaEnvelope className="text-amber-500 w-7 h-7" /> <span className="text-center">email@example.com</span>
//                 </li>
//                 <li className="flex-1/3 flex flex-col items-center space-x-2 gap-2">
//                   <FaPhone className="text-amber-500 w-7 h-7" /> <span className="text-center">+123 456 7890</span>
//                 </li>
//               </ul>
              
//     </div>
//       {/* <h1 className="text-2xl font-medium mb-6">Get in Touch With Us</h1> */}
//       <form className="w-4/5">
//       <h3 className="my-5">Send us a message</h3>
//         <input
//           type="text"
//           placeholder="Your Name"
//           className="w-full p-3 border-0 bg-neutral-700 mb-4"
//         />
//         <input
//           type="email"
//           placeholder="Your Email"
//           className="w-full p-3 border-0 bg-neutral-700 mb-4"
//         />
//         <textarea
//           placeholder="Your Message"
//           className="w-full p-3 border-0 bg-neutral-700 mb-4"
//           rows="4"
//         />
//         <button className="w-full bg-gradient-to-r from-yellow-500 to-red-500 text-white p-3 rounded-md">
//           Send Message
//         </button>
//       </form>
//       <div className="flex flex-col justify-center items-center my-10  w-full">
//     <h1 className="text-center font-light mb-5">Visit us on social media</h1>
//     <ul className="flex w-1/2">
//                 <li className="flex-1/3 flex flex-col items-center space-x-2 gap-2">
//                   <FaLinkedin className="text-amber-500 w-6  h-6" />
//                 </li>
//                 <li className="flex-1/3 flex flex-col items-center space-x-2 gap-2">
//                   <FaFacebook className="text-amber-500 w-6  h-6" />
//                 </li>
//                 <li className="flex-1/3 flex flex-col items-center space-x-2 gap-2">
//                   <FaYoutube className="text-amber-500 w-6  h-6" />
//                 </li>
//                 <li className="flex-1/3 flex flex-col items-center space-x-2 gap-2">
//                   <FaXTwitter className="text-amber-400 w-6  h-6" />
//                 </li>
//                 <li className="flex-1/3 flex flex-col items-center space-x-2 gap-2">
//                   <FaInstagram className="text-amber-500 w-6  h-6" />
//                 </li>
//               </ul>
//     </div>
//     </div>
    
//   </div></div>
//   );
// };

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import { 
  FaMapMarkerAlt, FaEnvelope, FaPhone, 
  FaYoutube, FaFacebook, FaInstagram, FaLinkedin 
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Contact = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [user1, user2, user3];

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // Start invisible & slightly below
      animate={{ opacity: 1, y: 0 }}  // Fade in & slide up
      exit={{ opacity: 0, y: 30 }}    // Fade out & slide down when leaving
      transition={{ duration: 0.6, ease: "easeOut" }} // Smooth transition
      className="animated-bg"
    >
      <div className="flex justify-center">
        
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-30 left-10 bg-gray-800 text-white px-4 py-2 rounded-md"
        >
          ← Back
        </button>

        {/* Contact Form Section */}
        <div className="flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="mb-5"
          >
            <h1 className="text-3xl font-semibold text-center my-10">
              Get In Touch With Us
            </h1>
            <ul className="space-y-2 flex gap-5">
              <li className="flex flex-col items-center gap-2 text-sm font-light">
                <FaMapMarkerAlt className="text-amber-500 w-7 h-7" />
                <span className="text-center">123 Street, City, Country</span>
              </li>
              <li className="flex flex-col items-center gap-2">
                <FaEnvelope className="text-amber-500 w-7 h-7" />
                <span className="text-center">email@example.com</span>
              </li>
              <li className="flex flex-col items-center gap-2">
                <FaPhone className="text-amber-500 w-7 h-7" />
                <span className="text-center">+123 456 7890</span>
              </li>
            </ul>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-4/5"
          >
            <h3 className="my-5">Send us a message</h3>
            <input type="text" placeholder="Your Name" className="w-full p-3 bg-neutral-700 mb-4" />
            <input type="email" placeholder="Your Email" className="w-full p-3 bg-neutral-700 mb-4" />
            <textarea placeholder="Your Message" className="w-full p-3 bg-neutral-700 mb-4" rows="4" />
            <button className="w-full bg-gradient-to-r from-yellow-500 to-red-500 text-white p-3 rounded-md">
              Send Message
            </button>
          </motion.form>

          {/* Social Media Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col justify-center items-center my-10 w-full"
          >
            <h1 className="text-center font-light mb-5">Visit us on social media</h1>
            <ul className="flex w-1/2 justify-around">
              <li className="flex flex-col items-center gap-2">
                <FaLinkedin className="text-amber-500 w-6 h-6" />
              </li>
              <li className="flex flex-col items-center gap-2">
                <FaFacebook className="text-amber-500 w-6 h-6" />
              </li>
              <li className="flex flex-col items-center gap-2">
                <FaYoutube className="text-amber-500 w-6 h-6" />
              </li>
              <li className="flex flex-col items-center gap-2">
                <FaXTwitter className="text-amber-400 w-6 h-6" />
              </li>
              <li className="flex flex-col items-center gap-2">
                <FaInstagram className="text-amber-500 w-6 h-6" />
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

