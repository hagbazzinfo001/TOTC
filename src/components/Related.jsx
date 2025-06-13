//  import laptop from "../assets/images/bookmark_laptop.svg";
import user from "../assets/images/userimage.svg";
import eye from "../assets/images/EYE (2).svg";
//   import hand from "../assets/images/hand.svg";
import "../assets/css/lesson.css";
import "../assets/css/bookmark.css";
import rectangle from "../assets/images/Rectangleima.png";
import Woman from "../assets/images/Woman.png";

function Related({ firstparagraph }) {
  const bookmark = [
    {
      imgSrc: Woman,
      aws: "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
      lina: user,
      Text: ["Lina", "Lesson 5 of 7"],
    },
    {
      imgSrc: rectangle,
      aws: "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
      lina: user,
      Text: ["Lina", "Lesson 5 of 7"],
    },
    // {
    //     imgSrc: hand,
    //       aws:'AWS Certified solutions Architect',
    //     lina:user,
    //   Text:['Lina', 'Lesson 5 of 7']
    // }
  ];
  return (
    <>
      <style>
        {`
                    .million {
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                     align-items: flex-start;
                     width: 400px;
                     margin : 0 auto;
                    }
                    .million-p {
color: #696984;
font-family: Poppins;
font-size: 18px;
 font-weight: 400;
line-height: 180%; /* 36px */
letter-spacing: 0.4px;
 width: 400px;


                    }
.hrrt{
color: #252641;
font-family: Poppins;
font-size: 22px;
        
 
width: 400px;

font-weight: 500;
line-height: 180%; /* 46.8px */}
                        .number,.lina-div  {
                            display: flex;
                            flex-direction: row;
                             gap: 15px;

                              align-items: center;
                        }
            .number-div {
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
width: 40px;
                             align-items: center;
                        }
                           .bookmark-loop2{
                            display: flex;
                            flex-direction: row;
                             justify-content: space-between;
                            margin-block: 20px;
                            //   padding-inline: 80px;
                            } 
                    #imag{
                    width:720px;
                     height:332px;
                    }
                     @media (max-width: 480px) {

.hrrt, .million-p, .number-div {
    width: 400px; /* Allow the width to adjust based on the screen size */
}
    #imag {
        width: 80%; /* Adjust image width to fit the screen */
        height: 230px; /* Maintain aspect ratio */
        margin : 0 auto; /* Center the image */
    }

    .bookmark-loop2 {
        flex-direction: column; /* Stack items vertically */
        gap: 15px; /* Adjust spacing */
    }
}
                `}
      </style>
      <div className="bookmark-container">
        <p className="prop">{firstparagraph}</p>
        <p className="see">View history</p>
      </div>
      <div className="bookmark-loop">
        {bookmark.map((item, index) => {
          return (
            <div key={index} className="bookmark">
              <img src={item.imgSrc} alt={item.para} id="imag" />

              <div className="million">
                <p className="hrrt">
                  Class adds $30 million to its balance sheet for a
                  Zoom-friendly edtech solution
                </p>
                <div className="lina-div">
                  <img
                    src={user}
                    alt="user"
                    width="70px"
                    height="70px"
                    id="user"
                  />
                  <p className="lina">Lina</p>
                </div>
                <p className="million-p">
                  Class, launched less than a year ago by Blackboard co-founder
                  Michael Chasen, integrates exclusively...
                </p>
                <div className="number-div">
                  <p>Read more</p>

                  <div className="number">
                    <img
                      src={eye}
                      alt="user"
                      width="20px"
                      height="20px"
                      id="user"
                    />
                    <p className="lina">251,232</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Related;
