// import Polygon from './Polygon 2.svg';
// import "./components/css/App.css";
// import Nav from "./components/Nav";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import NoPage from "./pages/Nopage";
import Contact from "./pages/Contact";
import Pricing from "./components/Pricing";
import Carousal from "./components/Carousal";
import Login from './pages/login'
import Register from "./pages/Register";
function App() {
  return (
    <>
       <Routes>
      <Route index element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/carousal" element={<Carousal />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />

      <Route path="/Pricing" element={<Pricing/>} />
      <Route path="*" element={<NoPage />} />
    </Routes>
    </>

    // <Nav />
    //   <footer className="App">

    //   <div className="zoom">
    //     {/* <img src={Polygon} className="App-logo" alt="logo" /> */}
    //     <div>
    //       <p>TOTC</p>
    //     </div>
    //     <p>
    //       Virtual Class <br></br> for Zoom
    //     </p>
    //   </div>
    //   <p>Subscribe to get our Newsletter</p>
    //   <div id="newletter">
    //     <input type="email" placeholder="Your Email"></input>
    //     <button>Subscribe</button>
    //   </div>
    //   <section id="about">
    //     <p className="border">Careers</p>
    //     <p className="border">Privacy Policy</p>
    //     <p>Terms & Conditions</p>
    //   </section>
    //   <p>&copy;2021 Class Technologies Inc.</p>
    // </footer>
  );
}

export default App;
