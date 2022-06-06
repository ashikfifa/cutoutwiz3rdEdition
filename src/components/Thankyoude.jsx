import React, { Component } from "react";
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigationge} from "./";
 function Thankyoude(props) {

    return(
        <div className="postphoto"style={{backgroundColor:"#ffdd0b"}}>
               <Router >
      <Navigationge />
      </Router>
             <Helmet>
                <style>{'body { background-color: #ffdd0b; }'}</style>
                <meta name="robots" content="noindex"></meta>
            </Helmet>

            <div class="row">
                <p style={{fontWeight:"700",fontSize:"100px",marginTop:"4%",color:"black",textAlign:"center"}}>Danke</p>
                <p class="text-center"style={{fontSize:"25px",color:"black"}}>Vielen Dank für Ihre Kontaktaufnahme.
                Einer unserer Teammitglieder wird Sie erreichen<br/> in kürzester Zeit an Sie aus.
                   Wenn Sie Projektunterstützung benötigen, erreichen Sie uns unter:<br/><br/><u>info@cutoutwiz.com</u></p>
            </div>
        </div>
        );

    }
   
    export default Thankyoude;