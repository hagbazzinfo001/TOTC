// import React from "react";
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
import image12 from '../assets/images/image 12.svg'
import phone from '../assets/images/phone 1.svg'
import portrait from '../assets/images/portrait-teacher-giving-online-class 1.svg';
function Body(props) {
  return (
    <>
 
    <div class="third-div">
      <p>Our Success</p>
      <p>
        Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci. </p>
        <div id="third-row">
            <section className="third-row-section">
                <p>15K+</p>
                <p>Students</p>
            </section>
            <section className="third-row-section">
                <p>75%</p>
                <p>Total success</p>
            </section>
            <section className="third-row-section" >
                <p>35</p>
                <p>Main questions</p>
            </section>
            <section className="third-row-section" >
                <p>26</p>
                <p>Chief experts</p>
            </section>
            <section className="third-row-section" >
                <p>16</p>
                <p>Years of experience</p>
            </section>
        </div>

 
    </div>
    <section id="first-div">
        <div>
            <p class="cloud">All-In-One <span>Cloud Software.</span> </p>
            <p class="power">TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office.
            </p>
        </div>
        <div>
            <section>
                <div class="image-div">
                    <img src={invoice} alt=""/>
                </div>
                <aside  class="base">
                    <p class="bill">Online Billing, Invoicing, & Contracts                </p>
                    <p class="power">
                        Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts
                    </p>
                </aside>
               
            </section>
            <section >
                <div class="image-div">
                    <img src={calender2} alt=""/>
                </div>
                <aside  class="base">
                    <p class="bill">Easy Scheduling & Attendance Tracking</p>
                    <p class="power">Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance</p>
                </aside>
               
            </section>
            <section>
                <div class="image-div">
                    <img src={user1} alt=""/>

                </div>
                <aside class="base">
                    <p class="bill">Customer Tracking               </p>
                    <p class="power">Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization </p>
                </aside>
             
            </section>
        </div>
    </section>
    <div class="second-div">
        <p class="cloud">What is <span>TOTC? </span>       </p>
        <p class="power">TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
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
    <div class="fourth-div">
      <div>
        <aside id="big-size">

        </aside>
        <aside id="small-size">

        </aside>
        <p>Everything you can do in a physical classroom, <span>you can do with TOTC</span> </p>
        <p>TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
        <a href="fbm">Learn more</a>
      </div>
      <div>
        <div id="blue-bg"></div>
        <div id="green-bg"></div>
        <div id="class-room">
            {/* <img src="/src/images/imagEX/confident-teacher-explaining-lesson-pupils 1 (1).png" alt=""> */}
            <img src={playbutton} alt=""/>
        </div>
      </div>
    </div>
    <div class="fifth-div">
        <p>Our <span>Features</span></p>
        <p>This very extraordinary feature, can make learning activities more efficient</p>
        <section id='fifth-div-section' >
            <div id="first-fifth-div">
               <div class="circle-div" >
                <div>
                    <img src={ellipse22} alt=""/>
                    <img src={ellipse21} alt=""/>
                </div>
                {/* <!-- <div>
                    <img src="/src/images/imagEX/Ellipse 20.svg" alt=""/>
                    <div id="blue-circle">
                    </div>
                </div> --> */}
               </div>
  
        <div class="main">
            <div id="icon">
                <img src={ellipse16} alt=""/>
                <img src={ellipse17} alt=""/>
                <img src={ellipse18} alt=""/>
            </div>
            <div id="imagwe">
             
                <section id="section1">
                   <div id="instructor">
                      <img src={portrait} alt=""  id='group58'/>
                      <div class="howard">
                          <img src={Group58} alt="bb"/>
                          <p id="instructor-p"> Instructor</p>
                          <li id='eveny'>Eveny Howard</li>
                      </div>
                   </div>
                   <div id="present">
                      <button>Present</button>
                      <button id="hhh" > <img src={phone} alt="" style={{marginRight: "10px;"}}/>  call</button>
                   </div>
                </section>
                <div id="first-circle">
                  <div id="circle">
                  </div>
                </div>
            <section id="section2">
                  <div class="members-div">
                      <div class="members">
  
                          <img src={image7} alt=""/>
                          <div class="howard">
                              <img src={Group58} alt=""/>
                               <p>Tamara Clarke</p>
                          </div>
                       </div>
                       <div class="members">
                          <img src={image11} alt=""/>
  
                          <div class="howard">
                          <img src={Group58} alt=""/>
                              <p> Adam Levin</p>
                           </div>
                       </div>
                  </div>
                  <div class="members-div">
                      <div class="members">
                          <img src={image8} alt=""/>
                          <div class="howard">
                          <img src={Group58} alt=""/>
                          <p> Humbert Holland</p>
                           </div>
                       </div>
                       <div class="members">
  
                          <img src={image10} alt=""/>
                          <div class="howard">
                              <img src={Group58} alt=""/>
                               <p>Patricia Mendoza</p>
                          </div>
                       </div>
                  </div>
                </section> 
                </div>
        </div>      

            {/* <!-- <div id="imagwe">
             
              <section id="section1">
                 <div id="instructor">
                    <img src="/src/images/imagEX/portrait-teacher-giving-online-class 1.svg" alt="">
                    <div class="howard">
                        <img src="/src/images/imagEX/Group 58.svg" alt="">
                        <p id="instructor-p"> Instructor</p>
                        <p>Eveny Howard</p>
                    </div>
                 </div>
                 <div id="present">
                    <button>Present</button>
                    <button> <img src="/src/images/imagEX/phone 1.svg" alt="" style="margin-right: 10px;">  call</button>
                 </div>
              </section>
              <div id="first-circle">
                <div id="circle">
                </div>
              </div>
                           <section id="section2">
                <div class="members-div">
                    <div class="members">

                        <img src="/src/images/imagEX/image 7 (1).svg" alt="">
                        <div class="howard">
                            <img src="/src/images/imagEX/Group 58.svg" alt="">
                             <p>Tamara Clarke</p>
                        </div>
                     </div>
                     <div class="members">
                        <img src="/src/images/imagEX/image 11.svg" alt="">

                        <div class="howard">
                            <img src="/src/images/imagEX/Group 58.svg" alt="">
                            <p> Adam Levin</p>
                         </div>
                     </div>
                </div>
                <div class="members-div">
                    <div class="members">
                        <img src="/src/images/imagEX/image 8 (1).svg" alt="">
                        <div class="howard">
                            <img src="/src/images/imagEX/Group 58.svg" alt="">
                            <p> Humbert Holland</p>
                         </div>
                     </div>
                     <div class="members">

                        <img src="/src/images/imagEX/image 10 (4).svg" alt="">
                        <div class="howard">
                            <img src="/src/images/imagEX/Group 58.svg" alt="">
                             <p>Patricia Mendoza</p>
                        </div>
                     </div>
                </div>
              </section> 
              </div> --> */}
             <div id="circle-div-2">
                    <img src={ellipse20} alt=""/>
                    <div id="blue-circle">
                    </div>
                </div> 
            </div>
            <div id="second-fifth-div">
             <p class="coor">A <span>user interface </span> designed <br/>for the classroom</p>
             <aside>
                <div>
                    <img src={Group72} alt=""/>
                </div>
                <p>Teachers don’t get lost in the grid view and have a dedicated Podium space.   </p>
             </aside>
             <aside>
                <div>
                    <img src={Group73} alt=""/>
                </div>
                <p class="pp">TA’s and presenters can be moved to the front of the class.
                </p>
             </aside>
             <aside>
                <div>
                    <img src={user2} alt=""/>
                </div>
                <p>Teachers can easily see all students and class data at one time.   </p>
             </aside>
            </div>
       </section>
    </div>
<div id="teacher">
    <div>
        <p class="coor"><span>Tools</span> For Teachers And Learners</p>
        <div id="hand-div">
            <img src={Group69} alt="/"/>
            <p class="classic">
            
                Class has a dynamic set of teaching tools built to be deployed and used during class.
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

    <p class="million">Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</p>
    <h4 class="backboard">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</h4>
    <a href="cnb" class="anchor">Read more</a>
  </section>
 <section>
    <div class=" balance">

        <div>
            <button className='balance-button'>PRESS RELEASE</button>
        </div>
     
        <section>
            <p class="million">Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand</p>
            <h4 class="backboard">Class Technologies Inc., the company that created Class,...</h4>
        </section>
       
    </div>
    <div class=" balance">
        <div>
            <button className='balance-button'>NEWS</button>
        </div>
        <section>
            <p class="million">Zoom’s earliest investors are betting millions on a better Zoom for schools</p>
            <h4 class="backboard">Zoom was never created to be a consumer product. Nonetheless, the...</h4>
        </section>
       
    </div>
    <div class=" balance">
        <div>
            <button className='balance-button'>NEWS  </button>

        </div>
        <section>
            <p class="million">Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms</p>
            <h4 class="backboard">This year, investors have reaped big financial returns from betting on Zoom...</h4>
        </section>
        
    </div>
   
  </section>
</div>
 </div>
 </>

  );
}

export default Body;
