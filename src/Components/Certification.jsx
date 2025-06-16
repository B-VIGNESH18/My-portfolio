import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

export const certifications = [
    {
        title: "MERN Full Stack Course Completion Certificate",
        image: "/images/GuviCertification - FSD.png",
        description: "Completion certificate for the MERN Full Stack Development course, showcasing skills in MongoDB, React, Node.js, and Express.",
        technologies: ["MongoDB", "React", "Node.js", "Express", "Tailwind CSS"],
        url: "https://www.guvi.in/certificate?id=W90F75H4EO68681Xzu&download=true"
    },
    {
        title: "Bootstrap Mastery Certification",
        image: "/images/GuviCertification - Bootstrap.png",
        description: "Certification showcasing expertise in Bootstrap, applied to creating responsive web designs.",
        technologies: ["HTML", "CSS", "Bootstrap"],
        url: "https://www.guvi.in/certificate?id=Y065Oa8X71Q6m491R8&download=true"
    },
    {
        title: "CSS Certification",
        image: "/images/GuviCertification - CSS.png",
        description: "Certification demonstrating proficiency in CSS for styling and designing interactive UIs.",
        technologies: ["HTML", "CSS", "JavaScript"],
        url: "https://www.guvi.in/certificate?id=m998Lbk4u616X5087T&download=true"
    },
    {
        title: "HTML Proficiency Certificate",
        image: "/images/GuviCertification - HTML.png",
        description: "Certificate awarded for excellence in HTML and creating structured web layouts.",
        technologies: ["HTML", "CSS", "React"],
        url: "https://www.guvi.in/certificate?id=968W56Ayf038c071Q4&download=true"
    },
    {
        title: "MongoDB Certification",
        image: "/images/GuviCertification - MongoDB.png",
        description: "Recognition of skills in MongoDB, focusing on database design and management for web applications.",
        technologies: ["MongoDB", "TailwindCSS", "React"],
        url: "https://www.guvi.in/certificate?id=78z69JMR5094816W1X&download=true"
    },
    {
        title: "MySQL Certification",
        image: "/images/GuviCertification - MYSQL.png",
        description: "Certification in MySQL database management and querying techniques for dynamic websites.",
        technologies: ["MySQL", "TailwindCSS", "React"],
        url: "https://www.guvi.in/certificate?id=6889o94C6ESg8Q0157&download=true"
    },
    {
        title: "Node.js Certification",
        image: "/images/GuviCertification - Nodejs.png",
        description: "Certified skills in Node.js for server-side development and API integration.",
        technologies: ["Node.js", "TailwindCSS", "React"],
        url: "https://www.guvi.in/certificate?id=yU4H15Fr86697508QO&download=true"
    },
    {
        title: "React.js Certification",
        image: "/images/GuviCertification - Reactjs.png",
        description: "Certificate of excellence in React.js, specializing in component-based UI development.",
        technologies: ["React.js", "TailwindCSS", "HTML"],
        url: "https://www.guvi.in/certificate?id=L60E87p60a4z451X89&download=true"
    },
    {
        title: "JavaScript Certification",
        image: "/images/GuviCertification -javascript.png",
        description: "Certification for JavaScript programming, covering ES6 features and DOM manipulation.",
        technologies: ["JavaScript", "TailwindCSS", "React"],
        url: "https://www.guvi.in/certificate?id=eryo1L06894578C6WD&download=true"
    }
];

const certification = () => {

    useEffect(() => {
        AOS.init(); 
    }, []);
    return (
        <div className='pb-4'>
            <h2 className='my-4 text-center text-4xl'>certifications</h2>
            <div>
                {certifications.map((project, index) => (
                    <div key={index} 
                         className="mb-8 flex flex-wrap lg:justify-center project-container" 
                         data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}> {/* Alternate between fade-right and fade-left */}
                        
                        <div className='w-full lg:w-1/4'>
                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                                <img src={project.image}
                                    width={250}
                                    height={250}
                                    alt={project.title}
                                    className='mb-6 rounded project-image' />
                            </a>
                        </div>
                        <div className='w-xl max-w-xl lg:w-3/4'>
                            <h3 className='mb-2 font-semibold text-2xl'>{project.title}</h3>
                            <p className='mb-4 text-stone-400'>{project.description}</p>
                            <div>
                                {project.technologies.map((item, index) => (
                                    <span className='mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300' key={index}>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default certification;
