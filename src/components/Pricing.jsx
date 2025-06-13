import { useState } from "react";
import PropTypes from "prop-types";
import Nav from "./Nav";
import Footer from "./Footer";
import "../assets/css/Price.css";
import BG from "../assets/images/BG.svg";
import opendrop from "../assets/images/opendrop.svg";
import iconcheck from "../assets/images/icon-check.svg";
import rectangle from "../assets/images/Rectangle 32.svg";
import Carousal from "./Carousal";

function Pricing() {
  // Define your data and slider settings outside or at the beginning of your component

  const LaptopSection = ({ title, description, buttonText }) => {
    return (
      <div className="laptop-div">
        <img src={rectangle} alt="img" className="image-doc" />
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="button-text">{buttonText}</button>
      </div>
    );
  };

  LaptopSection.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
  };

  const [openIndex, setOpenIndex] = useState(null);

  const ArrowShow = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Unique text for each section
  const sectionTexts = [
    "Personalized Training Programs",
    "Live Interactive Sessions",
    "Expert Guidance & Mentorship",
    "Flexible Learning Schedules",
    "Affordable & Accessible Plans",
  ];

  return (
    <div>
      <Nav />
      <div>
        <h1 id="afford">Affordable pricing</h1>
        <div id="price-content">
          <div className="price-content-div">
            <h4>Like a pussy</h4>
            <h1>
              Free <sub>/ forever</sub>
            </h1>
            <div id="free">
              <section>
                <img src={iconcheck} alt="check-icon" />
                <p>Components-driven system</p>
              </section>
              <section>
                <img src={iconcheck} alt="check-icon" />
                <p>Sales-boosting landing pages</p>
              </section>

              <section>
                <img src={iconcheck} alt="check-icon" />
                <p>Awesome Feather icons pack</p>
              </section>
            </div>
            <button className="price-button">Try for free</button>
          </div>
          <div className="price-content-div">
            <div id="best-div">
              <h4>👤 Individual</h4>
              <button id="best-button">Best</button>
            </div>

            <h1>
              $24 <sub>/ month</sub>
            </h1>
            <div id="best">
              <section>
                <img src={iconcheck} alt="check-icon" />
                <p>Components-driven system</p>
              </section>
              <section>
                <img src={iconcheck} alt="check-icon" />
                <p>Sales-boosting landing pagess</p>
              </section>
              <section>
                <img src={iconcheck} alt="check-icon" />
                <p>Awesome Feather icons pack</p>
              </section>
              <section>
                <img src={iconcheck} alt="check-icon" />
                <p>Themed into 3 different styles</p>
              </section>
              <section>
                <img src={iconcheck} alt="check-icon" />
                <p>Will help to learn Figma</p>
              </section>
            </div>
            <button className="price-button">Regular license</button>
          </div>
          <div className="price-content-div">
            <h4>👥 Corporate</h4>
            <h1>
              $12 <sub>/ editor</sub>
            </h1>
            <div id="corporate">
              <section>
                <img src={iconcheck} alt="check-icon" />
                <p>Components-driven system</p>
              </section>
              <section>
                <img src={iconcheck} alt="check-icon" />
                <p>Sales-boosting landing pagess</p>
              </section>
              <section>
                <img src={iconcheck} alt="check-icon" />
                <p>Awesome Feather icons pack</p>
              </section>
              <section>
                <img src={iconcheck} alt="check-icon" />
                <p>Themed into 3 different styles</p>
              </section>
            </div>
            <button className="price-button">Extended license</button>
          </div>
        </div>
        <div id="coach">
          <h3>Online coaching lessons for remote learning.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            laudantium ullam vitae dolorem molestias quos expedita autem aliquid
            possimus perspiciatis. Officia illum iusto, praesentium nesciunt
            optio voluptate quam officiis quia?
          </p>
          <button>Start learning now</button>
        </div>

        <div id="online-coach">
          <h4>Online coaching lessons for remote learning</h4>
          <div id="div-online-coach">
            {sectionTexts.map((text, index) => (
              <section key={index}>
                <div className="lorem">
                  <div>
                    <img src={BG} alt="BG" />
                    <p style={{ padding: "10px" }}>{text}</p>{" "}
                    {/* Unique text for each section */}
                  </div>
                  <img
                    src={opendrop}
                    alt="arrow"
                    className={openIndex === index ? "arrow rotate" : "arrow"}
                    onClick={() => ArrowShow(index)}
                  />
                </div>
                <p className={`dolor ${openIndex === index ? "show" : "hide"}`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempos Lorem ipsum dolor sitamet, consectetur
                  adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem
                  ipsum dolor sitamet, consectetur adipiscing elit, sed do
                  eiusmod temporLorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor
                  sitamet, consectetur adipiscing elit, sed do eiusmod
                  temporLorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur
                  adipiscing elit, sed do eiusmod tempor
                </p>
              </section>
            ))}
          </div>
        </div>
        <div id="test-carousal"></div>
        <Carousal />
      </div>
      <div id="laptop-ss">
        <div className="latopsection-div">
          <LaptopSection
            title="Become a Teacher"
            description="Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively..."
            buttonText="Apply as a Teacher"
          />
        </div>
        <div className="latopsection-div">
          <LaptopSection
            title="Become a Student"
            description="Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively..."
            buttonText="Apply as a Student"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Pricing;
