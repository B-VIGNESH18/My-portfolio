import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const EDUCATION = [
    {
        degree: "Bachelor of Engineering (B.E.) in Mechanical Engineering",
        institution: "karpagam college of Engineering, Coimbatore",
        year: "2019 - 2023",
        grade: "First Class"
    },
    {
        degree: "Higher Secondary Education (12th - Bio-Maths)",
        institution: "St. Mary's Matriculation Higher Secondary School, Vikravandi",
        year: "2018 - 2019",
        description: "Specialized in Biology and Mathematics, scoring 60% overall.",
        grade: "60%"
    },
    {
        degree: "Secondary School Certificate (10th)",
        institution: "St. Mary's Matriculation Higher Secondary School, Vikravandi",
        year: "2016 - 2017",
        description: "Completed high school with a strong focus on science and mathematics, scoring 86% overall.",
        grade: "86%"
    }
];

const Education = () => {
    useEffect(() => {
        AOS.init(); 
    }, []);
    return (
        <div className='pb-4'>
            <h2 className='my-20 text-center text-4xl'>Education</h2>
            <div>
                {EDUCATION.map((item, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <div className='w-full lg:w-1/4'>
                            <p className='mb-2 text-sm text-stone-400'>{item.year}</p>
                        </div>
                        <div className='w-full max-w-xl lg:w-1/4'>
                            <h3 className='mb-2 font-semibold'>
                                {item.degree}
                                <span className='text-sm text-stone-500'> - {item.institution}</span>
                            </h3>
                            <p className='mb-4 text-stone-400'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
