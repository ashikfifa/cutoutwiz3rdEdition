import { render } from "@testing-library/react";
// import React from "react";
import React, { Component, useState, useEffect } from "react";
import BeforeAfterSlider from 'react-before-after-slider';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
//import Testimonial from 'react-testimonial';
//import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';
import Slider from "react-slick";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Typical from 'react-typical';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation} from ".";
const $ = window.$;



function Home(props)  {
  // window.location.href = "http://localhost:3000/fr";ceae0f9fbb24a7f45f12d479595194fc

//   var endpoint = 'https://ip-api.io/json?api_key={ceae0f9fbb24a7f45f12d479595194fc}';

// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
// 	if (this.readyState == 4 && this.status == 200) {
// 		var response = JSON.parse(this.responseText);
// 		if(response.status !== 'success') {
// 			console.log('query failed: ' + response.message);
// 			return
// 		}
// 		// Redirect
// 		if(response.countryCode == "US") {
// 			window.location.replace("https://google.com/");
// 		}
//     if(response.countryCode == "France") {
// 			window.location.replace("https://cutoutwiz.com/fr");
// 		}
//     if(response.countryCode == "Spain") {
// 			window.location.replace("https://cutoutwiz.com/es");
// 		}
//     if(response.countryCode == "Germany") {
// 			window.location.replace("https://cutoutwiz.com/de");
// 		}
//     if(response.countryCode == "Netherland") {
// 			window.location.replace("https://cutoutwiz.com/nl");
// 		}
//     if(response.countryCode == "Thailand") {
// 			window.location.replace("https://cutoutwiz.com/th");
// 		}
// 	}
// };
// xhr.open('GET', endpoint, true);
// xhr.send();

$.ajax({
  type: "GET",
  dataType: "json",
  url: 'https://ip-api.io/json?api_key=ceae0f9fbb24a7f45f12d479595194fc',
  success: function(data) {
    console.log(
      'Your ip address is ' + data.ip
        + ' city: ' + data.city
        + ' region: ' + data.region_name
        + ' country: ' + data.country_name
    );
    if(data.country_name=='France'){
      window.location.href = "https://cutoutwiz.com/fr";
    }
    if(data.country_name=='Spain'){
      window.location.href = "https://cutoutwiz.com/es";
    }
    if(data.country_name=='Germany'){
      window.location.href = "https://cutoutwiz.com/de";
    }
    if(data.country_name=='Netherlands'){
      window.location.href = "https://cutoutwiz.com/nl";
    }
    if(data.country_name=='Thailand'){
      window.location.href = "https://cutoutwiz.com/th";
    }
    
  }
});

 
  // function ipLookUp () {
  //   $.ajax('http://ip-api.com/json')
  //   .then(
  //       function success(response) {
  //           console.log('User\'s Location Data is ', response);
  //           console.log('User\'s Country', response.country);
  //           // if(response.country=='United States'){
  //           //   window.location.href = "http://localhost:3000/fr";
  //           // }
  //           if(response.country=='France'){
  //             window.location.href = "https://cutoutwiz.com/fr";
  //           }
  //           else if(response.country=='Spain'){
  //             window.location.href = "https://cutoutwiz.com/es";
  //           }
  //           else if(response.country=='Germany'){
  //             window.location.href = "https://cutoutwiz.com/de";
  //           }
  //           else if(response.country=='Netherland'){
  //             window.location.href = "https://cutoutwiz.com/nl";
  //           }
  //           else if(response.country=='Thailand'){
  //             window.location.href = "https://cutoutwiz.com/th";
  //           }
  //           else if(response.country=='Bangladesh'){
  //             window.location.href = "http://localhost:3000/th";
  //           }
  //       },
  
  //       function fail(data, status) {
  //           console.log('Request failed.  Returned status of',
  //                       status);
  //       }
        
  //   );

  // }
  
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",

    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    }]
  };
  


  return (
    
    <div className="home">
         <Router >
      <Navigation />
      </Router>
      <Helmet>
                <title>CutOutWiz : Image and Video Post Production</title>
                <meta  name="description" keywords="Product photo edinting company" content="CutOutWiz is one of the leading image and video editing company for businesses all over the world. As the world moves towards a virtual business base, product photo editing has been a very important part for any E-commerce business "  
                /> 
     </Helmet>

    <div id="homeid" style={{backgroundColor:"#ffdd0b"}}>
      <div class="container">
          <div class="row">

            <div class="col-md-6"style={{marginTop:"8%"}}>
                <p style={{fontSize:"34px",fontWeight:"500",fontFamily:"Poppins"}}>We do</p>
                
                 <p style={{fontSize:"38px",fontWeight:"700",marginTop:"-33px"}}>Image and Video</p>
                <p style={{fontSize:"38px",fontWeight:"700",marginTop:"-30px"}}>
                <Typical
                    steps={['Editing', 1000, 'Recoloring', 500, 'Retouching', 500, 'Automation', 500]}
                    loop={Infinity}
                    wrapper="p"
                />               
                </p>

                <hr id="border2"></hr>
                <p style={{fontWeight:"500",fontFamily:"Poppins"}}>Your one-stop<br/>
content post production solution</p>
                
                <div class="row">
                  <div class="col-6 col-md-4">
                  <a class="" href="https://app.cutoutwiz.com/"target="_blank"><button class="button1">FREE TRIAL</button> </a></div>
               
                <div class="col-6 col-md-8">
                <Link to="/contact-us" ><button type="button" id="button2">FREE QUOTE</button></Link>
                </div>
                
                </div>

              </div>

              <div class="col-md-6">
              <img src="assets/images/bannerpiclast.png"height="90%" width="95%" style={{marginTop:"4%"}} alt="Edited image of girl posing for photo with smile on her face"/>
              </div>             
          </div>
        </div>
      </div>

    {/* <div>{ipLookUp()}</div> */}


<div style={{backgroundColor:"#ffdd0b"}}>
      <div class="container">
      <div class="row">
            <div class="col-6 col-md">
          <div class="card" style={{width: "100%",borderRadius:"10px"}}>
              <img src="assets/images/image.png"  width="30%" height="10%" alt="Image icon"/><br/>
              <div class="card-body"style={{marginTop:"-3%"}}>
                <h4 class="card-title">16,500+</h4>
                <hr style={{width:"32%",border:"1px solid",backgroundColor:"black",opacity:"1",marginTop:"-1%"}}></hr>
                <p class="card-text"style={{marginTop:"-7%",fontWeight:"500"}}>Image<br/>Processed Daily</p>
              </div>
              </div>
          </div>
          
          <div class="col-6 col-md">
          <div class="card" style={{width: "100%",borderRadius:"10px"}}>
              <img src="assets/images/team.png"style={{marginLeft:"4%"}}  width="30%" height="10%" alt="Team icon"/><br/>
              <div class="card-body"style={{marginTop:"-3%"}}>
                <h4 class="card-title">500+</h4>
                <hr style={{width:"32%",border:"1px solid",backgroundColor:"black",opacity:"1",marginTop:"-1%"}}></hr>
                <p class="card-text"style={{marginTop:"-7%",fontWeight:"500"}}>Team<br/>Members</p>
              </div>
              </div>
          </div>

          <div class="col-6 col-md">
          <div class="card" style={{width: "100%",borderRadius:"10px"}}>
              <img src="assets/images/support.png"  width="30%" height="10%" alt="Support icon"/><br/>
              <div class="card-body"style={{marginTop:"-3%"}}id="text">
                <h4 class="card-title">365 Days</h4>
                <hr style={{width:"32%",border:"1px solid",backgroundColor:"black",opacity:"1",marginTop:"-1%"}}></hr>
                <p class="card-text"style={{marginTop:"-7%",fontWeight:"500"}}>Customer<br/>Support
</p>
              </div>
              </div>
          </div>

          <div class="col-6 col-md">
          <div class="card" style={{width: "100%",borderRadius:"10px"}}>
              <img src="assets/images/delivery.png"  width="30%" height="10%" alt="clock icon"/><br/>
              <div class="card-body"style={{marginTop:"-3%"}}>
                <h4 class="card-title">12 Hours</h4>
                <hr style={{width:"32%",border:"1px solid",backgroundColor:"black",opacity:"1",marginTop:"-1%"}}></hr>
                <p class="card-text"style={{marginTop:"-7%",fontWeight:"500"}}>Or Less<br/>Delivery Time</p>
              </div>
              </div>
          </div>

          <div class="col-md">
          <div class="card-hidden">
          <div class="card" style={{borderRadius:"10px",width: "100%"}}>
              <img src="assets/images/free-images.png"  width="30%" height="10%" alt="Free trial icon"/><br/>
              <div class="card-body"style={{marginTop:"-3%"}}>
                <h4 class="card-title">10+</h4>
                <hr style={{width:"32%",border:"1px solid",backgroundColor:"black",opacity:"1",marginTop:"-1%"}}></hr>
                <p class="card-text"style={{marginTop:"-7%",fontWeight:"500"}}>Free<br/>Trial Images</p>
              </div>
              </div>
              </div>
          </div>
          </div>
        </div>
      </div>


<div class="spacew">
        
</div>
<br/>
<div class="container" id="images">
    <h1 style={{textAlign:"center",fontFamily:"poppins",fontWeight:"700"}}>Services</h1>
    <p style={{textAlign:"center",fontFamily:"poppins",fontSize:"20px",fontWeight:"100"}}>Image Editing Service</p><br/><br/>

    <div class="row"style={{marginTop:"-3%"}}>
      <div class="col-md-3">
      <BeforeAfterSlider 
          before= {"assets/images/Photo-Retouch-Afterlive.jpg"} alt="Beautiful girl smiling elegantly"
          after={"assets/images/Photo-Retouch-before.jpg"} alt="Beautiful girl with frackles on her face smiling elegantly"
          width={260}
          height={200}
        />
        <p style={{fontWeight:"700",textAlign:"center"}}>Photo Retouch</p>
        </div>

      <div class="col-md-3">
      <BeforeAfterSlider
          before={"assets/images/Background-Removal-After.jpg"} alt="Red and white sports shoes on a transparent background"
          after={"assets/images/Background-Removal-Before.jpg"} alt="Red and white sports shoes on a red background"
          width={260}
          height={200}
        />
        <p style={{fontWeight:"700",textAlign:"center"}}>Background Removal</p>
      </div>

      <div class="col-md-3">
      <BeforeAfterSlider
          before={"assets/images/Photo-Recolor-After.jpg"} alt="Stylish girl wearing yellow shirt and and white scart posing with a candy"
          after={"assets/images/Photo-Recolor-Before.jpg"} alt="Stylish girl wearing red shirt and white scart posing with a candy"
          width={260}
          height={200}
        />
        <p style={{fontWeight:"700",textAlign:"center"}}>Photo Recolor</p>
      </div>

      <div class="col-md-3">
      <BeforeAfterSlider
          before={"assets/images/Shadow-Creation-Before.jpg"} alt="A white vase on a white surface and white background"
          after={"assets/images/Shadow-Creation-After-1.jpg"} alt="A white vase on white background"
          width={260}
          height={200}
        />
        <p style={{fontWeight:"700",textAlign:"center"}}>Shadow Creation</p>
      </div>


    </div>

    <br/><br/>

    <div class="row">

      <div class="col-md-3">
      <BeforeAfterSlider
          before={"assets/images/Ghost-Mannequin-After.jpg"} alt="A grey t-shirt on white background"
          after={"assets/images/Ghost-Mannequin-Before.jpg"} alt="A grey t-shirt on a mannequin with grey background"
          width={260}
          height={200}
        />
        <p style={{fontWeight:"700",textAlign:"center"}}>Ghost Mannequin</p>
      </div>

      <div class="col-md-3">
      <BeforeAfterSlider
          before={"assets/images/Color-Correction_After.jpg"} alt="BBQ chicken decorated with small tomato and letucce served with tomato sauce on a ciramic plate"
          after={"assets/images/Color-Correction_Before.jpg"} alt="BBQ chicken decorated with small tomato and letucce served with tomato sauce on a ciramic plate"
          width={260}
          height={200}
        />
        <p style={{fontWeight:"700",textAlign:"center"}}>Color Correction</p>
      </div>

      <div class="col-md-3">
      <BeforeAfterSlider
          before={"assets/images/Image-Masking-After.jpg"} alt="A dog with wild eyes running on white background"
          after={"assets/images/Image-Masking-Before.jpg"} alt="A dog with wild eyes running on a field"
          width={260}
          height={200}
          textAlign={"center"}
        />
        <p style={{fontWeight:"700",textAlign:"center"}}>Image Masking</p>
      </div>
      
      <div class="col-md-3">
      <BeforeAfterSlider
          before={"assets/images/Manipulation-After.jpg"} alt="Rice served with shrimps on a glass plate and vegetables lyring around"
          after={"assets/images/Manipulation-Before.jpg"} alt="Rice served with shrimps on a glass plate "
          width={260}
          height={200}
        />
        <p style={{fontWeight:"700",textAlign:"center"}}>Image Manipulation</p>
      </div>
    </div>
    <br/><br/>
    </div>

<div style={{backgroundColor:"#f3f5f7"}}>
  <br/>
    <div class="container" id="videos">
    <h1 style={{textAlign:"center",fontFamily:"poppins",fontWeight:"700"}}>Services</h1>
    <p style={{textAlign:"center",fontFamily:"poppins",fontSize:"20px",fontWeight:"100"}}>Video Editing Service</p><br/><br/>

    
    <div class="row"style={{marginTop:"-5%"}}>
      <div class="col-md-6">
      <video  height="100%" width="100%" controls="controls" poster="assets/images/Screenshot (7).png"alt="audio-editing-service-poster" style={{cursor:"pointer"}}> <source src="assets/images/Audio_Editing_Service_1.mp4"></source></video>
      <p style={{textAlign:"center"}}>Audio Editing Service</p>
      </div>

      <div class="col-md-6">
      <video  height="99.5%" width="100%" controls="controls" poster="assets/images/cropping.png"alt="video-cropping-service-poster"> <source src="assets/images/Video_Cropping_Service_1.mp4"></source></video>
      <p style={{textAlign:"center"}}>Video Cropping Service</p>
      </div>
    </div>
    <br/>

    <div class="row">
      <div class="col-md-6">
      <video  height="100%" width="100%" controls="controls" poster="assets/images/subtittle.png"alt="subtittle-addition-service-poster"> <source src="assets/images/Subtitile_Addition_Service_1.mp4"></source></video>
      <p style={{textAlign:"center"}}>Subtitle Addition Service</p>
      </div>

      <div class="col-md-6">
      <video  height="99.5%" width="100%" controls="controls" poster="assets/images/tittle.png"alt="tittle-addition-service-poster"> <source src="assets/images/Title_Addition_Service_1.mp4"></source></video>
      <p style={{textAlign:"center"}}>Title Addition Service</p>
      </div>
    </div>
<br/><br/><br/><br/>
</div>
</div>
   

  <div class="container"id="apps"style={{marginTop:"4%"}}>
    <h1 style={{textAlign:"center",fontWeight:"500"}}>Apps & Integrations</h1><br/>
    <p style={{textAlign:"center",marginTop:"-1%",fontSize:"20px"}}>Our apps are featured in major E-commerce platforms</p><br/><br/>

    <div class="row">

      <div class="col-md"id="logopop">
      <a href="https://apps.shopify.com/cutoutwiz" target="_blank"><img src="assets/images/shopify (2).png" class="rounded mx-auto d-block" height="65px" width="200px" alt="Shopify logo"/>
     </a> </div>

      <div class="col-md" id="logopop"style={{marginTop:"7px"}}>
      <a href="https://sellercentral.amazon.com/gspn/provider-details/Imaging/284b7303-cec9-403e-b763-375399824520?ref_=sc_gspn_ilst_idt-284b7303&localeSelection=en_US&sellFrom=US&sellIn=US" target="_blank"><img src="assets/images/amazon.png" class="rounded mx-auto d-block" height="65px" width="200px" alt="Amazon logo"/>
      </a></div>

      <div class="col-md"id="logopop">
      <a href="https://app.cutoutwiz.com/" target="_blank"><img src="assets/images/cut.png" class="rounded mx-auto d-block" height="65px" width="200px" alt="Cutoutwiz logo"/>
      </a></div>

      <div class="col-md"id="logopop">
      <a href="https://www.bigcommerce.com/apps/cutoutwiz/" target="_blank"><img src="assets/images/big.png"class="rounded mx-auto d-block" height="65px" width="200px" alt="Bigcommerce logo"/>
      </a></div>

      <div class="col-md"id="logopop">
      <a href="https://www.shotflow.com/" target="_blank"><img src="assets/images/shotflow (2).png" class="rounded mx-auto d-block" height="65px" width="200px"  alt="Shotflow logo"/>
      </a></div>



    </div>
    </div>


<div class="space-up-testi"style={{marginTop:"5%"}}>

</div>

<div style={{backgroundColor:"#ffdd0b",marginBottom:"6%"}}>
  <br/><br/>
<div class="container"id="overflow">
{/* <div class="container"id="overflow"> */}
       
        <Slider {...settings}>
          <div class="card"id="" style={{width: "8rem",borderRadius:"10px"}}>
              <img src="assets/images/quote (1).png" class="rounded mx-auto d-block"  width="70" height="50" alt=""style={{marginTop:"11%"}}/><br/>
              <div class="card-body">
                <p class="card-text"style={{textAlign:"center",fontWeight:"200",fontSize:"13px"}}>I am very pleased with their work.
                 The team is very patient and accommodating to all my requests. I will definitely work with them.</p>
                 <img src="assets/images/5 star.png" class="rounded mx-auto d-block"  width="30%" height="30%" alt=""/>
              </div>
              <p style={{textAlign:"center",fontWeight:"700"}}>zasy chua</p>
              <br/>
          </div>

          <div class="card"id="" style={{width: "8rem",borderRadius:"10px"}}>
              <img src="assets/images/quote (1).png" class="rounded mx-auto d-block"  width="70" height="50" alt=""style={{marginTop:"11%"}}/><br/>
              <div class="card-body">
                <p class="card-text"style={{textAlign:"center",fontWeight:"200",fontSize:"13px"}}>Very good service, was very 
                patient with me in my back and fro amendments. I would say it's very affordable too. Jobs are delivered.</p>
                 <img src="assets/images/5 star.png" class="rounded mx-auto d-block" width="30%" height="30%" alt=""/>
              </div>
              <p style={{textAlign:"center",fontWeight:"700"}}>Jia Jia</p>
              <br/>
          </div>
          <div class="card"id="" style={{width: "8rem",borderRadius:"10px"}}>
              <img src="assets/images/quote (1).png" class="rounded mx-auto d-block"  width="70" height="50" alt=""style={{marginTop:"11%"}}/><br/>
              <div class="card-body">
                <p class="card-text"style={{textAlign:"center",fontWeight:"200",fontSize:"13px"}}>I love this app. We've
                 been using CutOutWiz for some time. I am continually impressed with the results and stellar customer support.</p>
                 <img src="assets/images/5 star.png" class="rounded mx-auto d-block"  width="30%" height="30%" alt=""/>
              </div>
              <p style={{textAlign:"center",fontWeight:"700"}}>Kamo Fitness</p>
              <br/>
          </div>
          <div class="card"id=""  style={{width: "12rem",borderRadius:"10px"}}>
              <img src="assets/images/quote (1).png" class="rounded mx-auto d-block"  width="70" height="50" alt=""style={{marginTop:"11%"}}/><br/>
              <div class="card-body">
                <p class="card-text"style={{textAlign:"center",fontWeight:"200",fontSize:"13px"}}>I was having difficulties
                 with proper images and quality but the Rep called and walked me through proper image sizing and lighting.</p>
                 <img src="assets/images/5 star.png" class="rounded mx-auto d-block"  width="30%" height="30%" alt=""/>
              </div>
              <p style={{textAlign:"center",fontWeight:"700"}}>Bèl Bagay Swimwear</p>
              <br/>
          </div>
          <div class="card"id=""  style={{width: "12rem",borderRadius:"10px"}}>
              <img src="assets/images/quote (1).png" class="rounded mx-auto d-block"  width="70" height="50" alt=""style={{marginTop:"11%"}}/><br/>
              <div class="card-body">
                <p class="card-text"style={{textAlign:"center",fontWeight:"200",fontSize:"13px"}}>I have tried several image background removal services, some cheaper
than here. But remember you get what you pay.</p>
                 <img src="assets/images/5 star.png" class="rounded mx-auto d-block"  width="30%" height="30%" alt=""/>
              </div>
              <p style={{textAlign:"center",fontWeight:"700"}}>General Unique</p>
              <br/>
          </div>
        </Slider>
      </div>
      <div class="spacew">

</div>
    </div>


    <div class="container"id="prices"style={{marginBottom:"4%"}}>
    <h1 style={{textAlign:"center",fontFamily:""}}>Choose your plan</h1>
    <p style={{textAlign:"center",marginTop:"-1%",fontSize:"20px"}}>Our packages are just what your store needs</p><br/>

    <div class="row">
      <div class="col-md-4">

      <h2 style={{fontWeight:"700",marginTop:"35%"}}>Check Out Our Prices</h2>

      <p style={{textAlign: "justify"}}>We offer multiple pricing options to choose
        from that will help you achieve your goals.
         Choose the one that meets your demands
          perfectly. In case you are looking for
           something else, or want a quote from us for
            any sort of customization, feel free to send us
             a text through our Contact Us form.</p>
      
      </div>
      <div class="col-md-8">
<div class="bodyp">
  <div class="containerp">
      <div class="column">
        <div class="pricing-card basic">
          <div class="pricing-header">
            <span class="plan-title">BASIC PLAN</span>
            <div class="price-circle">
            <span class="info" style={{paddingTop: "22%",fontSize: "14px",color: "black"}}>starts from</span>
              <span class="price-title" style={{marginTop: "-29%"}}>
                <small>$</small><span>1.19</span>
              </span>
              <span class="info" style={{marginTop: "-6%"}}>/ Images</span>
            </div>
          </div>

          <ul>
            <li>
              <strong>5</strong> Domains
            </li>
            <li>
              <strong>1-100</strong> IMAGES/ORDER
            </li>
            <li>
              <strong>10 </strong> IMAGES-FREE
            </li>
            <li>
              <strong>1</strong> MONTH FREE STORAGE
            </li>
            <li>
              <strong>24/7</strong> CUSTOMER SUPPORT
            </li>
          </ul>
          <div class="buy-button-box">
            <a href="https://app.cutoutwiz.com/" target="_blank" class="buy-now">ORDER NOW</a>
          </div>        
        </div>
      </div>
      <div class="column">
        <div class="pricing-card echo">
          <div class="pricing-header">
            <span class="plan-title">STANDARD</span>
            <div class="price-circle">
            <span class="info" style={{paddingTop: "22%",fontSize: "14px",color: "black"}}>starts from</span>
              <span class="price-title" style={{marginTop: "-29%"}}>
                <small>$</small><span>0.99</span>
              </span>
              <span class="info" style={{marginTop: "-6%"}}>/ Images</span>
            </div>
          </div>

          <ul>
            <li>
              <strong>5</strong> Domains
            </li>
            <li>
              <strong>101-500</strong> IMAGES/ORDER
            </li>
            <li>
              <strong>10 </strong> IMAGES-FREE
            </li>
            <li>
              <strong>2</strong> MONTH FREE STORAGE
            </li>
            <li>
              <strong>24/7</strong> CUSTOMER SUPPORT
            </li>
          </ul>
          <div class="buy-button-box">
            <a href="https://app.cutoutwiz.com/"target="_blank" class="buy-now">ORDER NOW</a>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="pricing-card pro">
          <div class="popular">POPULAR</div>
          <div class="pricing-header">
            <span class="plan-title">PREMIUM</span>
            <div class="price-circle">
              <span class="price-title">
               <span style={{fontSize:"21px"}}> <strong>CONTACT </strong></span>
               <span style={{marginTop:"-5%"}}>US</span>
                <br/>
                {/* <span style={{fontSize:"17px"}}> US </span> */}
              </span>
              
               {/* <span class="info">US</span> */}
            </div>
          </div>
          <ul>
            <li>
              <strong>10</strong> Domains
            </li>
            <li>
              <strong>500</strong> ꝏ IMAGES/ORDER
            </li>
            <li>
              <strong>10 </strong> IMAGES-FREE
            </li>
            <li>
              <strong>3</strong> MONTHS FREE STORAGE
            </li>
            <li>
              <strong>24/7</strong> CUSTOMER SUPPORT
            </li>
          </ul>
          <div class="buy-button-box">
            <Link to="/contact-us" target="_blank" class="buy-now">ORDER NOW</Link>
          </div>
        </div>
      </div>
      </div>
      </div>


      </div>

    </div>

    </div>

  
<div style={{backgroundColor:"#f3f5f7"}}>
<br/><br/>
<div class="container"id="howitworks">
    <h1 style={{textAlign:"center"}}>How to Place an Order</h1>

    <p style={{textAlign:"center",marginTop:"-1%",fontSize:"20px"}}>Just follow these simple steps, and we will take it from There </p> 

    <div class="row">
      <div class="col-md-6" style={{marginTop:"3%"}}>
        <p>
       <b> Step 1: </b><br/>
          Sign in to Begin <br/>
          <b> Step 2: </b><br/>
          Choose your preferred subscription plan<br/>
          <b> Step 3: </b><br/>
          Go to your account to place an order<br/>
          <b> Step 4: </b><br/>
          Upload the images you want us to edit<br/>
          <b> Step 5: </b><br/>
          We will process the images for you<br/>
          <b> Step 6: </b><br/>
          Download the edited images
        </p>
      </div>
      <div class="col-md-6">
      <video height="100%" width="100%"  controls autoplay> <source src="assets/images/Key-features-Video.mp4"></source></video>
     
      </div>
    </div>
</div>

<br/><br/>
</div>


<div class="containerback"id="contactus">
  <img src="assets/images/contact_front.jpg" height="350px" width="100%" id="gulabi"alt="People working in customer service"/>
  <div class="centered">
  <h2>We are Here To<br/><span style={{fontWeight:"600"}}>Answer your Every query</span><br/></h2>
  <Link to="/contact-us"><button type="button" id="button17">Contact Us</button></Link>
  </div>
</div> 

<div style={{marginBottom:"4%"}}>
    <h1 style={{textAlign:"center",marginTop:"4%"}}>Our Story</h1>

<p style={{textAlign:"center",marginTop:"-0.5%",fontSize:"20px"}}>Who we are and how we Came to be</p> 


<div class="container"style={{marginTop:"2%"}}>
    <div class="row">
      <div class="col-md-6"style={{height:"max-content"}}>
      <img src="assets/images/story3.jpg" height="430px" width="100%" alt="The kow company office space" />
      </div>
      <div class="col-md-6" >

        <h2>How We Help You<br/>
Achieve Your Business <br/>
Goals</h2>

<hr id="border5"></hr>


<p style={{textAlign:"justify"}}>CutOutWiz is one of the leading image and video editing 
   company for businesses all over the world. As the world moves
    towards a virtual future, with online product photo editing becoming
     more and more accessible, HD product pictures are what essentially
      drive sales. We are the trusted online image editing partner for
       many renowned ecommerce companies all over the world across a
        diverse range of industries. We offer every possible image editing
         (processing) service from commonly used services such as
          background image removal, color correction, image retouching,
           invisible mannequin, to even complex services such as image
            manipulation. The reason behind our success is that we believe in
             customer first and providing the best quality service.</p>
     
      </div>
    </div>
    </div>
</div>
    <div style={{backgroundColor:"#f3f5f7"}}>
      <br/><br/>
    <div id="blogs">
    <div class="container">

    <h1 style={{textAlign:"center"}}>Our Blogs</h1>

<p style={{textAlign:"center",marginTop:"-1%",fontSize:"20px"}}>Learn more on different industry verticals and practices in our blogs</p>

    </div>
   
   


    <div class="container">
      <div class="row">


        <div class="col-md-4">
        <Card>
          <div class="containerback">
         
          <Link to='/blog'>
          <img src="assets/images/readbackgrnd.jpg" width="100%" height="100%" alt="Read Our Blogs photo"/>
          
        <div class="centered">
          <h2 style={{color:"black"}}>Read Our</h2>
          <h3 style={{color:"black",fontWeight:"600",fontSize:"35px"}}>BLOGS</h3>
          
        </div>
        </Link>
        </div>
        </Card>
        </div>

        <div class="col-md-4">
      <Card  style={{height:"98%"}}>
        <img src="assets/images/Blog banner.png" height="58%" width="100%" alt="Celebratory lights and decorations on a yellow background"/>
        <div style={{padding:"2%"}}>
        <Link to="/top-new-year-resolution-for-your-online-store" style={{textDecoration:"none",color:"black"}}><b>New Year’s Resolutions – Write your e-commerce success story today!</b></Link>
          <p style={{textAlign:"justify"}}>All e-commerce business owners know how fast-growing and ever changing the online business world is. You’ve been working at the same...</p>
          <Link to="/top-new-year-resolution-for-your-online-store"><button id="button7">Read More</button></Link>
         </div>
    </Card>
      </div>

      <div class="col-md-4">
      <Card style={{height:"98%"}}>
        <img src="assets/images/1.jpg" height="58%" width="100%" alt="French fries salad and other food items with forks and and sauce on a yellow background"/>
        <div style={{padding:"2%"}}>
        <Link to="/top-8-food-photography-tips-for-beginners" style={{textDecoration:"none",color:"black"}}><b>Top 8 Food Photography Tips For Beginners</b></Link>
          <p style={{textAlign:"justify"}}>Whenever we enter a restaurant, we’re given a menu with
           the names and photos of different food items. We often place our orders based on the appearance of...</p>
          <Link to="/top-8-food-photography-tips-for-beginners"><button id="button7">Read More</button></Link>
         </div>
    </Card>
      </div>
      
      </div>

      <div class="row">

      <div class="col-md-4">
      <Card  style={{height:"98%"}}>
        <img src="assets/images/types-of-photography.jpg" height="58%" width="100%" alt="Photographer standing on a mountain with a camera on hard ready to capture the nature and mountains"/>
        <div style={{padding:"2%"}}>
        <Link to="/types-of-photography-which-one-drive-your-inner-passion-most" style={{textDecoration:"none",color:"black"}}><b>Types of Photography: Which one drives your inner passion most?</b></Link>
          <p style={{textAlign:"justify"}}>Photographs are our way of capturing the world as we see it. It’s a medium of expressing our inner thoughts and holding onto memories...</p>
          <Link to="/types-of-photography"><button id="button7">Read More</button></Link>
         </div>
    </Card>
      </div>

      <div class="col-md-4">
      <Card style={{height:"98%"}}>
        <img src="assets/images/latestblog.jpg" height="58%" width="100%"alt="Girl wearing a yellow sweater pointing to a piece of paper "/>
        <div style={{padding:"2%"}}>
        <Link to="/7-creative-winter-marketing-ideas-for-e-commerce-businesses" style={{textDecoration:"none",color:"black"}}> <b>7 Creative Winter Marketing Ideas for E-commerce Businesses</b></Link>
          <p style={{textAlign:"justify"}}>Since you are considering starting your own small business, 
          we can guess that you are a cheerful aspirant filled with passion and new....</p>
          <Link to="/7-creative-winter-marketing-ideas-for-e-commerce-businesses"><button id="button7">Read More</button></Link>
         </div>
    </Card>
      </div>
      <div class="col-md-4">
      <Card  style={{height:"98%"}}>
        <img src="assets/images/Blog-23.jpg" height="58%" width="100%" alt="Girl photographer capturing ceramic bowls on her professional camera"/>
        <div style={{padding:"2%"}}>
        <Link to="/easy-product-photography-solutions-for-small-business" style={{textDecoration:"none",color:"black"}}><b>Easy Product Photography Solutions for Small Business</b></Link>
          <p style={{textAlign:"justify"}}>The beginning of winter fills our minds with numerous excitements.
           It’s the season of Christmas, snowfall, and New Year. With a sudden change in...</p>
           <Link to="/easy-product-photography-solutions-for-small-business"><button id="button7">Read More</button></Link>
         </div>
    </Card>
    </div>

    </div>
  </div>
  </div>
  <br/><br/>
</div>

<div class="footer"style={{backgroundColor:"#231f20"}}>
    <div class="container">
    <div class="row">
    <div class="col-md-3"style={{marginTop:"4%"}}>
    <Link to="/" target="_blank"><img src="assets/images/ailogo.png"style={{marginTop:"3%"}} width="170" height="40" alt=""/></Link>

    <p style={{textAlign:"justify",color:"#b7b9bb",marginTop:"4%"}}>CutOutWiz is one of the leading image and video editing company for businesses all over the world.</p>
    <a href="https://www.facebook.com/cutoutwiz"target="_blank" class="fa fa-facebook"></a>
    <a href="https://twitter.com/cut_wiz?s=09"target="_blank" class="fa fa-twitter"></a>
    <a href="https://www.linkedin.com/company/cutoutwiz-ltd"target="_blank" class="fa fa-linkedin"></a>
    <a href="https://www.youtube.com/channel/UClIkCcEBksZigP56p593fDQ"target="_blank" class="fa fa-youtube"></a>
    <a href="https://www.instagram.com/accounts/login/"target="_blank" class="fa fa-instagram"></a>
    </div>
   
        <div class="col-6 col-md-2"style={{marginTop:"5%"}}>
            <b style={{color:"white",fontSize:"20px"}}>Menu</b>

            <p style={{color:"#b7b9bb",marginTop:"8%"}}>
         <Link to="/" target="_blank"  style={{textDecoration:"none",color:"#b7b9bb"}}> Home</Link> <br/>
         <Link to="#apps" target="_blank"  style={{textDecoration:"none",color:"#b7b9bb"}}> Features</Link><br/>
         <Link to="#images" target="_blank"  style={{textDecoration:"none",color:"#b7b9bb"}}>  Services</Link><br/>
         <Link to="#prices" target="_blank"  style={{textDecoration:"none",color:"#b7b9bb"}}>  Pricing</Link><br/>
         <Link to="#blogs" target="_blank"  style={{textDecoration:"none",color:"#b7b9bb"}}> Blogs</Link>
            </p>
        </div>

        <div class="col-6 col-md-2"style={{marginTop:"5%"}}>
        <b style={{color:"white",fontSize:"20px"}}>Features</b>
            <p style={{color:"white",marginTop:"8%"}}>
            <a href="https://apps.shopify.com/cutoutwiz" target="_blank"  style={{textDecoration:"none",color:"#b7b9bb"}}>Shoppify App</a> <br/>
            <a href="https://sellercentral.amazon.com/gspn/provider-details/Imaging/284b7303-cec9-403e-b763-375399824520?ref_=sc_gspn_ilst_idt-284b7303&localeSelection=en_US&sellFrom=US&sellIn=US" target="_blank" style={{textDecoration:"none",color:"#b7b9bb"}}> AmazonSPN </a><br/>
            <a href="https://app.cutoutwiz.com" target="_blank" style={{textDecoration:"none",color:"#b7b9bb"}}> Cutoutwiz</a><br/>
            <a href="https://www.bigcommerce.com/apps/cutoutwiz" target="_blank" style={{textDecoration:"none",color:"#b7b9bb"}}> BigCommerce App</a><br/>
            <a href="https://www.shotflow.com/" target="_blank" style={{textDecoration:"none",color:"#b7b9bb"}}> Shotflow</a>
            </p>
        </div>

        <div class="col-6 col-md-2"style={{marginTop:"5%"}}>
        <b style={{color:"white",fontSize:"20px"}}>Useful Links</b>

          <p style={{color:"white",marginTop:"8%"}}>
         <Link to="/privacy-policy" target="_blank"style={{textDecoration:"none",color:"#b7b9bb"}}> Privacy Policy </Link> <br/>
         <Link to="/terms-and-conditions" target="_blank"style={{textDecoration:"none",color:"#b7b9bb"}}> Terms & Condition</Link><br/>
         <Link to="/contact-us" target="_blank"style={{textDecoration:"none",color:"#b7b9bb"}}>Contact Us</Link> <br/>
          <a href="https://app.cutoutwiz.com/" target="_blank" style={{textDecoration:"none",color:"#b7b9bb"}}>Sign Up</a> <br/>
          </p>
        </div>     
  

      <div class="col-6 col-md-3"style={{marginTop:"5%"}}>
      <b style={{color:"white",fontSize:"20px"}}>Our Address</b> <br/>   <br/>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10329.283883735325!2d90.39304891556642!3d23.749043274767246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc1fb12dbea63beca!2sCutOutWiz!5e0!3m2!1sbn!2sbd!4v1639129804206!5m2!1sbn!2sbd"
      width="70%" height="50%" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>

      </div>
      
      </div> 
    </div>
    <p style={{textAlign:"center",color:"white",padding:"8px",backgroundColor:"black"}}>Designed And Developed By <Link to="/" target="_blank"  style={{textDecoration:"none",color:"white"}}>CutOutWiz</Link></p>
    
  </div>

   </div>
   

  );
 }

// const slider = document.querySelector(".slider input");
// const img = document.querySelector(".images .img-2");
// const dragLine = document.querySelector(".slider .drag-line");
// slider.oninput = ()=>{
//   let sliderVal = slider.value;
//   dragLine.style.left = sliderVal + "%";
//   img.style.width = sliderVal + "%";
//}
export default Home;
