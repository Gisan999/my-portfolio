import Banner from "./Components/Banner/Banner"
import Navbar from "./Components/Navbar/Navbar"
import './App.css'
import About from "./Components/About/About"
import Resume from "./Components/Resume/Resume"
import Portfolio from "./Components/Portfolio/Portfolio"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
// import { Link} from 'react-scroll';
function App() {

  return (
    <>
      <div className="lg:grid grid-cols-12 m-0 p-0">


        <div className="lg:col-span-2  border bg-black ">
          <Navbar />

        </div>




        <div className="lg:col-span-10 border">

          <Banner />
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
