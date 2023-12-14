/* eslint-disable react/no-unescaped-entities */

import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div  id="About Me" className="bg-gray-900 py-12">
          <div data-aos="fade-up">
          <h2 className="text-7xl md:text-9xl lg:text-[150px] font-bold text-center text-gray-800">ABOUT ME</h2>
            <h2 className="relative text-center  text-2xl md:text-5xl bottom-14 md:bottom-24 lg:bottom-24 font-bold text-gray-200">Know <span className="border-b-8 border-red-600">  Me </span> More</h2>
          </div>

            <div data-aos="fade-up"  className="max-w-screen-xl mx-auto my-12 ">
                <div data-aos="fade-up"  className="grid grid-cols-2 lg:grid-cols-6 gap-8">
                    <div  data-aos="zoom-in-right" className=" col-span-4 px-5 lg:px-0">

                        <h2 className="text-gray-200 text-3xl font-bold">I'm <span className="text-red-500 animate-pulse">Gisan Rahman, </span> a Web Developer</h2>

                        <h1 className="text-xl text-justify font-serif italic text-gray-600 pt-3">
                            I am a proficient MERN (MongoDB, Express.js, React, Node.js) stack developer with a strong foundation in building scalable and efficient web applications. My expertise lies in creating dynamic user interfaces with React, managing backend functionality using Node.js and Express.js, and implementing robust database solutions with MongoDB.
                            <br />
                            <br /> With a keen eye for detail and a passion for delivering high-quality code, I thrive in collaborative environments to bring innovative and impactful digital experiences to life.</h1>

                    </div>



                    <div data-aos="zoom-in-left"  className=" col-span-2 text-gray-200 space-y-3 px-5 lg:px-0">
                        <h2 className="border-b border-gray-600 pb-2"><span className="font-bold">NAME:</span>  <span className="font-medium   ">MD.  Gisan Rahman</span></h2>
                        {/* <hr /> */}
                        <h2 className="pt-2 border-b border-gray-600 pb-2"><span className="font-bold">EMAIL:</span> <span className="text-red-500 font-medium">gisan.md.rahman@gmail.com</span></h2>
                        {/* <hr /> */}
                        <h2 className="pt-2 border-b border-gray-600 pb-2"><span className="font-bold">AGE:</span> <span className="font-medium"> 20</span></h2>
                        {/* <hr /> */}
                        <h2 className="pt-2"><span className="font-bold">FROM:</span> <span className="font-medium">Thakurgaon, Rangpur, Bangladesh</span></h2>
                        <div className="pt-6">
                            <a href="/resume.pdf" download="resume.pdf">
                                <button className="button9" data-text="Awesome">
                                    <span className="actual-text">&nbsp;resume&nbsp;</span>
                                    <span aria-hidden="true" className="hover-text">&nbsp;resume&nbsp;</span>
                                </button>

                            </a>
                        </div>
                    </div>

                </div>

                <div data-aos="fade-up"  className="grid grid-cols-3 mt-16">
                    <div data-aos="flip-right"  className="border-r border-gray-600">
                        <h2 className="text-gray-600 text-4xl md:text-5xl font-bold text-center">02 +</h2>
                        <h3 className="text-center text-gray-300  text-xl md:text-2xl pt-3 font-semibold">Years Experiance</h3>
                    </div>
                    <div  data-aos="flip-left"  className="border-r border-gray-600">
                        <h2 className="text-gray-600 text-4xl md:text-5xl font-bold text-center">15 +</h2>
                        <h3 className="text-center text-gray-300 text-xl md:text-2xl pt-3 font-semibold">Happy Clients</h3>
                    </div>
                    <div data-aos="flip-right"  className="border-r border-gray-600">
                        <h2 className="text-gray-600 text-4xl md:text-5xl font-bold text-center">20 +</h2>
                        <h3 className="text-center text-gray-300 text-xl md:text-2xl pt-3 font-semibold">Project Done</h3>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;