import "../assets/css/App.css";
function Footer() {
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
          <input type="email" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
        <section id="about">
          <p className="border">Careers</p>
          <p className="border">Privacy Policy</p>
          <p>Terms & Conditions</p>
        </section>
        <p id="copy">&copy;2021 Class Technologies Inc.</p>
      </footer>
    </div>
  );
}

export default Footer;
