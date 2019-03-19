import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
    
      <div id="about">
      <div class="container">
        <div class="section-title text-center center">
          <h2>About us</h2>
          <hr/>
        </div>
        <div class="row">
          <div class="col-md-4"><img src="img/about.png" class="img-responsive"/></div>
          <div class="col-md-4" >
            <div class="about-text">
              <h4>WHO AM I</h4>
              <p>
                I  am a Experienced Senior Web Developer with a demonstrated history of working in the
                information technology and services industry. Skilled in Project Engineering, Mobile Applications, 
                Software Project Management, Software Development, and Interior Design. 
                Strong engineering professional with a Bachelor's degree focused in Computer Software
                Engineering from Adventist university of central africa. </p>
              <p> I have the technical  communication knowledge. I assist people in managing their help desk or work with them to devise a contingency plan for proper computer maintenance and troubleshooting </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="about-text">
              <h4> get to know me better </h4>
    
              <p>I am a very skilled in Engineering and development of the system especially web/native apps  . in addition a have been a kick-ass at data science .</p>
              <ul>
                <li>data scince </li>
                <li>web/native apps development </li>
                <li>IT project management </li>
                <li> software engineering</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
      );
  }
}

export default About;
