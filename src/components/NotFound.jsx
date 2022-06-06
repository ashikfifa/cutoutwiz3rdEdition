import React, { Component } from "react";
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation} from "./";
 function NotFound(props) {

    return(

    <div className="postphoto">
                                  <Router >
      <Navigation />
      </Router>
         <Helmet>
                <style>{'body { background-color: #ffdd0b; }'}</style>
                <meta name="robots" content="noindex"></meta>
            </Helmet>
        <p style={{fontWeight:"900",fontSize:"180px",textAlign:"center",color:"#000000"}}>Oops!</p>
        <p style={{fontWeight:"900",fontSize:"20px",textAlign:"center",color:"#000000"}}>404 - PAGE NOT FOUND</p>
        <p style={{fontWeight:"900",fontSize:"12px",textAlign:"center",color:"#000000"}}>The page you are looking for might have been removed<br/> had it's name changed or is temporary unavilable</p>
        <br/>
        <div class="text-center">
        <Link to="/"><button id="button-opps"style={{padding:"10px",fontSize:"13px",color:"#000000",fontWeight:"900"}}>GO TO HOMEPAGE</button></Link>
        </div>
    </div>
        );

    }
   
    export default NotFound;