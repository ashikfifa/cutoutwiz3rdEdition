import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (


    <Navbar collapseOnSelect sticky='top' expand='sm' bg='dark' variant='dark'>
    <Container>
    <Link class="navbar-brand" to="/">
      <img src="../../assets/images/ailogo.png" width="170" height="40" alt=""/>
    </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="mx-auto"></div>
        <ul class="navbar-nav">
        <li class="nav-item active">
                <Link class="nav-link" to="/">
                  HOME
                  <span class="sr-only">(current)</span>
                </Link>
              </li>


              {/* <li class="nav-item">
                <Link class="nav-link" to="/services">
                  Tools & API
                </Link>
              </li> */}

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          SERVICE
          </a>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a class="dropdown-item" href="/#images">IMAGES</a></li>
            <li><a class="dropdown-item" href="/#videos">VIDEOS</a></li>
          </ul>
        </li>

              <li class="nav-item">
                <a class="nav-link" href="/#apps">
                  APPS
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/#prices">
                  PRICE
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/#howitworks">
                  HOW IT WORKS
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/#blogs">
                  BLOGS
                </a>
              </li>
              
              {/* <li class="nav-item">
                <a class="nav-link" href="#contactus">
                  
                  CONTACT
                </a>
              </li> */}

              <li class="nav-item">
              <Link class="nav-link" target="_blank" to="/contact-us">
                  CONTACT
                </Link>
              </li>

             
              <li class="nav-item">
                <a class="nav-link" href="https://app.cutoutwiz.com/"target="_blank"><button id="button9">
                  SIGN UP</button>
                </a>
              </li>
             

              <li class="nav-item">
              <Link class="nav-link" target="_blank" to="./es">
                   <img src="../../assets/images/spain-flag.png" width="20" height="20" alt=""/>
                </Link>
              </li>

              

              <li class="nav-item">
              <Link class="nav-link" target="_blank" to="./fr">
              <img src="../../assets/images/france-flag.png" width="20" height="20" alt=""/>
                </Link>
              </li>

              <li class="nav-item">
              <Link class="nav-link" target="_blank" to="./nl">
              <img src="../../assets/images/netherland-flag.png" width="20" height="20" alt=""/>
                </Link>
              </li>

              <li class="nav-item">
              <Link class="nav-link" target="_blank" to="./de">
              <img src="../../assets/images/germany-flag.png" width="20" height="20" alt=""/>
                </Link>
              </li>


        </ul>
      </div>
    </Container>
  </Navbar>

  );
}

export default withRouter(Navigation);