import React,  { useEffect, useState } from "react";
import '../assets/css/land.css'
import Group77 from '../assets/images/Group 77.svg'
import invoice from '../assets/images/file-invoice 1.svg'
import Group69 from '../assets/images/Group 69.svg';
import user1 from '../assets/images/users 1.svg'
import user2 from '../assets/images/users 2.svg'
import Group72 from '../assets/images/Group 72 (5).svg';
import ellipse20 from '../assets/images/Ellipse 20.svg';
import ellipse16 from '../assets/images/Ellipse 16.svg';
import ellipse17 from '../assets/images/Ellipse 17.svg';
import ellipse18 from '../assets/images/Ellipse 18.svg';
import ellipse21 from '../assets/images/Ellipse 21.svg';
import ellipse22 from '../assets/images/Ellipse 22.svg';
 import playbutton from '../assets/images/play-button.svg';
import calender2 from '../assets/images/calendar 2.svg'

import Group58 from '../assets/images/Group 58.svg';
import image7 from '../assets/images/image 7 (1).svg'
import image11 from '../assets/images/image 11.svg';
import image8 from '../assets/images/image 8 (1).svg';
import image10 from '../assets/images/image 10 (4).svg';
import Group73 from '../assets/images/Group 73.svg';
import image12 from '../assets/images/image 12.svg';
import phone from '../assets/images/phone 1.svg';
import portrait from '../assets/images/portrait-teacher-giving-online-class 1.svg';
function Body(props) {
    const [counts, setCounts] = useState({
        students: 0,
        success: 0,
        questions: 0,
        experts: 0,
        experience: 0,
      });
    
      useEffect(() => {
        const targets = {
          students: 15,
          success: 75,
          questions: 35,
          experts: 26,
          experience: 16,
        };
        const durations = {
            students: 2000,
            success: 2000,
            questions: 2000,
            experts: 2000,
            experience: 2000,
          };
      
          Object.keys(targets).forEach((key) => {
            let start = 0;
            const end = targets[key];
            const duration = durations[key];
            const increment = end / (duration / 100);
      
            const interval = setInterval(() => {
                start += increment;
                if (start >= end) {
                  start = end;
                  clearInterval(interval);
                }
                setCounts((prevCounts) => ({
                  ...prevCounts,
                  [key]: Math.floor(start),
                }));
              }, 100);
            });
          }, []);
  return (
    <>
 
 <div className="third-div">
        <p>Our Success</p>
        <p>
          Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci.
        </p>
        <div id="third-row">
          <section className="third-row-section">
            <p>{counts.students}k+</p>
            <p>Students</p>
          </section>
          <section className="third-row-section">
            <p>{counts.success}%</p>
            <p>Total success</p>
          </section>
          <section className="third-row-section">
            <p>{counts.questions}</p>
            <p>Main questions</p>
          </section>
          <section className="third-row-section">
            <p>{counts.experts}</p>
            <p>Chief experts</p>
          </section>
          <section className="third-row-section">
            <p>{counts.experience}</p>
            <p>Years of experience</p>
          </section>
        </div>
      </div>
    <section id="first-div">
        <div>
            <p className="cloud">All-In-One <span>Cloud Software.</span> </p>
            <p className="power">TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office.
            </p>
        </div>
        <div>
            <section>
                <div className="image-div">
                    <img src={invoice} alt=""/>
                </div>
                <aside  className="base">
                    <p className="bill">Online Billing, Invoicing, & Contracts                </p>
                    <p className="power">
                        Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts
                    </p>
                </aside>
               
            </section>
            <section >
                <div className="image-div">
                    <img src={calender2} alt=""/>
                </div>
                <aside  className="base">
                    <p className="bill">Easy Scheduling & Attendance Tracking</p>
                    <p className="power">Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance</p>
                </aside>
               
            </section>
            <section>
                <div className="image-div">
                    <img src={user1} alt=""/>

                </div>
                <aside className="base">
                    <p className="bill">Customer Tracking               </p>
                    <p className="power">Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization </p>
                </aside>
             
            </section>
        </div>
    </section>
    <div className="second-div">
        <p className="cloud">What is <span>TOTC? </span>       </p>
        <p className="power">TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
        <div>
            <section>
               <aside>
                <p>FOR INSTRUCTORS</p>
                <button>Start a class today</button>
               </aside>
            </section>
            <section>
                <aside>
                 <p>FOR STUDENTS</p>
                 <button id="button-last">Enter access code</button>
                </aside>
             </section>
        </div>
    </div>
  
    <div className="fifth-div">
        <p>Our <span>Features</span></p>
        <p>This very extraordinary feature, can make learning activities more efficient</p>
        <div id='fifth-div-section' >
        <div id="second2-fifth-div">
        <p>Everything you can do in a physical classroom, <span>you can do with TOTC</span> </p>
        <p style={{ textAlign: "left" }}>TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
        <a href="fbm">Learn more</a>
      </div>
            <div id="second-fifth-div">
             <p className="coor">A <span>user interface </span> designed <br/>for the classroom</p>
             <aside className="fifth-div-aside">
                <div className="fifth-row">
                    <img src={Group72} alt=""/>
                </div>
                <p>Teachers don’t get lost in the grid view and have a dedicated Podium space.   </p>
             </aside>
             <aside className="fifth-div-aside">
                <div className="fifth-row" >
                    <img src={Group73} alt=""/>
                </div>
                <p className="pp">TA’s and presenters can be moved to the front of the className.
                </p>
             </aside>
             <aside className="fifth-div-aside">
                <div className="fifth-row"> 
                    <img src={user2} alt=""/>
                </div>
                <p>Teachers can easily see all students and className data at one time.   </p>
             </aside>
            </div>
       </div>
    </div>
<div id="teacher">
    <div>
        <p className="coor"><span>Tools</span> For Teachers And Learners</p>
        <div id="hand-div">
            <img src={Group69} alt="/"/>
            <p className="classic">
            
                className has a dynamic set of teaching tools built to be deployed and used during className.
                Teachers can handout assignments in real-time for students to complete and submit.</p>

        </div>
       
    </div > 
    <div id="books">
        <div id="Ellipse-div">
        </div>
        <img src={image12} alt="/"/>
        <div id="red-circle">
        </div>
        <div id="small-red-circle">

        </div>
        <div id="green-circle">


        </div>
        <div id="purple-circle">

        </div>
        <img src={Group77} alt="/" id="group-77"/>
      {/* <!-- <img src="/src/images/imagEX/Rectangle 62.svg" alt="">         --> */}
    </div>

</div>
 <div id="last-div">
<p id="news">Lastest News and Resources</p>
<p>See the developments that have occurred to TOTC in the world</p>
<div id="main-last-div">
 <section>
    <div id="laptop">
    </div>
     <button className='balance-button1'>News</button>

    <p className="million">className adds $30 million to its balance sheet for a Zoom-friendly edtech solution</p>
    <h4 className="backboard">className, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</h4>
    <a href="cnb" className="anchor">Read more</a>
  </section>
 <section>
    <div className=" balance">

        <div>
            <button className='balance-button'>PRESS RELEASE</button>
        </div>
     
        <section>
            <p className="million">className Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand</p>
            <h4 className="backboard">className Technologies Inc., the company that created className,...</h4>
        </section>
       
    </div>
    <div className=" balance">
        <div>
            <button className='balance-button'>NEWS</button>
        </div>
        <section>
            <p className="million">Zoom’s earliest investors are betting millions on a better Zoom for schools</p>
            <h4 className="backboard">Zoom was never created to be a consumer product. Nonetheless, the...</h4>
        </section>
       
    </div>
    <div className=" balance">
        <div>
            <button className='balance-button'>NEWS  </button>

        </div>
        <section>
            <p className="million">Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms</p>
            <h4 className="backboard">This year, investors have reaped big financial returns from betting on Zoom...</h4>
        </section>
        
    </div>
   
  </section>
</div>
 </div>
 </>

  );
}

export default Body;
