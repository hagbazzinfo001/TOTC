//  import laptop from "../assets/images/bookmark_laptop.svg";
import gender from "../assets/images/gender.svg";
import user from "../assets/images/userimage.svg";
import hand from "../assets/images/hand.svg";
import "../assets/css/lesson.css";
import "../assets/css/bookmark.css";
import rectangle from "../assets/images/Rectangleima.png";

function Lesson({ firstparagraph }) {
  const bookmark = [
    {
      imgSrc: rectangle,
      aws: "AWS Certified solutions Architect",
      lina: user,
      Text: ["Lina", "Lesson 5 of 7"],
    },
    {
      imgSrc: gender,
      aws: "AWS Certified solutions Architect",
      lina: user,
      Text: ["Lina", "Lesson 5 of 7"],
    },
    {
      imgSrc: hand,
      aws: "AWS Certified solutions Architect",
      lina: user,
      Text: ["Lina", "Lesson 5 of 7"],
    },
  ];
  return (
    <>
      <div className="bookmark-container">
        <p className="prop">{firstparagraph}</p>
        <p className="see">View history</p>
      </div>
      <div className="bookmark-loop">
        {bookmark.map((item, index) => {
          return (
            <div key={index} className="bookmark">
              <img
                src={item.imgSrc}
                alt={item.para}
                width="366px"
                height="208px"
                id="img"
              />
              <p className="aws">{item.aws}</p>

              <div className="bookmark-sectdiv">
                <section className="bookmark-sect">
                  <img src={item.lina} alt="grid" />
                  <p className="month">{item.Text[0]}</p>
                </section>
                <section className="bookmark-sect">
                  <p className="month">{item.Text[1]}</p>
                </section>
              </div>
              <div id="progress">
                <span className="progress-bar">
                  <span></span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Lesson;
