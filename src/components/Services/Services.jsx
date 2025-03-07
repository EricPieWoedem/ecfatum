import React, { useState } from "react";
import Modal from "react-modal";
import { FaCogs, FaLaptopCode, FaChartLine, FaShieldAlt, FaChalkboardTeacher, FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Services.css";

Modal.setAppElement("#root");

const services = [
  {
    title: "System Design",
    detail: "ERP, E-commerce, and Government solution designs to streamline operations.",
    icon: <FaCogs />,
    LearnMoreTitle:"System Design for ERP, E-commerce, and Government Solutions",
    LearnMoreTitle1:"Learn More",
    moreInfo: [
            "Ecfatum provides comprehensive system design tailored to meet the unique needs of enterprises, online businesses, and government institutions.",
            " For ERP systems, we streamline core business processes, improve resource planning, and optimize workflows. ",
            "Our e-commerce solutions are designed with secure payment gateways, intuitive user interfaces, and scalability in mind. ",
            "Government solutions focus on transparency, compliance, and user-friendly platforms that improve citizen engagement.",
    ],
    image1: `${import.meta.env.BASE_URL}erp6.webp`,
    image2: `${import.meta.env.BASE_URL}erp5.webp`,
    images: [`${import.meta.env.BASE_URL}pic.jpg`, `${import.meta.env.BASE_URL}er (1).png`, `${import.meta.env.BASE_URL}er (2).png`],
    gallery1: `${import.meta.env.BASE_URL}erp3.png`,
    galleryInfo1:"An enterprise resource planning (ERP) software is an enterprise-wide application software package that integrates all necessary business functions into a single system with a common database. Enterprise resource planning (ERP) systems integrate and streamline the business processes of an organization across departmental and geographical borders.",
    gallery2: `${import.meta.env.BASE_URL}bg8.jpg`,
    galleryInfo2:"A system design for ERP, e-commerce, and government solutions should prioritize modularity, scalability, security, and integration capabilities, allowing for seamless data flow between different systems while catering to the unique needs of each domain, including robust user access controls, compliance with regulations, and streamlined citizen interaction for government functionalities. ",
    importance: [
        "Optimizes workflows for better resource management.",
        "Provides accessible platforms enhancing citizen and customer engagement.",
        "Ensures regulatory compliance and secure operations.",
        "Offers scalable solutions for growing organizational needs."
    ],
    benefit:[
        "Streamline operations to reduce costs and increase productivity.",
        "User-friendly systems that improve adoption and satisfaction.",
        "Easily scalable to accommodate future growth.",
        "Meet industry-specific regulations effortlessly."
    ]
    
  },
  {
    title: "Application Development",
    detail: "Quality assurance and seamless deployment for your applications.",
    icon: <FaLaptopCode />,
    LearnMoreTitle:"Application Development, Quality Assurance, and Deployment",
    moreInfo: [
            "At Ecfatum, we offer end-to-end application development services, from initial concept to post-launch support. ",
            " Our development process includes user-centered design, agile methodologies, and cutting-edge technologies.  ",
            "Quality assurance ensures that applications are bug-free, secure, and meet client specifications through rigorous testing protocols. ",
            "Deployment is handled with precision, utilizing continuous integration and deployment (CI/CD) pipelines for smooth rollouts and updates.",
    ],
    image1: `${import.meta.env.BASE_URL}appdev2.jpeg`,
    image2: `${import.meta.env.BASE_URL}appdev1.jpg`,
    images: [`${import.meta.env.BASE_URL}appdev.jpg`, `${import.meta.env.BASE_URL}eco.webp`, `${import.meta.env.BASE_URL}icon.jpg`, `${import.meta.env.BASE_URL}appdev1.jpg`, `${import.meta.env.BASE_URL}appdev2.jpeg`,`${import.meta.env.BASE_URL}appdev3.jpg`],
    gallery: `${import.meta.env.BASE_URL}bg8.jpg`,
    importance: [
        "Accelerates digital transformation",
        "Reduces downtime through rigorous quality checks.",
        "Enhances user satisfaction with reliable apps.",
        "Keeps applications up-to-date and secure."
    ],
    benefit:[
        " Faster Time-to-Market: Agile processes ensure quick delivery.",
        " Tailored Solutions: Built to meet your business needs.",
        "Robust Support: Ongoing assistance post-deployment.",
        "User-Friendly Designs: Increase engagement and satisfaction."
    ]
  },
  {
    title: "Business Analysis",
    detail: "Analyzing business problems and engineering effective solutions.",
    icon: <FaChartLine />,
    LearnMoreTitle:" Business Problems Analysis and Solution Engineering",
    moreInfo: [
            "At Ecfatum, we analyze complex business problems using data-driven methodologies to identify root causes and engineer effective solutions.",
            "Our process involves stakeholder consultations, process mapping, and technological assessments.",
            "We craft solutions that enhance productivity, reduce costs, and align with organizational goals.",
    ],
    image1: `${import.meta.env.BASE_URL}bus4.webp`,
    image2: `${import.meta.env.BASE_URL}bus5.webp`,
    images: [`${import.meta.env.BASE_URL}bus1.jpg`, `${import.meta.env.BASE_URL}bus2.jpg`, `${import.meta.env.BASE_URL}bus3.jpg`],
    gallery: `${import.meta.env.BASE_URL}bg9.jpg`,
    importance: [
        "Identifies inefficiencies and cost-saving opportunities.",
        "Facilitates data-driven decisions.",
        "Aligns technology with business objectives.",
        "Improves operational productivity."
    ],
    benefit:[
        "Customized Solutions: Target specific challenges.",
        "Cost Efficiency: Reduce waste and unnecessary expenses.",
        "Measurable Results: Track and evaluate improvements.",
        "Collaborative Approach: Engage stakeholders throughout the process."
    ]
  },
  {
    title: "System Security",
    detail: "Conducting technical audits to secure your systems.",
    icon: <FaShieldAlt />,
    LearnMoreTitle:"System Security and Technical Audits",
    moreInfo: [
            "We offer comprehensive system security services to safeguard your digital assets. ",
            "Our technical audits identify vulnerabilities, assess compliance with industry standards, and provide actionable recommendations. ",
            "Services include penetration testing, vulnerability assessments, and continuous monitoring to detect and prevent cyber threats.",
    ],
    image1: `${import.meta.env.BASE_URL}sec5.jpg`,
    image2: `${import.meta.env.BASE_URL}sec4.jpg`,
    images: [`${import.meta.env.BASE_URL}sec1.webp`, `${import.meta.env.BASE_URL}sec2.jpg`, `${import.meta.env.BASE_URL}sec3.jpg`],
    gallery: `${import.meta.env.BASE_URL}bg8.jpg`,
    importance: [
        "Protects against cyber-attacks and data breaches.",
        "Ensures compliance with global security standards.",
        "Identifies and mitigates potential risks.",
        "Builds stakeholder and customer trust."
    ],
    benefit:[
        " Proactive Security Measures: Detect threats before they arise.",
        " Detailed Audit Reports: Gain actionable recommendations.",
        "Continuous Monitoring: Maintain security over time.",
        "Improved System Reliability: Reduce operational disruptions."
    ]
  },
  {
    title: "IT Training & Support",
    detail: "Professional training and round-the-clock IT support.",
    icon: <FaChalkboardTeacher />,
    LearnMoreTitle:"Professional training and round-the-clock IT support.",
    moreInfo: [
            "Ecfatum offers tailored IT training programs to empower your workforce with the necessary technical skills.",
            " Our training covers various IT tools, platforms, and best practices, delivered through virtual and on-site sessions.",
            " Ongoing support ensures your team can handle technical challenges effectively, minimizing downtime and maximizing productivity.",
    ],
    image1: `${import.meta.env.BASE_URL}train3.jpg`,
    image2: `${import.meta.env.BASE_URL}train2.jpg`,
    images: [`${import.meta.env.BASE_URL}train2.jpg`, `${import.meta.env.BASE_URL}train3.jpg`, `${import.meta.env.BASE_URL}train4.jpg`],
    gallery: `${import.meta.env.BASE_URL}bg8.jpg`,
    importance: [
        "Reduces downtime with skilled staff.",
        "Improves technology adoption rates.",
        "Keeps teams updated with evolving tech trends.",
        "Enhances overall organizational efficiency."
    ],
    benefit:[
        " Flexible Learning: On-site or virtual training options.",
        "Continuous Support: Quick response to technical issues.",
        "Boosted Confidence: Empower employees to manage systems effectively.",
        "Practical Resources: Access to comprehensive learning materials."
    ]
  },
  {
    title: "Data Management",
    detail: "Efficient systems for managing and recording data.",
    icon: <FaDatabase />,
    LearnMoreTitle:"Efficient systems for managing and recording data.",
    moreInfo: [
            "Our data and record management solutions ensure the secure storage, easy retrieval, and efficient management of organizational data. ",
            "We design systems that automate data backup, implement access controls, and comply with data protection regulations.",
            "These solutions reduce data loss risks and improve data-driven decision-making.",
    ],
    image1: `${import.meta.env.BASE_URL}data2.webp`,
    image2:  `${import.meta.env.BASE_URL}data3.jpg`,
    images: [`${import.meta.env.BASE_URL}data1.webp`, `${import.meta.env.BASE_URL}data2.webp`, `${import.meta.env.BASE_URL}data3.jpg`],
    gallery: `${import.meta.env.BASE_URL}bg8.jpg`,
    importance: [
        "Ensures data accuracy and quick retrieval.",
        "Reduces risks of data loss and unauthorized access.",
        "Complies with data protection laws.",
        "Enhances operational efficiency."
    ],
    benefit:[
        "Automated Processes: Reduce manual errors and save time.",
        " Secure Data Storage: Protect sensitive information.",
        "Real-Time Insights: Make data-driven decisions.",
        "Cost-Effective Solutions: Lower data management expenses."
    ]
  }
];

const Services = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    setModalIsOpen(true);
  };

  const closeModal = () => setModalIsOpen(false);

  return (
    <section id="services" className="relative w-full min-h-screen flex flex-col justify-center items-center text-white overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover -z-10"
        src={`${import.meta.env.BASE_URL}video1.mp4`}
      />

      <h1 className="text-5xl font-bold mt-15">Our Services</h1>
      <p className="text-2xl w-[50%] text-center mt-3">Explore our cutting-edge solutions tailored to your needs, designed for efficiency and innovation.</p>
      <div className="services flex flex-wrap justify-center gap-6 px-4 w-full max-w-7xl my-15">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="card max-w-xs w-full"
            initial={{ opacity: 0, y: 50 }}
            transition={{ delay: index * 0.1, duration: 0.2 }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: 0 }}
        
          >
            <i className="mx-auto text-amber-500 text-4xl">{service.icon}</i>
            <div className="title text-xl bg-gradient-to-r from-yellow-500 to-red-500 text-transparent bg-clip-text">{service.title}</div>
            <div className="detail text-neutral-300">{service.detail}</div>
            <button onClick={() => openModal(service)} className="cursor-pointer bg-neutral-800 w-fit mx-auto px-4 py-2 rounded-md text-amber-500 transition-all duration-100 hover hover:text-amber-600">Learn More</button>
          </motion.div>
        ))}
      </div>

      {selectedService && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="modal-content"
          overlayClassName="modal-overlay"
        >
           <h2 className="modal-title bg-gradient-to-r from-yellow-500 to-red-500 text-transparent bg-clip-text w-fit mx-auto font-semibold">{selectedService.title}</h2>
          <div className="modal-container">
            <div className="modal-info">
              <h3 className="modal-info-title text-2xl text-amber-500">{selectedService.LearnMoreTitle}</h3>
              <ul className="modal-detail">           
                {selectedService.moreInfo.map((point, i) => (
                <p key={i}>{point}</p>
                ))}
              </ul>  
                
            </div>
            <div class="slideshow">
                  <div class="slides">
                        {selectedService.images.map((img, i) => (
                        <img key={i} src={img} alt={`Slide ${i + 1}`} />
                        ))}
                   </div>
            </div>
            <div className="gallery-show">
                <div className="gallery bg-cover bg-center rounded-2xl p-4" style={{ backgroundImage: `url(${selectedService.image1})` }}>
                   <div className="gallery-image"></div>
                </div>
                <div className="gallery  bg-cover bg-center rounded-2xl p-4 " style={{ backgroundImage: `url(${selectedService.image2})`,backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>
                    <div className="gallery-image"></div>
                </div>
             </div>
             <div className="importance-benefit-display">
                <div className="importance-benefit-title text-amber-500">{selectedService.title}</div>
                <div className="importance-benefit">
                    <div className="importance">
                        <ul className="list-disc list-inside space-y-1">
                            <h2 className="text-amber-500">Importance</h2>
                            {selectedService.importance.map((point, i) => (
                            <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="benefit">
                    <ul className="list-disc list-inside space-y-1">
                            <h2 className="text-amber-500">Benefit</h2>
                            {selectedService.benefit.map((point, i) => (
                            <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
             </div>
          </div>
          <button onClick={closeModal} className="modal-close">Close</button>
        </Modal>
      )}
    </section>
  );
};

export default Services;
