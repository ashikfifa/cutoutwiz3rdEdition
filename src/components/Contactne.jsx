import React from "react";
import emailjs from "emailjs-com";
// import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigationne} from "./";
const $ = window.$;
// import Form from 'customisable-contact-form';
// import {Heading, FirstName, LastName, Email, Message, SubmitButton} from 'customisable-contact-form'
export default function Contact() {
   
return (



<div className="containe">
<Router >
    <Navigationne />
    </Router>
<Helmet>
<style>{'body { background-color: #f2f3f5; }'}</style>
</Helmet>



<div class="container">
<div class="row">
<div style={{marginTop:"4%"}}>
<p style={{textAlign:"center",fontSize:"30px",fontFamily:"poppins"}}>KOM IN CONTACT MET ONS</p>
<div class="text-center"style={{marginBottom:"-2%"}}><button id="button-20">NEEM CONTACT OP</button></div>
<form onSubmit={sendEmail}>
{/* {renderAlert()} */}
<div className="row pt-5 mx-auto">
<div className="col-8 form-group mx-auto">
<input type="text" className="form-control" placeholder="Naam" name="name"required/>
</div>
<div class="col-8 form-group mx-auto">
<select id="inputState" class="form-control"name="option">
<option selected> --Selecteer optie-- </option>
<option>Afbeelding Bewerken Service</option>
<option>Video Bewerken Service</option>
</select>
</div>
<div className="col-8 form-group pt-2 mx-auto">
<input type="email" className="form-control" placeholder="E-mail" name="email"required/>
</div>
<div className="col-8 form-group pt-2 mx-auto">
<input type="text" className="form-control" placeholder="Onderwerp" name="subject"required/>
</div>
<div className="col-8 form-group pt-2 mx-auto">
<textarea className="form-control" id="" cols="30" rows="8" placeholder="Jouw bericht" name="message"required></textarea>
</div>

<div className="col-8 form-group pt-2 mx-auto" hidden>
<textarea cols="30" rows="3" type="number" className="form-control" name="uniqueid" id="hellone"/>
</div>

<div className="col-8 pt-3 mx-auto">
<div class="text-center">
<input type="submit" id="button-19" className="btn btn-info" value="INDIENEN"></input>
</div>
</div>
</div>
</form>
</div>
</div>
</div>

<br/>
</div>



);

}




function randomDate( end) {
    return new Number(end + Math.random());
}
var p=randomDate( new Number())*10000000000000000;
function sendEmail(e) {
    e.preventDefault();
    
    emailjs.sendForm('service_1zfatsb', 'template_0ciuxfr', e.target, 'user_3TcS4pRKMgpo7fArsKmSf')
    .then((result) => {
    console.log(result.text);
    window.location.href = "./thank-you/"+p;
    }, (error) => {
    console.log(error.text);
    });
    e.target.reset();
    
}

function whatis(){
    document.getElementById('hellone').innerHTML = p;
    }
$( document ).ready(function() {
    whatis();
});