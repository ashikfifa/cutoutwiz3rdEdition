import React, { Component } from "react";
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigationes} from "./";
 function Thankyoues(props) {

    return(
        <div className="postphoto"style={{backgroundColor:"#ffdd0b"}}>
     <Router >
      <Navigationes />
      </Router>
             <Helmet>
                <style>{'body { background-color: #ffdd0b; }'}</style>
                <meta name="robots" content="noindex"></meta>
            </Helmet>

            <div class="row">
                <p style={{fontWeight:"700",fontSize:"100px",marginTop:"4%",color:"black",textAlign:"center"}}>Gracias</p>
                <p class="text-center"style={{fontSize:"25px",color:"black"}}>Gracias por ponerse en contacto.
                  Uno de los miembros de nuestro equipo llegará<br/> a usted en el menor tiempo posible.
                  Si necesitas un proyecto<br/> asistencia, puede contactarnos en:<br/><br/><u>info@cutoutwiz.com</u></p>
            </div>
        </div>
        );

    }
   
    export default Thankyoues;