// import React, { useEffect } from 'react';

// import AOS from 'aos';
// import 'aos/dist/aos.css';

// export const PROJECTS = [
//     {
//         title: "Airbnb Clone",
//         image: "/images/Airbnb-Frontend.PNG",
//         description: "A fully responsive Airbnb-inspired web application featuring user authentication, property listings, booking functionality, and user-friendly interfaces.",
//         technologies: ["MongoDB", "React", "Node.js", "Express", "Tailwind CSS"],
//         url: "https://airbnb-frontend-blue-psi.vercel.app/"
//     },
   
//     {
//       "title": "SnapStyle",
//       image: "/images/SnapStyle.PNG",
//       "url": "https://snap-style-frontend.vercel.app/",
//       "description": "A feature-rich e-commerce platform with an integrated admin panel. Users can browse products, and the admin can manage inventory and orders. Features include Cloudinary for image hosting and Toastify for notifications.",
//       "technologies": ["MongoDB", "Express", "React", "Node.js", "Cloudinary", "Toastify"]
//     },
//     {
//       "title": "Social Media Feed",
//       image: "/images/socialmediafeed.png",
//       "url": "https://social-media-project-frontend-y2zz.vercel.app/",
//       "description": "Built a full-stack social media feed app like Instagram using React.js,Node.js, and MongoDB. Features include user authentication, image uploads, likes, comments, and post management.",
//       "technologies": ["MongoDB", "Express", "React", "Node.js"]
//     },
//     {
//       "title": "Gold Rate Calculator",
//       image: "/images/goldratecalci.png",
//       "url": "https://voluble-cranachan-9883e5.netlify.app/",
//       "description": "Developed a gold rate calculator using React.js, Node.js, and MongoDB to provide real-time gold price calculations. Users can view, input, and calculate rates based on weight and purity.",
//       "technologies": ["MongoDB", "Express", "React", "Node.js"]
//     }
//   ]
  

// const Projects = () => {

//     useEffect(() => {
//         AOS.init({ duration: 1000 }); 
//     }, []);

//     return(
//         <section >
//           <h2 className="mb-8 text-center text-4xl font-bold">Projects</h2>
//           <div className="container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             {PROJECTS.map((project, index) => (
//               <div
//                 key={index}
//                 className="rounded-lg p-4 shadow-lg transform transition duration-500 hover:scale-105"
//                 data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
//               >
//                 <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="mb-4 h-40 w-full rounded object-cover"
//                   />
//                 </a>
//                 <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
//                 <p className="mb-4 text-gray-400">{project.description}</p>
//                 <div className="flex flex-wrap gap-2">
//                   {project.technologies.map((item, index) => (
//                     <span
//                       key={index}
//                       className="rounded bg-gray-700 px-2 py-1 text-sm text-gray-200"
//                     >
//                       {item}
//                     </span>
//                   ))}
//                 </div>
//                 <a
//                   href={project.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="mt-4 inline-block rounded bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-blue-500"
//                 >
//                   View Project
//                 </a>
//               </div>
//             ))}
//           </div>
//         </section>
//       );
//     };
    
// export default Projects;
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const PROJECTS = [
  {
    title: "Airbnb Clone",
    image: "/images/Airbnb-Frontend.PNG",
    description: "A fully responsive Airbnb-inspired web application featuring user authentication, property listings, booking functionality, and user-friendly interfaces.",
    technologies: ["MongoDB", "React", "Node.js", "Express", "Tailwind CSS"],
    url: "https://airbnb-frontend-blue-psi.vercel.app/",
    frontend: "https://github.com/B-VIGNESH18/Airbnb-frontend",
    backend: "https://github.com/B-VIGNESH18/Airbnb-backend"
  },
  {
    title: "SnapStyle",
    image: "/images/SnapStyle.PNG",
    url: "https://snap-style-frontend.vercel.app/",
    description: "A feature-rich e-commerce platform with an integrated admin panel. Users can browse products, and the admin can manage inventory and orders. Features include Cloudinary for image hosting and Toastify for notifications.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Cloudinary", "Toastify"],
    frontend: "https://github.com/B-VIGNESH18/SnapStyle-frontend",
    backend: "https://github.com/B-VIGNESH18/SnapStyle-backend"
  },
  {
    title: "Social Media Feed",
    image: "/images/socialmediafeed.png",
    url: "https://social-media-project-frontend-y2zz.vercel.app/",
    description: "Built a full-stack social media feed app like Instagram using React.js, Node.js, and MongoDB. Features include user authentication, image uploads, likes, comments, and post management.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    frontend: "https://github.com/B-VIGNESH18/social-media-project-frontend",
    backend: "https://github.com/B-VIGNESH18/social-media-project-backend"
  },
  {
    title: "Gold Rate Calculator",
    image: "/images/goldratecalci.png",
    url: "https://voluble-cranachan-9883e5.netlify.app/",
    description: "Developed a gold rate calculator using React.js, Node.js, and MongoDB to provide real-time gold price calculations. Users can view, input, and calculate rates based on weight and purity.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    frontend: "https://github.com/B-VIGNESH18/Gold-rate-calculator-frontend",
    backend: "https://github.com/B-VIGNESH18/Gold-rate-calculator-backend"
  }
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section>
      <h2 className="mb-8 text-center text-4xl font-bold">Projects</h2>
      <div className="container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="rounded-lg p-4 shadow-lg transform transition duration-500 hover:scale-105"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
              <img
                src={project.image}
                alt={project.title}
                className="mb-4 h-40 w-full rounded object-cover"
              />
            </a>
            <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
            <p className="mb-4 text-gray-400">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((item, index) => (
                <span
                  key={index}
                  className="rounded bg-gray-700 px-2 py-1 text-sm text-gray-200"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-blue-500"
              >
                🔗 Live Demo
              </a>
              <a
                href={project.frontend}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-green-600 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-green-500"
              >
                💻 Frontend
              </a>
              <a
                href={project.backend}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-gray-800 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-gray-700"
              >
                ⚙️ Backend
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
