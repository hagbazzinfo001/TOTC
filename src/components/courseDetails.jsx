import hour from "../assets/images/hour.svg";
import "../assets/css/coursedet.css";
import CalSide from "./calSide";
function courseDetails() {
  return (
    <>
      <div className="main-style">
        <CalSide />
        <div>
          <div id="header">
            <section id="section1">
              <p className="XD">Learn about Adobe XD & Prototyping</p>
              <p className="hour">Introduction about XD</p>
            </section>
            <div id="section2">
              <img src={hour} alt="hour" />
              <p className="hour"> 1 hour</p>
            </div>
          </div>
          <div id="main-div">
            <h2>Create new event</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do
              eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing
              elit, sed do eiusmodLorem
            </p>
            <form action="" id="course-form" method="post">
              <div className="span_grid">
                <label htmlFor="eventName">Event Name</label>
                <input
                  type="text"
                  id="eventName"
                  placeholder="Adobe XD Auto - Animate : Your Guide to Creating"
                />
              </div>

              <div>
                <label htmlFor="startdate">Start date / Time</label>
                <input
                  type="datetime-local"
                  id="startdate"
                  placeholder="September 24, 2017 07:59 am"
                />
              </div>
              <div>
                <label htmlFor="enddate">End date / Time</label>
                <input
                  type="datetime-local"
                  id="enddate"
                  placeholder="September 24, 2017 07:59 am"
                />
              </div>
              <div className="span_grid">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  id="location"
                  className="span_grid"
                  placeholder="2118 Thornridge Cir, Syracuse, Connecticut 35624"
                />
              </div>
              <div>
                <label htmlFor="Notification">Notification</label>
                <input type="text" id="Notification" placeholder="30 mins" />
              </div>
              <div>
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  id="Email"
                  placeholder="jessica.hansome@example.com"
                />
              </div>
              <div className="span_grid">
                <label htmlFor="description">Event Description</label> <br />
                <textarea
                  className="span_grid"
                  id="description"
                  rows="4"
                  placeholder="Lorem ipsum dolor sit amet............. "
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Save Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default courseDetails;
