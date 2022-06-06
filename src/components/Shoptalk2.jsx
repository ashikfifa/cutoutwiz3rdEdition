import React from "react";
import {Helmet} from "react-helmet";
import emailjs from "emailjs-com";
import $ from 'jquery';
import ShowMoreText from "react-show-more-text";
import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';
import Slider from "react-slick";
import ShowMore from 'react-show-more-button';
import { Link } from 'react-router-dom';

function Shoptalk2(props) {


  function sendEmail(e) {
    e.preventDefault();

emailjs.sendForm('service_1zfatsb', 'template_aak2bzj', e.target, 'user_3TcS4pRKMgpo7fArsKmSf')
    .then((result) => {
        console.log(result.text);
        window.location.href = "https://cutoutwiz.com/shoptalk_2022_a-complete-guide-for-attendees/confirmation";
        // document.write('test case');
        //alert('Thank You For Download The PDF.Please Check Your Mail,PDF Of Our Article Is Sent To Your Mail.')

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

                 <i style={{fontWeight:"600",marginTop:"2%"}}>What you get in this pdf..</i>

              <div style={{paddingLeft:"7px"}}>
                 <ul>
                     <li>Consequences of product launch delays and how to avoid them.</li>
                     <li>Relevant sessions from ShopTalk 2022 cherry picked for you.</li>
                     <li>Necessity of obtaining customer loyalty during the Post-Covid era.</li>
                     <li>Networking and collaboration opportunities with the right vendor.</li>
                 </ul>
                 </div>

              <div style={{backgroundColor:"white"}}>
          <div style={{backgroundColor:"white",marginTop:"4%",marginBottom:"3%"}}>
          {/* <p style={{textAlign:"center",color:"#4790c9",fontSize:"10px",fontWeight:"600"}}>Download The PDF To Continue Reading...</p> */}
              <div class="text-center">       
                 <button type="button"id="button-19" class="btn btn-info hide-me" data-toggle="collapse" data-target="#demo"style={{marginTop:"-1.5%",color:"white"}}> Download The PDF</button>
              </div>
          </div>
              <div id="demo" class="collapse">
                <div class="row">
                <div class="col-md-6">
                <div style={{marginTop:"4%",marginBottom:"2%"}}>
                  <p style={{textAlign:"center",fontWeight:"600",fontSize:"29px"}}>Download The PDF</p>
                  <div style={{textAlign:"center"}}>
<svg style={{color:"#125a31",marginTop:"-11%"}}xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg>
</div>


              </div>



        <div style={{marginTop:"-5%",marginBottom:"6%"}}>        
        <form onSubmit={sendEmail}>     
            <div className=" mx-auto">
                <div className="col-8 form-group mx-auto">
                    <input type="text" className="form-control" placeholder="Name" name="name"required/>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                    <input type="text" className="form-control" placeholder="Company Name" name="company_name"required/>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                    <input type="email" className="form-control" placeholder="Email" name="email"required/>
                </div>
                <div className="col-8 pt-3  mx-auto">
                  <div class="text-center"style={{marginTop: "-6%"}}>
                  <input type="submit" id="button-19" className="btn btn-info" value="DOWNLOAD"></input>
                  </div>
                </div>
                <br/>
            </div>
        </form>
        </div>

            
           
      </div>



<div class="col-md-6">

<div class="text-center"style={{marginTop: "29%"}}>
<a href="/book-a-call" ><button id="button-37">Book an appointment <span>&#8594;</span></button></a>
</div>

<p style={{textAlign:"center"}}>Or Make a Call:</p>
<p style={{textAlign:"center",fontSize:"22px",fontWeight:"900",marginTop:"-3%"}}>+1 (415) 799-7876</p>

</div>
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


export default Shoptalk2;