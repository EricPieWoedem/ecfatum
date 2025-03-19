import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"; 
import { 
  FaMapMarkerAlt, FaEnvelope, FaPhone, 
  FaYoutube, FaFacebook, FaInstagram, FaLinkedin, 
  FaWhatsapp, FaTiktok
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

  const navigate = useNavigate();
  const [selected, setSelected] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch("https://server-phi-eight-38.vercel.app/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setResponse(data.message);
      setTimeout(() => setResponse(null), 7000);
    } 
    
    catch (error) {
      setResponse("Failed to send message. please try again.");
      setTimeout(() => setResponse(null), 5000);

    }
    
    finally {
      setLoading(false);
      setFormData({ name: "", email: "", service: "", message: "" }); 
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }}  
      exit={{ opacity: 0, y: 30 }}  
      transition={{ duration: 0.6, ease: "easeOut" }} 
      className="animated-bg"
    >
      <div className="relative w-full min-h-screen flex justify-center overflow-hidden">

        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover -z-10"
          src = {`${import.meta.env.BASE_URL}contactvideo.mp4`}
        />

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-10 left-10 bg-neutral-800 text-amber-500 px-4 py-2 rounded-md cursor-pointer transition-all duration-100 hover:bg-neutral-900 hover:text-amber-600"
        >
          Back
        </button>

        {/* Contact Form Section */}
        <div className="flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="mb-5 w-[80%]"
          >
            <h1 className="text-4xl font-bold text-center my-15 w-fit mx-auto">
              Get In Touch With Us
            </h1>
            <ul className="space-y-2 flex justify-evenly">
                <li className=" flex-1 flex items-center space-x-2 h-fit">
                 <div className="w-full flex flex-col items-center gap-2"><FaMapMarkerAlt className="text-amber-500 text-4xl" /> <span className="text-neutral-300">
                    <ul className="flex flex-col text-center gap-2 text-sm">
                      <a href="https://maps.app.goo.gl/zWKRzBJcxdy5KBk49" target="_blank" rel="noopener noreferrer" className="hover:underline"><li>4 Saxel Street, Tesano, Accra, Ghana</li></a>
                        <a href="https://maps.app.goo.gl/3b1d2Pd3iJ1Hp9yE6" target="_blank" rel="noopener noreferrer" className="hover:underline"><li>35 Old Court House, Old Court Place, Kensington, London, W8 4PD, United Kingdom</li></a>
                    </ul></span>
                 </div>
                </li>
                <li className="flex-1 flex items-center space-x-2 h-fit">
                           <a href="mailto:info@ecfatum.com" className="w-full flex flex-col items-center gap-2 hover:underline"><FaEnvelope className="text-amber-500 text-4xl" /> <span className="text-neutral-300">info@ecfatum.com</span></a>
                </li>
                <li className="flex-1 flex items-center space-x-2 h-fit">
                           <a href="tel:+233 54 7946562" className="w-full flex flex-col items-center gap-2 hover:underline"><FaPhone className="text-amber-500 text-4xl" /> <span className="text-neutral-300">+233 54 7946562</span></a>
                </li>
            </ul>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-4/5"
            onSubmit={handleSubmit}
          >
            <h3 className="my-5 text-neutral-300 text-center text-xl">Send us a message</h3>

            <input 
              type="text" 
              name="name" 
              placeholder="Your Name / Name of Organisation" 
              value={formData.name} 
              onChange={handleChange} 
              className="w-full p-3 text-neutral-100 bg-neutral-700 mb-4 focus:outline-none focus:ring-2 focus:ring-neutral-500 placeholder:text-neutral-400" 
              required 
            />

            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full p-3 text-neutral-100 bg-neutral-700 mb-4 focus:outline-none focus:ring-2 focus:ring-neutral-500 placeholder:text-neutral-400" 
              required 
            />

            <select 
              name="service"
              className={`w-full p-3 pl-2 bg-neutral-700 mb-4 focus:outline-none focus:ring-2 focus:ring-neutral-500
                ${selected ? "text-neutral-100" : "text-neutral-400"}`}
              value={formData.service}
              onChange={(e) => {
                setSelected(e.target.value);
                handleChange(e);
              }}
              required
            >
              <option value="" disabled>Select a service you'd like us to offer you</option>
              <option value="system-design">System Design</option>
              <option value="app-development">Application Development</option>
              <option value="business-analysis">Business Analysis</option>
              <option value="system-security">System Security</option>
              <option value="it-training">IT Training & Support</option>
              <option value="data-management">Data Management</option>
              <option value="enquiry">Making an Enquiry</option>
            </select> 

            <textarea 
              name="message" 
              placeholder="Your Message" 
              value={formData.message} 
              onChange={handleChange} 
              className="w-full p-3 text-neutral-100 bg-neutral-700 mb-4 focus:outline-none focus:ring-2 focus:ring-neutral-500 placeholder:text-neutral-400" 
              rows="4" 
              required 
            />

            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-yellow-500 to-red-500 text-white p-3 rounded-md cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-101"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {response && (
              <p className={`text-center mt-4 ${response.includes("Failed") ? "text-red-500" : "text-green-500"}`}>
                {response}
              </p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col justify-center items-center my-10 w-full"
          >
            <h1 className="text-center text-xl my-5">Visit us on social media</h1>
                <ul className="flex mt-2 gap-7">
                  <li className=" flex flex-col items-center space-x-2 gap-2">
                                        <a href="https://www.linkedin.com/company/ecfatum/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-3xl text-amber-500 transition-all duration-100 hover:scale-110" /></a>
                                      </li>
                                      <li className=" flex flex-col items-center space-x-2 gap-2">
                                        <a href="https://www.facebook.com/share/1KWRft5gUG/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"><FaFacebook className="text-3xl text-amber-500 transition-all duration-100 hover:scale-110"/></a>
                                      </li>
                                      <li className=" flex flex-col items-center space-x-2 gap-2">
                                        <a href="" target="_blank" rel="noopener noreferrer"><FaYoutube className="text-3xl text-amber-500 transition-all duration-100 hover:scale-110"/></a>
                                      </li>
                                      <li className=" flex flex-col items-center space-x-2 gap-2">
                                        <a href="" target="_blank" rel="noopener noreferrer"><FaXTwitter className="text-3xl text-amber-500 transition-all duration-100 hover:scale-110"/></a>
                                      </li>
                                      <li className="flex flex-col items-center space-x-2 gap-2">
                                        <a href="https://www.instagram.com/ecfatum_ltd?igsh=YzFnN3FoNncxZTl2&utm_source=qr" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-3xl text-amber-500 transition-all duration-100 hover:scale-110"/></a>
                                      </li>
                                      <li className="flex flex-col items-center space-x-2 gap-2">
                                        <a href="" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="text-3xl text-amber-500 transition-all duration-100 hover:scale-110"/></a>
                                      </li>
                                      <li className="flex flex-col items-center space-x-2 gap-2">
                                      <a href="https://www.tiktok.com/@ecfatumlimited?_t=8otbT2grLLZ&_r=1"  target="_blank" rel="noopener noreferrer"><FaTiktok className="text-3xl text-amber-500 transition-all duration-100 hover:scale-110"/></a>
                                      </li>
                          </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

