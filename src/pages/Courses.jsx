import React,{ useState } from "react";
import Nav from "../components/Nav";

import Footer from "../components/Footer";
import Catalog from "../components/Catalog";
import "../assets/css/courses.css";
import Bookmark from "../components/Bookmark";
import Pagination from "../components/Pagination";

import Lesson from "../components/Lesson";
function Courses(props) {
  
  //  const [active, setActive] = useState(null); // Track the clicked image

  // const handleClick = (direction) => {
  //   setActive(direction); // Set the clicked direction as active
  // };
  return (
    <>
      <Nav />
      <div className="bookmark-conEr">
      <Lesson firstparagraph="Welcome back, ready for your next lesson?" />
  
      <div className="pagination">
      <Pagination />


  </div> 

  </div>
       <div className="courses-container">
        <h1>Courses</h1>
        <Catalog />
        </div>
        <div className="bookmark-conEr">
      <Bookmark firstparagraph="Recommended for you" />
  
  <div className="pagination">
     {/* <img src={left} alt="pageleft"   onClick={() => handleClick("left")}
        className={active === "left" ? "active" : ""}  />
     <img src={right} alt="pageright"   onClick={() => handleClick("right")}
        className={active === "right" ? "active" : ""}   /> */}
        <Pagination />

  </div>
  
      </div>
      <div className="courses-container">
        <Bookmark firstparagraph="Get choice of your course" />
        <div id="coach">
          <h3>Online coaching lessons for remote learning.</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
          <button>Start learning now</button>
        </div>
        <Bookmark firstparagraph="The course in personal development" />
      </div> 
      <div className="bookmark-conEr">
      <Bookmark firstparagraph="Student are viewing" />

      </div>
 
      <Footer />
    </>
  );
}

export default Courses;
