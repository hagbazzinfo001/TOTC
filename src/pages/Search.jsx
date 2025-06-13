    import React, { useState } from 'react';
 import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Bookmark from '../components/Bookmark'; // Ensure this path is correct
import "../assets/css/search.css";
import Creator from '../components/Creator';

function Search() {
return (
    <>
     
      <Nav />
      <div>
      <div className="real">
    <h1>
    Classes tought by real creators
    </h1>
    <h2 className='s2s'>
      See All
    </h2>
   </div>
   <div className="Creator-container">
 
 <Creator/>
      </div>
      <div className="real ss">
    <h1 style={{ opacity: "0" }}>
    Classes tought by real creators
    </h1>
    <h2>
      See All
    </h2>
   </div>
      </div>
      {/* <Bookmark firstparagraph="Recommended for you" /> */}
       <Footer />
    </>
  );
}
export default Search;
