import blueharb2 from '../../assets/bbb.png'
import creative from '../../assets/creative.png'
import shophy from '../../assets/sophy.png'
import event from '../../assets/event.png'
import { FaRegEye } from 'react-icons/fa';
const Portfolio = () => {
    return (
        <div id="Portfolio" className="bg-gray-900 py-12">
            <h2 className="text-7xl md:text-9xl lg:text-[150px] font-bold text-center text-gray-800">PORTFOLIO</h2>
            <h2 className="relative text-center  text-2xl md:text-5xl bottom-14 md:bottom-24 lg:bottom-24 font-bold text-gray-200">My <span className="border-b-8 border-red-600">wor</span>k</h2>



            <div className="max-w-screen-xl mx-auto my-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 lg:px-0">
                    <div>


                        <div className="cardContainer shadow-md shadow-red-700 w-full h-96 lg:h-96">
                            <div className="profileDiv">

                                <img className='w-full h-full transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 blur-sm hover:blur-none' src={blueharb2} />

                            </div>
                            <div className="infoDiv">
                                <div className="nameDiv">
                                    <p className="name">BLUEHARB</p>
                                    <p className="role">Asset Management System</p>
                                </div>
                                <div className="socialDiv">
                                    <a href="https://final-project-d65ce.web.app">
                                        <button className='btn btn-circle btn-outline text-xl text-purple-500'><FaRegEye /></button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>

                        <div className="cardContainer shadow-md shadow-red-700 w-full h-96 lg:h-96">
                            <div className="profileDiv">

                                <img className='w-full h-full transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 blur-sm hover:blur-none' src={creative} />

                            </div>
                            <div className="infoDiv">
                                <div className="nameDiv">
                                    <p className="name">CREATIVE</p>
                                    <p className="role">Blog Website</p>
                                </div>
                                <div className="socialDiv">
                                    <a href="https://assignment-eleven-b0b1b.web.app">
                                        <button className='btn btn-circle btn-outline text-xl text-purple-500'><FaRegEye /></button>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>

                        <div className="cardContainer shadow-md shadow-red-700 w-full h-96 lg:h-96">
                            <div className="profileDiv">

                                <img className='w-full h-full transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 blur-sm hover:blur-none' src={shophy} />

                            </div>
                            <div className="infoDiv">
                                <div className="nameDiv">
                                    <p className="name">SHOFY</p>
                                    <p className="role">E-Commerce Website</p>
                                </div>
                                <div className="socialDiv">
                                    <a href="https://assignment-ten-9d201.web.app">
                                        <button className='btn btn-circle btn-outline text-xl text-purple-500'><FaRegEye /></button>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>

                        <div className="cardContainer shadow-md shadow-red-700 w-full h-96 lg:h-96">
                            <div className="profileDiv">

                                <img className='w-full h-full transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0  blur-sm hover:blur-none' src={event} />

                            </div>
                            <div className="infoDiv">
                                <div className="nameDiv">
                                    <p className="name">EVENT HORIZON</p>
                                    <p className="role">Event Management Website</p>
                                </div>
                                <div className="socialDiv">
                                    <a href="https://event-management-assignm-3da7b.web.app">
                                        <button className='btn btn-circle btn-outline text-xl text-purple-500'><FaRegEye /></button>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Portfolio;