import design from "../assets/images/bookmark_grid.svg";
import time from "../assets/images/bookmark_time.svg";
import rectangle from "../assets/images/Rectangleima.png";
import lady from "../assets/images/lady.png";
import user from "../assets/images/userimage.svg";
import "../assets/css/bookmark.css";
function Bookmark({ firstparagraph }) {
  const bookmark = [
    {
      imgSrc: lady,
      para: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
      time: time,
      grid: design,
      aws: "AWS Certified solutions Architect",
      lina: user,
      month: "3 Month",
      price: ["$80", "$100"],
      Text: ["Lina", "Design"],
    },
    {
      imgSrc: rectangle,
      para: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
      time: time,
      grid: design,
      aws: "AWS Certified solutions Architect",
      lina: user,
      month: "3 Month",
      price: ["$80", "$100"],
      Text: ["Lina", "Design"],
    },
  ];
  return (
    <>
      <div className="bookmark-container">
        <p className="prop">{firstparagraph}</p>
        <p className="see">See All</p>
      </div>
      <div className="bookmark-loop">
        {bookmark.concat(bookmark).map((item, index) => {
          return (
            <div key={index} className="bookmark">
              <img
                src={item.imgSrc}
                alt={item.para}
                width="275px"
                height="159px"
                id="img"
              />
              <div className="bookmark-sectdiv">
                <section className="bookmark-sect">
                  <img src={item.grid} alt="grid" />
                  <p className="month">{item.Text[1]}</p>
                </section>
                <section className="bookmark-sect">
                  <img src={item.time} alt="time" />
                  <p className="month">{item.month}</p>
                </section>
              </div>
              <p className="aws">{item.aws}</p>
              <p className="para">{item.para}</p>
              <div className="bookmark-sectdiv">
                <section className="bookmark-sect">
                  <img src={item.lina} alt="lina" />
                  <p className="lina">{item.Text[0]}</p>
                </section>
                <section className="bookmark-sect">
                  <p className="stroke">{item.price[1]}</p>
                  <p className="dolar">{item.price[0]}</p>
                </section>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Bookmark;
