import React from "react";
import {Helmet} from "react-helmet";
import emailjs from "emailjs-com";
import $ from 'jquery';
import ShowMoreText from "react-show-more-text";
import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';
import Slider from "react-slick";
import ShowMore from 'react-show-more-button';
import { Link } from 'react-router-dom';

function Shoptalk3(props) {


  function sendEmail(e) {
    e.preventDefault();

emailjs.sendForm('service_1zfatsb', 'template_aak2bzj', e.target, 'user_3TcS4pRKMgpo7fArsKmSf')
    .then((result) => {
        // console.log(result.text);
        // document.write('test case');
        alert('Thank You For Download The PDF.Please Check Your Mail,PDF Of Our Article Is Sent To Your Mail.')

    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
    
}


  return (

    <div className="postphoto">
          <Helmet>
                <style>{'body { background-color: #f2f3f5}'}</style>
                <title>CutOutWiz Shoptalk-2022</title>
          </Helmet>

          <div class="container"style={{paddingLeft:"12%",paddingRight:"12%"}}>
            <div class="row"style={{marginTop:"2%"}}>

                  <p style={{fontSize:"30px",fontWeight:"700",textAlign:"center"}}>Shoptalk 2022 - Solve Product Launch Delays <br/>Through Collaboration With Retail Vendors</p>
            
                  <p style={{marginTop: "-12px",textAlign:"center"}}>Did you know that delay in your product launch can cost your business 15- 35% Net Present Value? In a fast-paced world where time is money, launching the right products at the right time is crucial to maintain the flow for retailers and to stay ahead of competition.</p>
                
                 <img src="../../assets/images/Blog Cover3.gif" alt="" />

                 <i style={{fontWeight:"600",marginTop:"2%"}}>Things We Look Forward To..</i>

              <div style={{paddingLeft:"7px"}}>
                 <ul>
                     <li>Consequences of product launch delays and how to avoid them.</li>
                     <li>Relevant sessions from ShopTalk 2022 cherry picked for you.</li>
                     <li>Necessity of obtaining customer loyalty during the Post-Covid era.</li>
                     <li>Networking and collaboration opportunities with the right vendor.</li>
                 </ul>
                 </div>

              <div style={{backgroundColor:"white"}}>
          <div style={{backgroundColor:"white",marginTop:"3%",marginBottom:"3%"}}>
    
          </div>
          
                <div class="row">
                <div class="col-md-6">


            <p style={{textAlign:"center",fontWeight:"600"}}>Thank you for downloading our PDF which has been sent to your email.
In case you have not received it , please check your spam or promotions folder.
</p>


        <img  src="../../assets/images/MicrosoftTeams-image (46).png" class="rounded mx-auto d-block" width="30px" height="30px" alt=""/>
           <p style={{color:"#fedb0b",fontWeight:"800",textAlign:"center",marginBottom:"6%"}}>Happy Reading!!!</p>
      </div>



<div class="col-md-6">

<div class="text-center"style={{marginTop: "8%"}}>
<a href="../book-a-call/" ><button id="button-37" style={{backgroundColor: "black",color: "white",padding: "5px 22px",fontWeight:"600",border:"none"}}>Book an appointment <span>&#8594;</span></button></a>
</div>

<p style={{textAlign:"center"}}>Or Make a Call:</p>
<p style={{textAlign:"center",fontSize:"22px",fontWeight:"900",marginTop:"-3%"}}>+1 (415) 799-7876</p>

</div>
</div>
         
          </div>

              </div>
        </div>
        
        <br/>
<br/>

    </div>

  );
  
}


export default Shoptalk3;