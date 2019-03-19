import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (   
<footer>

<div className="footer-area">
  <div className="footer-top">
    <div className="container">
      <div className="row">
        <div className="col-sm-2">
          <div className="companyinfo">
            <h2><span>Jean</span>-salvi</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor</p>
          </div>
        </div>
        <div className="col-sm-7">
          <div className="col-sm-3">
            <div className="video-gallery text-center">
              <a href="#">
                <div className="iframe-img">
                  <img src="images/home/iframe1.png" alt="" />
                </div>
                <div className="overlay-icon">
                  <i className="fa fa-play-circle-o"></i>
                </div>
              </a>
              <p>overview previus event</p>
              <h2>24 DEC 2014</h2>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="video-gallery text-center">
              <a href="#">
                <div className="iframe-img">
                  <img src="images/home/iframe2.png" alt="" />
                </div>
                <div className="overlay-icon">
                  <i className="fa fa-play-circle-o"></i>
                </div>
              </a>
              <p>overview third</p>
              <h2>24 DEC 2014</h2>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="video-gallery text-center">
              <a href="#">
                <div className="iframe-img">
                  <img src="images/home/iframe3.png" alt="" />
                </div>
                <div className="overlay-icon">
                  <i className="fa fa-play-circle-o"></i>
                </div>
              </a>
              <p>overview second</p>
              <h2>24 DEC 2014</h2>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="video-gallery text-center">
              <a href="#">
                <div className="iframe-img">
                  <img src="images/home/iframe4.png" alt="" />
                </div>
                <div className="overlay-icon">
                  <i className="fa fa-play-circle-o"></i>
                </div>
              </a>
              <p>here we are overview</p>
              <h2>24 DEC 2014</h2>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="address">
            <img src="img/home/map.png" alt="" />
            <p>kigali rwanda , (remera)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-4 col-xs-12">
             <div className="footer-content">
               <div className="footer-head">
                 <div className="footer-logo">
                   <h2><span>The</span>HappyNes</h2>
                 </div>

                 <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                 <div className="footer-icons">
                   <ul>
                     <li>
                       <a href="#"><i className="fa fa-facebook"></i></a>
                     </li>
                     <li>
                       <a href="#"><i className="fa fa-twitter"></i></a>
                     </li>
                     <li>
                       <a href="#"><i className="fa fa-google"></i></a>
                     </li>
                     <li>
                       <a href="#"><i className="fa fa-pinterest"></i></a>
                     </li>
                   </ul>
                 </div>
               </div>
             </div>
           </div>
           
           --
         //-- Start Footer bottom Area --
          <div className="col-sm-2">
            <div className="single-widget">
              <h2>Service</h2>
              <ul className="nav nav-pills nav-stacked">
                <li><a href="#">Online Help</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Order Status</a></li>
                <li><a href="#">Change Location</a></li>
                <li><a href="#">FAQ’s</a></li>
              </ul>
            </div>
          </div>

          <div className="col-sm-2">
            <div className="single-widget">
              <h2>About us</h2>
              <ul className="nav nav-pills nav-stacked">
                <li><a href="#">Company Information</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Store Location</a></li>
                <li><a href="#">Affillate Program</a></li>
                <li><a href="#">Copyright</a></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3 col-sm-offset-1">
            <div className="single-widget">
              <h2>stay in touch</h2>
              <form action="#" className="searchform">
                <input type="text" placeholder="Your email address" />
                <button type="submit" className="btn btn-default"><i className="fa fa-arrow-circle-o-right"></i></button>
                <p>Get the most recent updates from <br />our site and be updated your self...</p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>

<div className="footer-area-bottom">
  <div className="container">
    <div className="row">
      <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="copyright text-center">
          <p>
            &copy; Copyright <strong>The HappyNes</strong>. All Rights Reserved
          </p>
        </div>
        <div className="credits">

          Designed by <a href="https://jeansalvi.fr">jean salvi</a>
        </div>
      </div>
    </div>
  </div>
</div>
</footer>


    );
 
  }
}

export default Footer;
