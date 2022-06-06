import React from "react";
import emailjs from "emailjs-com";
// import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
// import Form from 'customisable-contact-form';
// import {Heading, FirstName, LastName, Email, Message, SubmitButton} from 'customisable-contact-form'
export default function Contact() {

  return (

    <div className="containers">
          <Helmet>
                <style>{'body { background-color: #f2f3f5; }'}</style>
            </Helmet>

          <div class="container">
          <div class="row">
            
 
          <div style={{backgroundColor:"black"}}>
            <div style={{marginTop:"5%",marginBottom:"5%"}}>
          <p style={{textAlign:"center",fontSize:"30px",fontFamily:"poppins",fontWeight:"800",color:"#ffdd0b"}}>BOOK A CALL TODAY</p>
          <p style={{textAlign:"center",fontSize:"15px",marginTop:"-2%",color:"white",fontWeight:"600"}}>Talk with Cutoutwiz team today</p>
    </div>
    </div>
       
<div class="calendly-inline-widget" data-url="https://calendly.com/cutoutwiz/discussion-call-with-cutoutwiz"
 style={{minWidth:"320px",height:"630px"}} ></div>


     
        </div>
        </div>
    
    <br/>
</div>

  );
  
}

