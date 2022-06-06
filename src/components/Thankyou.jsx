import React, { Component } from "react";
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation} from "./";
 function Thankyou(props) {

    return(
        <div className="postphoto"style={{backgroundColor:"#ffdd0b"}}>
               <Router >
      <Navigation />
      </Router>
             <Helmet>
                <style>{'body { background-color: #ffdd0b; }'}</style>
                <meta name="robots" content="noindex"></meta>
            </Helmet>

            <div class="row">
                <p style={{fontWeight:"700",fontSize:"100px",marginTop:"4%",color:"black",textAlign:"center"}}>Thank You</p>
                <p class="text-center"style={{fontSize:"25px",color:"black"}}>Thank you for getting in touch.
                 One of our team members will reach<br/> out to you within the shortest possible time.
                  If you need project<br/> assistance, you can contact us at:<br/><br/><u>info@cutoutwiz.com</u></p>
            </div>
        </div>
        );

    }
   
    export default Thankyou;