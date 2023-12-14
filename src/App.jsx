import Banner from "./Components/Banner/Banner"
import Navbar from "./Components/Navbar/Navbar"
import './App.css'
import About from "./Components/About/About"
import Resume from "./Components/Resume/Resume"
import Portfolio from "./Components/Portfolio/Portfolio"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import { useEffect, useState } from "react"
import { FaRegArrowAltCircleUp } from "react-icons/fa"
import { Link } from "react-scroll"
// import { Link} from 'react-scroll';
function App() {
  const [scrollValue, setScrollValue] = useState(0);
  const scrollEvent = () => {
    setScrollValue(window.scrollY)
  }
  useEffect(() => {
    const scroll = window.addEventListener("scroll", scrollEvent);
    return () => scroll;
  }, [])
  console.log(scrollValue);
  return (
    <>
      <div className="lg:grid grid-cols-12 m-0 p-0">


        <div className="lg:col-span-2  border bg-black ">
          <Navbar />

        </div>




        <div className="lg:col-span-10 border">

          <Banner />
          <div className={`${scrollValue ? 'block' : 'hidden'}`}>

            <Link
              activeClass="active"
              to="Home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
             
              <button  className="text-5xl text-red-500 animate-bounce fixed bottom-5 right-5 lg:right-16 z-50"><FaRegArrowAltCircleUp /></button>
            </Link>
          </div>
          {/* <div className="h-[500px]">
            <h2>my name is gisan</h2>
          </div> */}
          <About />
          <Resume />
          <Portfolio />
          <Contact />
          <Footer />
        </div>


      </div>
    </>
  )
}

export default App
