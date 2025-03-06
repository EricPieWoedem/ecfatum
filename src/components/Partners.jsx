import React, {useState} from 'react';
import { motion } from "framer-motion";

const partners = [
  { id: 1, logo: `${import.meta.env.BASE_URL}NIC.png`, link: "https://nicgh.org" },
  { id: 2, logo: `${import.meta.env.BASE_URL}ORC.png`, link: "https://orc.gov.gh/" },
  { id: 3, logo: `${import.meta.env.BASE_URL}SLICOM.png`, link: "https://slicom.org.sl/" },
  { id: 4, logo: `${import.meta.env.BASE_URL}BROWN_CARD.png`, link: "https://browncard.org/" },
];

export const Partners = () => {
  // const [speed, setSpeed] = useState(100);

  return (
 <div id='partners' className='bg-black py-3'>  
    <h3 className='text-center text-3xl font-semibold py-3 mb-2 bg-gradient-to-r from-yellow-500 to bg-red-500 text-transparent bg-clip-text w-fit mx-auto'>Our Global Partners</h3>
    <div className=" bg-neutral-800 overflow-hidden py-1">
      <motion.div
        className="w-[90%] flex bg-transparent justify-between"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 100,
        }}

        // whileHover={() => setSpeed(300)} 
        // onMouseLeave={() => setSpeed(100)} 


      >
        {partners.map((partner) => (
          <a
            key={partner.id}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            <img src={partner.logo} alt="Partner Logo" className="h-20 w-50 transition-all duration-200 ease-in-out hover:scale-110" />
          </a>
        ))}
      </motion.div>
    </div>
 </div>
  );
};
