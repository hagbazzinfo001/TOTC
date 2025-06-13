import React, { useState } from "react";
import book1 from "../assets/images/book1.svg";
import book2 from "../assets/images/book2.svg";
import book3 from "../assets/images/book3.svg";
import book4 from "../assets/images/book4.svg";
import wheadset from "../assets/images/whandset.svg";
import book5 from "../assets/images/book5.svg";
import book6 from "../assets/images/book6.svg";
import rate from "../assets/images/rate.svg";
import youtube from "../assets/images/youtube (1).svg";
import instagram from "../assets/images/instagram.svg";
import control from "../assets/images/contro;.svg";
import views from "../assets/images/views.svg";

import twitter from "../assets/images/twitter (1).svg";
import Nav from "./Nav";
import rt from "../assets/images/rt.svg";
import lt from "../assets/images/lt.svg";
import Footer from "./Footer";
import "../assets/css/literature.css";
import { Link } from "react-router-dom";
function Literature() {
  const pagination = [1, 2, 3, 4, 5, 6];
  const bookLogList = [
    "About",
    "Courses",
    "Notes",
    "Project",
    "Podcast",
    "Books",
    "Reviews",
  ];
  const [activePage, setActivePage] = useState(pagination[0]);
  const [activeCated, setActiveCated] = useState(bookLogList[5]);

  const booklog = [
    {
      imgsrc: book1,
      price: "$24",
      title: "All Benefits of PLUS",
    },

    {
      imgsrc: book2,
      price: "$24",
      title: "All Benefits of PLUS",
    },
    {
      imgsrc: book3,
      price: "$24",
      title: "All Benefits of PLUS",
    },
    {
      imgsrc: book4,
      price: "$24",
      title: "All Benefits of PLUS",
    },
    {
      imgsrc: book5,
      price: "$24",
      title: "All Benefits of PLUS",
    },
    {
      imgsrc: book6,
      price: "$24",
      title: "All Benefits of PLUS",
    },
  ];

  return (
    <>
      <Nav />
      <div id="main-div">
        <div id="header-div">
          <div id="wheadset-div">
            <img src={wheadset} alt="ehadset" />
          </div>
          <div id="john-div">
            <section>
              <h2 className="lite">John Anderson</h2>
              <button type="button" className="enrol">
                Enroll Now
              </button>
            </section>
            <p className="prof">Assistant Professor at Mcmaster University</p>
            <p className="lorem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enum
              ad minim veniam, quis nostrud
            </p>
            <div id="all-section-div">
              <section>
                <img src={rate} alt="" />
                <p>4.9 instructor Rating </p>
              </section>
              <section>
                <img src={views} alt="" />
                <p>1,592 Students </p>
              </section>
              <section>
                <img src={control} alt="" />
                <p>Course </p>
              </section>
              <section>
                <Link href="#">
                  {" "}
                  <img src={youtube} alt="youtube" />
                </Link>
                <Link href="##">
                  {" "}
                  <img src={instagram} alt="instagram" />
                </Link>

                <Link href="#">
                  {" "}
                  <img src={twitter} alt="twitter" />
                </Link>
              </section>
            </div>
          </div>
        </div>
        <div id="booklog">
          {bookLogList.map((categ, i) => (
            <p
              key={i}
              className={`cated${activeCated === categ ? " active" : ""}`}
              onClick={() => setActiveCated(categ)}
            >
              {categ}
            </p>
          ))}
        </div>
        <div id="booklog-mobile">
          <label htmlFor="category" className="lite">
            category:
          </label>
          {/* <select name="category" id="category">
            {bookLogList.map((categ, i) => (
              <>
                {" "}
                <option
                  value={categ}
                  key={i}
                  className={`cated${activeCated === categ ? " active" : ""}`}
                  onClick={() => setActiveCated(categ)}
                >
                  {categ}
                </option>
              </>
            ))}
          </select> */}

          <select
            name="category"
            id="category"
            value={activeCated}
            onChange={(e) => setActiveCated(e.target.value)}
          >
            {bookLogList.map((categ, i) => (
              <option value={categ} key={i}>
                {categ}
              </option>
            ))}
          </select>
        </div>
        <div id="main-section-div">
          <p className="lite">Literature course</p>
          <section id="section">
            {booklog.map((book, i) => (
              <div id="section-div">
                <img alt={i} src={book.imgsrc} />
                <section>
                  <p className="plus">{book.title}</p>
                  <p className="color">{book.price}</p>
                </section>
              </div>
            ))}
          </section>
          <div id="pagination">
            <img src={lt} alt="left arrow" />
            {pagination.map((page, i) => (
              <p
                key={i}
                className={`page-button${activePage === page ? " active" : ""}`}
                onClick={() => setActivePage(page)}
              >
                {page}
              </p>
            ))}
            <img src={rt} alt="right arrow" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Literature;
