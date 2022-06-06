import { render } from "@testing-library/react";
// import React from "react";
import React, { Component } from "react";
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
import { Navigationne} from "./";

 function Netherland(props) {

  
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
      <Navigationne />
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
                <p style={{fontSize:"34px",fontWeight:"500",fontFamily:"Poppins"}}>Wij doen</p>
                
                 <p style={{fontSize:"38px",fontWeight:"700",marginTop:"-33px"}}>Afbeelding en video</p>
                <p style={{fontSize:"38px",fontWeight:"700",marginTop:"-30px"}}>
                <Typical
                    steps={['Bewerken', 1000, 'Opnieuw kleuren', 500, 'Retoucheren', 500, 'Automatisering', 500]}
                    loop={Infinity}
                    wrapper="p"
                />               
                </p>

                <hr id="border2"></hr>
                <p style={{fontWeight:"500",fontFamily:"Poppins"}}>Uw one-stop<br/>
                oplossing voor postproductie van inhoud</p>
                
                <div class="row">
                  <div class="col-6 col-md-4">
                  <a class="" href="https://app.cutoutwiz.com/"target="_blank"><button class="button1">GRAT PROEF</button> </a></div>
               
                <div class="col-6 col-md-8">
                <Link target="_blank" to="/nl/contact-us" ><button type="button" id="button2">GRATIS OFFERTE</button></Link>
                </div>
                
                </div>

              </div>

              <div class="col-md-6">
              <img src="assets/images/bannerpiclast.png"height="90%" width="95%" style={{marginTop:"4%"}} alt="Edited image of girl posing for photo with smile on her face"/>
              </div>             
          </div>
        </div>
      </div>


<div style={{backgroundColor:"#ffdd0b"}}>
      <div class="container">
      <div class="row">
            <div class="col-6 col-md">
          <div class="card" style={{width: "100%",borderRadius:"10px"}}>
              <img src="assets/images/image.png"  width="30%" height="10%" alt="Image icon"/><br/>
              <div class="card-body"style={{marginTop:"-3%"}}>
                <h4 class="card-title">16,500+</h4>
                <hr style={{width:"32%",border:"1px solid",backgroundColor:"black",opacity:"1",marginTop:"-1%"}}></hr>
                <p class="card-text"style={{marginTop:"-7%",fontWeight:"500"}}>Afbeelding<br/>Dagelijks verwerkt</p>
              </div>
              </div>
          </div>
          
          <div class="col-6 col-md">
          <div class="card" style={{width: "100%",borderRadius:"10px"}}>
              <img src="assets/images/team.png"style={{marginLeft:"4%"}}  width="30%" height="10%" alt="Team icon"/><br/>
              <div class="card-body"style={{marginTop:"-3%"}}>
                <h4 class="card-title">500+</h4>
                <hr style={{width:"32%",border:"1px solid",backgroundColor:"black",opacity:"1",marginTop:"-1%"}}></hr>
                <p class="card-text"style={{marginTop:"-7%",fontWeight:"500"}}>Team<br/>Leden</p>
              </div>
              </div>
          </div>

          <div class="col-6 col-md">
          <div class="card" style={{width: "100%",borderRadius:"10px"}}>
              <img src="assets/images/support.png"  width="30%" height="10%" alt="Support icon"/><br/>
              <div class="card-body"style={{marginTop:"-3%"}}id="text">
                <h4 class="card-title">365 Dagen</h4>
                <hr style={{width:"32%",border:"1px solid",backgroundColor:"black",opacity:"1",marginTop:"-1%"}}></hr>
                <p class="card-text"style={{marginTop:"-7%",fontWeight:"500"}}>Klant<br/>Steun
</p>
              </div>
              </div>
          </div>

          <div class="col-6 col-md">
          <div class="card" style={{width: "100%",borderRadius:"10px"}}>
              <img src="assets/images/delivery.png"  width="30%" height="10%" alt="clock icon"/><br/>
              <div class="card-body"style={{marginTop:"-3%"}}>
                <h4 class="card-title">12 Uren</h4>
                <hr style={{width:"32%",border:"1px solid",backgroundColor:"black",opacity:"1",marginTop:"-1%"}}></hr>
                <p class="card-text"style={{marginTop:"-7%",fontWeight:"500"}}>Of Minder<br/>Levering Tijd</p>
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
                <p class="card-text"style={{marginTop:"-7%",fontWeight:"500"}}>Vrij<br/>Proces Beelden</p>
              </div>
              </div>
              </div>
          </div>
          </div></div></div>


<div class="spacew">
        
</div>
<br/>
<div class="container" id="images">
    <h1 style={{textAlign:"center",fontFamily:"poppins",fontWeight:"700"}}>Diensten</h1>
    <p style={{textAlign:"center",fontFamily:"poppins",fontSize:"20px",fontWeight:"100"}}>Afbeelding Bewerken Diensten</p><br/><br/>

    <div class="row"style={{marginTop:"-3%"}}>
      <div class="col-md-3">
      <BeforeAfterSlider 
          before= {"assets/images/Photo-Retouch-Afterlive.jpg"} alt="Beautiful girl smiling elegantly"
          after={"assets/images/Photo-Retouch-before.jpg"} alt="Beautiful girl with frackles on her face smiling elegantly"
          width={260}
          height={200}
        />
        <p style={{fontWeight:"700",textAlign:"center"}}>Foto Retoucheren</p>
        </div>

      <div class="col-md-3">
      <BeforeAfterSlider
          before={"assets/images/Background-Removal-After.jpg"} alt="Red and white sports shoes on a transparent background"
          after={"assets/images/Background-Removal-Before.jpg"} alt="Red and white sports shoes on a red background"
          width={260}
          height={200}
        />
        <p style={{fontWeight:"700",textAlign:"center"}}>Achtergrond Verwijdering</p>
      </div>

      <div class="col-md-3">
      <BeforeAfterSlider
          before={"assets/images/Photo-Recolor-After.jpg"} alt="Stylish girl wearing yellow shirt and and white scart posing with a candy"
          after={"assets/images/Photo-Recolor-Before.jpg"} alt="Stylish girl wearing red shirt and white scart posing with a candy"
          width={260}
          height={200}
        />
        <p style={{fontWeight:"700",textAlign:"center"}}>Foto Opnieuw kleuren</p>
      </div>

      <div class="col-md-3">
      <BeforeAfterSlider
          before={"assets/images/Shadow-Creation-Before.jpg"} alt="A white vase on a white surface and white background"
          after={"assets/images/Shadow-Creation-After-1.jpg"} alt="A white vase on white background"
          width={260}
          height={200}
        />
        <p style={{fontWeight:"700",textAlign:"center"}}>Schaduw creatie</p>
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
        <p style={{fontWeight:"700",textAlign:"center"}}>Spook Mannequin</p>
      </div>

      <div class="col-md-3">
      <BeforeAfterSlider
          before={"assets/images/Color-Correction_After.jpg"} alt="BBQ chicken decorated with small tomato and letucce served with tomato sauce on a ciramic plate"
          after={"assets/images/Color-Correction_Before.jpg"} alt="BBQ chicken decorated with small tomato and letucce served with tomato sauce on a ciramic plate"
          width={260}
          height={200}
        />
        <p style={{fontWeight:"700",textAlign:"center"}}>Kleur Correctie</p>
      </div>

      <div class="col-md-3">
      <BeforeAfterSlider
          before={"assets/images/Image-Masking-After.jpg"} alt="A dog with wild eyes running on white background"
          after={"assets/images/Image-Masking-Before.jpg"} alt="A dog with wild eyes running on a field"
          width={260}
          height={200}
          textAlign={"center"}
        />
        <p style={{fontWeight:"700",textAlign:"center"}}>Afbeelding Maskeren</p>
      </div>
      
      <div class="col-md-3">
      <BeforeAfterSlider
          before={"assets/images/Manipulation-After.jpg"} alt="Rice served with shrimps on a glass plate and vegetables lyring around"
          after={"assets/images/Manipulation-Before.jpg"} alt="Rice served with shrimps on a glass plate "
          width={260}
          height={200}
        />
        <p style={{fontWeight:"700",textAlign:"center"}}>Afbeelding Manipulatie</p>
      </div>
    </div>
    <br/><br/>
    </div>

<div style={{backgroundColor:"#f3f5f7"}}>
  <br/>
    <div class="container" id="videos">
    <h1 style={{textAlign:"center",fontFamily:"poppins",fontWeight:"700"}}>Diensten</h1>
    <p style={{textAlign:"center",fontFamily:"poppins",fontSize:"20px",fontWeight:"100"}}>Video Bewerken Diensten</p><br/><br/>

    
    <div class="row"style={{marginTop:"-5%"}}>
      <div class="col-md-6">
      <video  height="100%" width="100%" controls="controls" poster="assets/images/Screenshot (7).png"alt="audio-editing-service-poster" style={{cursor:"pointer"}}> <source src="assets/images/Audio_Editing_Service_1.mp4"></source></video>
      <p style={{textAlign:"center"}}>Audio Bewerken Diensten</p>
      </div>

      <div class="col-md-6">
      <video  height="99.5%" width="100%" controls="controls" poster="assets/images/cropping.png"alt="video-cropping-service-poster"> <source src="assets/images/Video_Cropping_Service_1.mp4"></source></video>
      <p style={{textAlign:"center"}}>Video Bijsnijden Diensten</p>
      </div>
    </div>
    <br/>

    <div class="row">
      <div class="col-md-6">
      <video  height="100%" width="100%" controls="controls" poster="assets/images/subtittle.png"alt="subtittle-addition-service-poster"> <source src="assets/images/Subtitile_Addition_Service_1.mp4"></source></video>
      <p style={{textAlign:"center"}}>Ondertitel Toevoeging Diensten</p>
      </div>

      <div class="col-md-6">
      <video  height="99.5%" width="100%" controls="controls" poster="assets/images/tittle.png"alt="tittle-addition-service-poster"> <source src="assets/images/Title_Addition_Service_1.mp4"></source></video>
      <p style={{textAlign:"center"}}>Titel Toevoeging Diensten</p>
      </div>
    </div>
<br/><br/><br/><br/>
</div>
</div>
   

  <div class="container"id="apps"style={{marginTop:"4%"}}>
    <h1 style={{textAlign:"center",fontWeight:"500"}}>Apps & Integraties</h1><br/>
    <p style={{textAlign:"center",marginTop:"-1%",fontSize:"20px"}}>Onze apps zijn opgenomen in de belangrijkste e-commerceplatforms</p><br/><br/>

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
    <h1 style={{textAlign:"center",fontFamily:""}}>Kies je abonnement</h1>
    <p style={{textAlign:"center",marginTop:"-1%",fontSize:"20px"}}>Onze pakketten zijn precies wat uw winkel nodig heeft</p><br/>

    <div class="row">
      <div class="col-md-4">

      <h2 style={{fontWeight:"700",marginTop:"35%"}}>Bekijk onze prijzen</h2>

      <p style={{textAlign: "justify"}}>We bieden meerdere prijsopties om uit te kiezen
         van dat zal u helpen uw doelen te bereiken.
          Kies degene die aan uw eisen voldoet
           perfect. Voor het geval u op zoek bent naar
            iets anders, of wilt u een offerte van ons voor
             elke vorm van maatwerk, stuur ons gerust!
              een tekst via ons contactformulier.</p>
      
      </div>
      <div class="col-md-8">
<div class="bodyp">
  <div class="containerp">
      <div class="column">
        <div class="pricing-card basic">
          <div class="pricing-header">
            <span class="plan-title">BASIS PLAN</span>
            <div class="price-circle">
            <span class="info" style={{paddingTop: "22%",fontSize: "14px",color: "black"}}>begint vanaf</span>
              <span class="price-title" style={{marginTop: "-29%"}}>
                <small>$</small><span>1.19</span>
              </span>
              <span class="info" style={{marginTop: "-6%"}}>/ Afbeeldingen</span>
            </div>
          </div>

          <ul>
            <li>
              <strong>5</strong> Domains
            </li>
            <li>
              <strong>1-100</strong> Afbeeldingen/VOLGORDE
            </li>
            <li>
              <strong>10 </strong> Afbeeldingen-VRIJ
            </li>
            <li>
              <strong>1</strong> MAAND VRIJ OPSLAG
            </li>
            <li>
              <strong>24/7</strong> KLANT STEUN
            </li>
          </ul>
          <div class="buy-button-box">
            <a href="https://app.cutoutwiz.com/" target="_blank" class="buy-now">VOLGORDE NU</a>
          </div>        
        </div>
      </div>
      <div class="column">
        <div class="pricing-card echo">
          <div class="pricing-header">
            <span class="plan-title">STANDAARD</span>
            <div class="price-circle">
            <span class="info" style={{paddingTop: "22%",fontSize: "14px",color: "black"}}>begint vanaf</span>
              <span class="price-title" style={{marginTop: "-29%"}}>
                <small>$</small><span>0.99</span>
              </span>
              <span class="info" style={{marginTop: "-6%"}}>/ Afbeeldingen</span>
            </div>
          </div>

          <ul>
            <li>
              <strong>5</strong> Domains
            </li>
            <li>
              <strong>101-500</strong> Afbeeldingen/VOLGORDE
            </li>
            <li>
              <strong>10 </strong> Afbeeldingen-VRIJ
            </li>
            <li>
              <strong>2</strong> MAAND VRIJ OPSLAG
            </li>
            <li>
              <strong>24/7</strong> KLANT STEUN
            </li>
          </ul>
          <div class="buy-button-box">
            <a href="https://app.cutoutwiz.com/"target="_blank" class="buy-now">VOLGORDE NU</a>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="pricing-card pro">
          <div class="popular">POPULAIR</div>
          <div class="pricing-header">
            <span class="plan-title">PREMIE</span>
            <div class="price-circle">
              <span class="price-title">
               <span style={{fontSize:"21px"}}> <strong>CONTACT </strong></span>
               <span style={{marginTop:"-5%"}}>ONS</span>
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
              <strong>500</strong> ꝏ Afbeeldingen/VOLGORDE
            </li>
            <li>
              <strong>10 </strong> Afbeeldingen-VRIJ
            </li>
            <li>
              <strong>3</strong> MAAND VRIJ OPSLAG
            </li>
            <li>
              <strong>24/7</strong> KLANT STEUN
            </li>
          </ul>
          <div class="buy-button-box">
            <Link to="/nl/contact-us" target="_blank" class="buy-now">VOLGORDE NU</Link>
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
    <h1 style={{textAlign:"center"}}>Hoe een bestelling te plaatsen</h1>

    <p style={{textAlign:"center",marginTop:"-1%",fontSize:"20px"}}>Volg gewoon deze eenvoudige stappen, en we zullen het vanaf daar overnemen</p> 

    <div class="row">
      <div class="col-md-6" style={{marginTop:"3%"}}>
        <p>
       <b> Stap 1: </b><br/>
       Aanmelden om te beginnen <br/>
          <b> Stap 2: </b><br/>
          Kies je favoriete abonnement<br/>
          <b> Stap 3: </b><br/>
          Ga naar je account om een bestelling te plaatsen<br/>
          <b> Stap 4: </b><br/>
          Upload de afbeeldingen die u door ons wilt laten bewerken<br/>
          <b> Stap 5: </b><br/>
          Wij verwerken de afbeeldingen voor u<br/>
          <b> Stap 6: </b><br/>
          Download de bewerkte afbeeldingen
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
  <h2>We zijn hier om<br/><span style={{fontWeight:"600"}}>Beantwoord al uw vragen</span><br/></h2>
  <Link target="_blank" to="/nl/contact-us"><button type="button" id="button17">Neem contact op</button></Link>
  </div>
</div> 

<div style={{marginBottom:"4%"}}>
    <h1 style={{textAlign:"center",marginTop:"4%"}}>Ons verhaal</h1>

<p style={{textAlign:"center",marginTop:"-0.5%",fontSize:"20px"}}>Wie we zijn en hoe we zijn geworden</p> 


<div class="container"style={{marginTop:"2%"}}>
    <div class="row">
      <div class="col-md-6"style={{height:"max-content"}}>
      <img src="assets/images/story3.jpg" height="430px" width="100%" alt="The kow company office space" />
      </div>
      <div class="col-md-6" >

        <h2>Hoe wij u helpen<br/>
        Bereik uw bedrijf<br/>
        Doelen</h2>

<hr id="border5"></hr>


<p style={{textAlign:"justify"}}>CutOutWiz is een van de toonaangevende beeld- en videobewerkingen
    bedrijf voor bedrijven over de hele wereld. Terwijl de wereld beweegt
     op weg naar een virtuele toekomst, waarbij online productfotobewerking steeds meer wordt
      steeds toegankelijker, HD-productfoto's zijn in wezen wat
       verkoop stimuleren. Wij zijn de vertrouwde online beeldbewerkingspartner voor
        veel gerenommeerde e-commercebedrijven over de hele wereld over een
         divers scala aan industrieën. Wij bieden alle mogelijke beeldbewerking aan
          (verwerkings)dienst van veelgebruikte diensten zoals:
           achtergrondafbeelding verwijderen, kleurcorrectie, beeldretouchering,
            onzichtbare paspop, tot zelfs complexe diensten zoals beeld
             manipulatie. De reden achter ons succes is dat we geloven in
              klant eerst en het verstrekken van de beste kwaliteitsdienst.</p>
     
      </div>
    </div>
    </div>
</div>

<div class="footer"style={{backgroundColor:"#231f20"}}>
    <div class="container">
    <div class="row">
    <div class="col-md-3"style={{marginTop:"4%"}}>
    <Link to="/" target="_blank"><img src="assets/images/ailogo.png"style={{marginTop:"3%"}} width="170" height="40" alt=""/></Link>

    <p style={{textAlign:"justify",color:"#b7b9bb",marginTop:"4%"}}>CutOutWiz is een van de toonaangevende bedrijven voor beeld- en videobewerking voor bedrijven over de hele wereld.</p>
    <a href="https://www.facebook.com/cutoutwiz"target="_blank" class="fa fa-facebook"></a>
    <a href="https://twitter.com/cut_wiz?s=09"target="_blank" class="fa fa-twitter"></a>
    <a href="https://www.linkedin.com/company/cutoutwiz-ltd"target="_blank" class="fa fa-linkedin"></a>
    <a href="https://www.youtube.com/channel/UClIkCcEBksZigP56p593fDQ"target="_blank" class="fa fa-youtube"></a>
    <a href="https://www.instagram.com/accounts/login/"target="_blank" class="fa fa-instagram"></a>
    </div>
   
        <div class="col-6 col-md-2"style={{marginTop:"5%"}}>
            <b style={{color:"white",fontSize:"20px"}}>Menu</b>

            <p style={{color:"#b7b9bb",marginTop:"8%"}}>
         <Link to="/" target="_blank"  style={{textDecoration:"none",color:"#b7b9bb"}}> Thuis</Link> <br/>
         <Link to="#apps" target="_blank"  style={{textDecoration:"none",color:"#b7b9bb"}}> Functies</Link><br/>
         <Link to="#images" target="_blank"  style={{textDecoration:"none",color:"#b7b9bb"}}>  Diensten</Link><br/>
         <Link to="#prices" target="_blank"  style={{textDecoration:"none",color:"#b7b9bb"}}>  Prijzen</Link><br/>
         <Link to="#blogs" target="_blank"  style={{textDecoration:"none",color:"#b7b9bb"}}> Blogs</Link>
            </p>
        </div>

        <div class="col-6 col-md-2"style={{marginTop:"5%"}}>
        <b style={{color:"white",fontSize:"20px"}}>Functies</b>
            <p style={{color:"white",marginTop:"8%"}}>
            <a href="https://apps.shopify.com/cutoutwiz" target="_blank"  style={{textDecoration:"none",color:"#b7b9bb"}}>Shoppify App</a> <br/>
            <a href="https://sellercentral.amazon.com/gspn/provider-details/Imaging/284b7303-cec9-403e-b763-375399824520?ref_=sc_gspn_ilst_idt-284b7303&localeSelection=en_US&sellFrom=US&sellIn=US" target="_blank" style={{textDecoration:"none",color:"#b7b9bb"}}> AmazonSPN </a><br/>
            <a href="https://app.cutoutwiz.com" target="_blank" style={{textDecoration:"none",color:"#b7b9bb"}}> Cutoutwiz</a><br/>
            <a href="https://www.bigcommerce.com/apps/cutoutwiz" target="_blank" style={{textDecoration:"none",color:"#b7b9bb"}}> BigCommerce App</a><br/>
            <a href="https://www.shotflow.com/" target="_blank" style={{textDecoration:"none",color:"#b7b9bb"}}> Shotflow</a>
            </p>
        </div>

        <div class="col-6 col-md-2"style={{marginTop:"5%"}}>
        <b style={{color:"white",fontSize:"20px"}}>Handige Links</b>

          <p style={{color:"white",marginTop:"8%"}}>
         <Link to="/privacy-policy" target="_blank"style={{textDecoration:"none",color:"#b7b9bb"}}> Privacy Beleid </Link> <br/>
         <Link to="/terms-and-conditions" target="_blank"style={{textDecoration:"none",color:"#b7b9bb"}}> Regels en Voorwaarden</Link><br/>
         <Link to="/nl/contact-us" target="_blank"style={{textDecoration:"none",color:"#b7b9bb"}}>Neem contact op</Link> <br/>
          <a href="https://app.cutoutwiz.com/" target="_blank" style={{textDecoration:"none",color:"#b7b9bb"}}>Aanmelden</a> <br/>
          </p>
        </div>     
  

      <div class="col-6 col-md-3"style={{marginTop:"5%"}}>
      <b style={{color:"white",fontSize:"20px"}}>Ons adres</b> <br/>   <br/>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10329.283883735325!2d90.39304891556642!3d23.749043274767246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc1fb12dbea63beca!2sCutOutWiz!5e0!3m2!1sbn!2sbd!4v1639129804206!5m2!1sbn!2sbd"
      width="70%" height="50%" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>

      </div>
      
      </div> 
    </div>
    <p style={{textAlign:"center",color:"white",padding:"8px",backgroundColor:"black"}}>Ontworpen en ontwikkeld door <Link to="/" target="_blank"  style={{textDecoration:"none",color:"white"}}>CutOutWiz</Link></p>
    
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
export default Netherland;