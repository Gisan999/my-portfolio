import { FaFacebook, FaGithub, FaPhone } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
const Contact = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div id="Contact" className="bg-black bg-opacity-90 py-10">
            <h2 className="text-center text-7xl md:text-9xl lg:text-[150px] font-bold text-gray-800">CONTACT</h2>
            <h3 className="relative text-center  text-2xl md:text-5xl bottom-14 md:bottom-24 lg:bottom-24 font-bold text-gray-200">Get<span className="border-b-8 border-red-500">in To</span>uch</h3>


            <div className="max-w-screen-xl mx-auto my-12">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">


                    <div data-aos="zoom-out-right" className=" lg:col-span-2 p-5">

                        <h2 className="text-white font-extrabold text-3xl ">ADDRESS</h2>
                        <div className="text-gray-200 text-xl mt-10">
                            <h2>Ruhea,</h2>
                            <h2>Thahurgaon Sadar, Thakurgaon,</h2>
                            <h2>Bangladesh</h2>
                        </div>

                        <div className="flex items-center gap-5 mt-10">
                            <h2 className="text-red-500 text-xl"><FaPhone /></h2>
                            <h2 className="text-gray-200 text-lg">+880 1609584164</h2>
                        </div>
                        <div className="flex items-center gap-5 mt-5">
                            <h2 className="text-red-500 text-xl"><TfiEmail /></h2>
                            <h2 className="text-gray-200 text-lg">gisan.md.rahman@gmail.com</h2>
                        </div>

                        <h2 className="text-white font-bold text-3xl pb-4 pt-10">FOLLOW ME</h2>

                        <div className="flex gap-5">
                            <a href="https://twitter.com/GisanRahman09">
                                <h1 className="text-3xl text-gray-400"><FaXTwitter /></h1>
                            </a>
                            <a href="https://www.facebook.com/gisan.rahman.528">
                                <h1 className="text-3xl text-gray-400"><FaFacebook /></h1>
                            </a>

                            <a href="https://github.com/Gisan999">


                                <h1 className="text-3xl text-gray-400"><FaGithub /></h1>
                            </a>
                        </div>



                    </div>


                    <div data-aos="zoom-out-left" className=" lg:col-span-3">


                        <div className="form-container">
                            <div className="form">
                                <span className="heading">SEND US A NOTE</span>
                                <input placeholder="Name" type="text" className="input" />
                                <input placeholder="Email" id="mail" type="email" className="input" />
                                <textarea placeholder="Say Hello" rows="10" cols="30" id="message" name="message" className="textarea"></textarea>
                                <div className="button-container">
                                    <div className="send-button">Send</div>
                                    <div className="reset-button-container">
                                        <div id="reset-btn" className="reset-button">Reset</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Contact;