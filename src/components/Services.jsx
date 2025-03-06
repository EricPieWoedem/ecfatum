// import React from 'react'
// import { Globe } from './Globe'

// const Services = () => {
//   return (
//       <div className="relative">
//         <Globe />
  
//         <div id="services-section" className="relative z-10">
//       <h1 className="text-4xl text-center mt-20 text-white">Our Services</h1>
//       <p className="text-center max-w-2xl mx-auto mt-5 text-gray-300">
//         We provide cutting-edge solutions...
//       </p>
//       <div className="h-[150vh] flex items-center justify-center">
//         <h2 className="text-3xl text-white">More Content Here</h2>
//       </div>
//     </div>
//       </div>
//   );
// };

// export default Services;

import React from 'react'
import { Globe } from "./Globe";

const ServicesSection = () => {
  return (
    <div id="services-section" className="relative min-h-screen overflow-hidden">
      <Globe />

      <div className="relative z-10 text-center text-white py-32">
        {/* <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-300">
          We provide cutting-edge solutions...
        </p>
        <div className="mt-10">
          <h2 className="text-3xl">More Content Here</h2>
        </div> */}
      </div>
    </div>
  );
};

export default ServicesSection;
