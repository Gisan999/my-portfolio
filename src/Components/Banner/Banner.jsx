/* eslint-disable react/no-unescaped-entities */
import bgVideo from '../../assets/BgVideo.mp4'
import { Typewriter } from 'react-simple-typewriter'
const Banner = () => {
    return (
        <div id='Home'>
            <div className="md:h-[700px] lg:h-[920px]  bg-black">
                <video className='w-full h-full' src={bgVideo} autoPlay muted></video>
                <div className='relative text-white text-center  bottom-10 md:bottom-48'>
                    <h1 className='md:text-4xl lg:text-5xl pb-4'>
                        I'm a {'  '}
                        <span className='text-red-500 font-bold'>
                            <Typewriter
                                words={['Full-Stack(MERN) Developer', 'Front-End Developer', 'JavaScript Developer']}
                                loop={Infinity}
                                cursor
                                // cursorColor='purple'
                                cursorStyle='|'
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>

                    <div>

                        <button className="btn2">Hire Me</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Banner;