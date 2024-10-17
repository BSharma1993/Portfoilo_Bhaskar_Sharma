import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import Service from "./components/Service";
import Model from "./components/Model";
import Protfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Model />
        <Service />
        <Protfolio />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
