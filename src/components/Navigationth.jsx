import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {

  function refreshPage(){
    window.location.reload('/');
}
  return (


    <Navbar collapseOnSelect sticky='top' expand='sm' bg='dark' variant='dark'>
    <Container>

    <div class="" onClick={refreshPage}>
    <Link class="navbar-brand" to="/th">
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
                <Link class="nav-link"  to="/th">
                หน้าแรก
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
           บริการ
          </a>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a class="dropdown-item" href="/th#images">รูปภาพ</a></li>
            <li><a class="dropdown-item" href="/th#videos">วิดีโอ</a></li>
          </ul>
        </li>

              <li class="nav-item">
                <a class="nav-link" href="/th#apps">
                  แอพ
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/th#prices">
                 ราคา
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/th#howitworks">
                มันทำงานอย่างไร
                </a>
              </li>

              <li class="nav-item">
              <Link class="nav-link" target="_blank" to="/th/contact-us">
              ติดต่อ
                </Link>
              </li>

             
              <li class="nav-item">
                <a class="nav-link" href="https://app.cutoutwiz.com/"target="_blank"><button id="button9">
                สมัคร</button>
                </a>
              </li>

        </ul>
      </div>
    </Container>
  </Navbar>

  );
}

export default withRouter(Navigation);