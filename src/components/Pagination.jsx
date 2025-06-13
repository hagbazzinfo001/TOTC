import { useState } from "react";
import left from "../assets/images/pageleft.svg";
import right from "../assets/images/pageright.svg";
import "../assets/css/courses.css";

function Pagination() {
  const [active, setActive] = useState(null); // Local state for this pagination

  const handleClick = (direction) => {
    setActive(direction); // Update the local active state
  };

  return (
    <div className="pagination">
      <img
        src={left}
        alt="pageleft"
        onClick={() => handleClick("left")}
        className={active === "left" ? "active" : ""}
      />
      <img
        src={right}
        alt="pageright"
        onClick={() => handleClick("right")}
        className={active === "right" ? "active" : ""}
      />
    </div>
  );
}

export default Pagination;
