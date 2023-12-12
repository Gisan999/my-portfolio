import { Link } from 'react-scroll';
import img from '../../assets/myPhoto.png'
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebook, FaGithub } from 'react-icons/fa';
const Navbar = () => {

    const navItem = ['Home', 'About Me', 'Resume', 'Portfolio', 'Contact']


    const handleSetActive = (to) => {
        console.log(to);
    };

    return (
        <div>
            <div className="drawer text-gray-200">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <div className="w-full  ">
                        <div className="lg:hidden sticky top-0 z-20">


                            <div className="flex justify-between items-center px-5">
                                <div>
                                    <h2 className="text-2xl py-5 font-bold italic">GISAN RAHMAN</h2>
                                </div>
                                <div className="flex items-center">
                                    <div>
                                        <div className="flex justify-center gap-5">
                                            <a href="https://twitter.com/GisanRahman09">
                                                <h1 className="text-xl text-gray-400"><FaXTwitter /></h1>
                                            </a>
                                            <a href="https://www.facebook.com/gisan.rahman.528">
                                                <h1 className="text-xl text-gray-400"><FaFacebook /></h1>
                                            </a>

                                            <a href="https://github.com/Gisan999">


                                                <h1 className="text-xl text-gray-400"><FaGithub /></h1>
                                            </a>
                                        </div>

                                    </div>
                                    <div>
                                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className=" hidden lg:block h-[873px]">
                            <div className='fixed z-20 w-80'>

                                <div className=''>
                                    <div className=' flex justify-center mt-12'>
                                        <img className="w-3/5 border-8 rounded-full border-gray-600" src={img} alt="" />
                                    </div>
                                    <h2 className='text-2xl text-center font-bold  mt-3'>Gisan Rahman</h2>
                                </div>
                                <div className='flex justify-center mt-32'>

                                    <div className='space-y-5'>
                                        {
                                            navItem.map((nav, idx) => (

                                                <div key={idx}>
                                                    <Link
                                                        activeClass="active"
                                                        to={nav}
                                                        spy={true}
                                                        smooth={true}
                                                        offset={50}
                                                        duration={500}
                                                        onSetActive={handleSetActive}
                                                    >
                                                        <button className='active:text-red-500 focus:text-red-500 font-bold'>{nav}</button>
                                                    </Link>
                                                </div>

                                            ))
                                        }
                                    </div>




                                    {/* <ul className="menu  text-lg">
                                        <li><a>Home</a></li>


                                        <Link
                                            activeClass="active"
                                            to="about"
                                            spy={true}
                                            smooth={true}
                                            offset={50}
                                            duration={500}
                                        //   onSetActive={handleSetActive}
                                        >
                                            <li>About Me</li>
                                        </Link>

                                        <li><a>What I Do</a></li>
                                        <li><a>Resume</a></li>
                                        <li><a>Portfolio</a></li>
                                        <li><a>Contact</a></li>
                                    </ul> */}
                                </div>
                                <div className="flex justify-center mt-80 gap-5">
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

                        </div>
                    </div>
                </div>
                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>

                    <div className='bg-black z-50 p-5 mt-12'>

                        <div className='space-y-5 z-50'>
                            {
                                navItem.map((nav, idx) => (

                                    <div key={idx}>
                                        <Link
                                            activeClass="active"
                                            to={nav}
                                            spy={true}
                                            smooth={true}
                                            offset={50}
                                            duration={500}
                                            onSetActive={handleSetActive}
                                        >
                                            <button className='active:text-red-500 focus:text-red-500 font-bold'>{nav}</button>
                                        </Link>
                                    </div>

                                ))
                            }
                        </div>
                    </div>



                    {/* 
                    <ul className="menu p-4 w-80 min-h-full bg-black">
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul> */}


                </div>
            </div>
        </div>
    );
};

export default Navbar;