import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";

function Navigationfr(props) {
  function refreshPage(){
    window.location.reload();
}
  return (


    <Navbar collapseOnSelect sticky='top' expand='sm' bg='dark' variant='dark'>
    <Container>
    <div class="" onClick={refreshPage}>
    <Link class="navbar-brand" to="/fr">
      <img src="../../assets/images/ailogo.png" width="170" height="40" alt=""/>
    </Link>
    </div>
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
        <li class="nav-item active" onClick={refreshPage}>
                <Link class="nav-link" to="/fr">
                DOMICILE
                  <span class="sr-only">(current)</span>
                </Link>
              </li>


              {/* <li class="nav-item">
                <Link class="nav-link" to="/services">
                  Tools & API
                </Link>
              </li> */}

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="../../fr#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          UN SERVICE
          </a>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a class="dropdown-item" href="./fr#imagesfr">IMAGES</a></li>
            <li><a class="dropdown-item" href="./fr#videosfr">VIDÉOS</a></li>
          </ul>
        </li>

              <li class="nav-item">
                <a class="nav-link" href="./fr#appsfr">
                  APPS
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="./fr#pricesfr">
                LE PRIX
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="./fr#howitworksfr">
                COMMENT ÇA FONCTIONNE
                </a>
              </li>

              {/* <li class="nav-item">
                <a class="nav-link" href="/#blogs">
                  BLOGS
                </a>
              </li> */}
              
              {/* <li class="nav-item">
                <a class="nav-link" href="#contactus">
                  
                  CONTACT
                </a>
              </li> */}

              <li class="nav-item">
              <Link class="nav-link"target="_blank" to="/fr/contact-us">
              CONTACTEZ
                </Link>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="https://app.cutoutwiz.com/"target="_blank"><button id="button9">
                S'INSCRIRE</button>
                </a>
              </li>
             

        </ul>
      </div>
    </Container>
  </Navbar>

  );
}

export default withRouter(Navigationfr);