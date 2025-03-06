import React from 'react';

const projects = [
    { id: 1, logo: `${import.meta.env.BASE_URL}JUMP_AFRICA.png`, link: "" },
    { id: 2, logo: `${import.meta.env.BASE_URL}Asset911.png`, link: "https://asset911.com/" },
  ];

export const Projects = () => {
  return (
   <div id='projects' className='py-3 mb-5 bg-black'>
    <h3 className='text-center text-3xl font-semibold py-3 mb-2 bg-gradient-to-r from-yellow-500 to bg-red-500 text-transparent bg-clip-text w-fit mx-auto'>Our Projects</h3>
    <div className='flex justify-center items-center py-3 bg-neutral-800 overflow-hidden space-x-10'>
    {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            <img src={project.logo} alt="Project Logo" className="h-15 w-40 transition-all duration-200 ease-in-out hover:scale-110" />
          </a>
        ))}
    </div>
   </div>
  )
}
