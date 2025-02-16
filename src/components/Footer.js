import React from "react";
import "../assets/css/App.css";
 function Footer(props) {
  return (
    <div>
      <footer className="App">
        <div className="zoom">
           <div>
            <p>TOTC</p>
          </div>
          <p>
            Virtual Class <br></br> for Zoom
          </p>
        </div>
        <p>Subscribe to get our Newsletter</p>
        <div id="newletter">
          <input type="email" placeholder="Your Email"/>
          <button>Subscribe</button>
        </div>
        <section id="about">
          <p className="border">Careers</p>
          <p className="border">Privacy Policy</p>
          <p>Terms & Conditions</p>
        </section>
        <p>&copy;2021 Class Technologies Inc.</p>
      </footer>
    </div>
  );
}

export default Footer;
