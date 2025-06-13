import bookIcon from "../assets/images/bookicon.svg";

function CalSide() {
  const h3Style = {
    color: "#252641",
    fontFamily: "Poppins",
    fontSize: "30px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    marginBottom: "20px",
  };

  const pStyle = {
    color: "#252641",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    margin: 0,
  };

  const bgColors = ["#F5F5F5", "#E0F7FA", "#FFF3E0", "#E8F5E9", "#FCE4EC"];

  const lessons = [
    {
      imgsrc: bookIcon,
      paragraph: "Lesson 01: Introduction about XD",
      time: "30 min",
    },
    {
      imgsrc: bookIcon,
      paragraph: "Lesson 02: XD Tools Overview",
      time: "45 min",
    },
    {
      imgsrc: bookIcon,
      paragraph: "Lesson 03: Wireframing Basics",
      time: "50 min",
    },
    {
      imgsrc: bookIcon,
      paragraph: "Lesson 04: Creating Layouts",
      time: "40 min",
    },
    {
      imgsrc: bookIcon,
      paragraph: "Lesson 05: Components in XD",
      time: "35 min",
    },
    {
      imgsrc: bookIcon,
      paragraph: "Lesson 06: Prototyping Basics",
      time: "42 min",
    },
    {
      imgsrc: bookIcon,
      paragraph: "Lesson 07: Advanced Prototyping",
      time: "38 min",
    },
    {
      imgsrc: bookIcon,
      paragraph: "Lesson 08: Sharing Designs",
      time: "33 min",
    },
    {
      imgsrc: bookIcon,
      paragraph: "Lesson 09: Design Systems",
      time: "37 min",
    },
    {
      imgsrc: bookIcon,
      paragraph: "Lesson 10: Exporting Assets",
      time: "32 min",
    },
    {
      imgsrc: bookIcon,
      paragraph: "Lesson 11: Team Collaboration",
      time: "41 min",
    },
    { imgsrc: bookIcon, paragraph: "Lesson 12: XD Shortcuts", time: "29 min" },
    {
      imgsrc: bookIcon,
      paragraph: "Lesson 13: Animation in XD",
      time: "36 min",
    },
    {
      imgsrc: bookIcon,
      paragraph: "Lesson 14: Accessibility Design",
      time: "48 min",
    },
    {
      imgsrc: bookIcon,
      paragraph: "Lesson 15: Real Project Walkthrough",
      time: "55 min",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .lesson-card {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          width: 100%;
        //   max-width: 300px;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          border-radius: 12px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          gap: 10px;
          margin-bottom: 15px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          animation: fadeInUp 0.5s ease forwards;
          opacity: 0;
        }

        .lesson-card:hover {
          transform: scale(1.02);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .scrollable-container {
          max-height: 100vh;
          overflow-y: auto;
          padding-right: 10px;
          scroll-behavior: smooth;
        }

        .scrollable-container::-webkit-scrollbar {
          width: 6px;
        }

        .scrollable-container::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.2);
          border-radius: 4px;
        }

        @media (max-width: 768px) {
          .lesson-card {
            flex-direction: column;
            align-items: flex-start;
            padding: 10px;
          }

          .lesson-card img {
            width: 40px;
            margin-bottom: 10px;
          }

          .lesson-card p {
            font-size: 14px;
          }

          .lesson-card small {
            font-size: 12px;
            color: gray;
          }

          h3 {
            font-size: 22px !important;
          }
        }
      `}</style>
      <div style={{ padding: "20px" }}>
        <div>
          <h3 style={h3Style}>Change Simplification</h3>
          {lessons.slice(0, 3).map((lesson, index) => (
            <div
              key={index}
              className="lesson-card"
              style={{
                backgroundColor: bgColors[index % bgColors.length],
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <img src={lesson.imgsrc} alt={`Lesson ${index + 1}`} width="50" />
              <p style={pStyle}>{lesson.paragraph}</p>
              <small>{lesson.time}</small>
            </div>
          ))}
        </div>

        <div>
          <h3 style={h3Style}>PRACTICE QUIZ</h3>
          <div className="scrollable-container">
            {lessons.map((lesson, index) => (
              <div
                key={index}
                className="lesson-card"
                style={{
                  backgroundColor: bgColors[index % bgColors.length],
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <img
                  src={lesson.imgsrc}
                  alt={`Lesson ${index + 1}`}
                  width="50"
                />
                <p style={pStyle}>{lesson.paragraph}</p>
                <small>{lesson.time}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CalSide;
