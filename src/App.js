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
import Login from "./pages/login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import Catalog from "./components/Catalog";
import Courses from "./pages/Courses";
import Bookmark from "./components/Bookmark";
import Search from "./pages/Search";
import ForgotPassword from "./pages/forgot";
import Literature from "./components/literature";
import CourseDetails from "./components/courseDetails";
import CalSide from "./components/calSide";
function App() {
  return (
    <>
      <Routes>
        <Route index element={<Register />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courseDetails" element={<CourseDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/carousal" element={<Carousal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/home" element={<Home />} />
        <Route path="calSide" element={<CalSide />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Bookmark" element={<Bookmark />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/literature" element={<Literature />} />
        <Route path="/Pricing" element={<Pricing />} />
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
