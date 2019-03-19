import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (

      

       <div className='Header'>
       <div id="preloader"></div>
    
       { /* header-area start */}
        <div id="sticker" class="header-area">
          <div class="container">
            <div class="row">
              <div class="col-md-12 col-sm-12">
    
            
                { /* Navigation */}
                <nav class="navbar navbar-default">
                  
                  { /* Brand and toggle get grouped for better mobile display */}
                  <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                      </button>
                      { /* Brand  */}
                    <a class="navbar-brand page-scroll sticky-logo" href="/">
                      <h1><span>Jean </span>Salvi</h1>
                  
                      { /* Uncomment below if you prefer to use an image logo */}
                    
                    </a>
                  </div>
                  { /* Collect the nav links, forms, and other content for toggling */}
               
                  <div class="collapse navbar-collapse main-menu bs-example-navbar-collapse-1" id="navbar-example">
                    <ul class="nav navbar-nav navbar-right">
                      
    
                      <li>
                        <a class="page-scroll" href="/About">About</a>
                      </li>
    
                      <li>
                        <a class="page-scroll" href="/Contact">Contact </a>
                      </li>
                      <li>
                        <a class="page-scroll" href="/Blog"> Blog</a>
                      </li>
                      
                        
                    </ul>
                  </div>
                  {/*<!-- navbar-collapse -->*/}
                </nav>
                {/*<!-- END: Navigation -->*/}
              </div>
            </div>
          </div>
        </div>
        {/*<!-- header-area end -->*/}
        </div>
     
    );
  }
}

export default Header;

