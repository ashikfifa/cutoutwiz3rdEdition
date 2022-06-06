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
import { Navigationge} from "./";


 function Germany(props) {
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
    
    <div className="germany">
      <Router >
      <Navigationge />
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
                <p style={{fontSize:"34px",fontWeight:"500",fontFamily:"Poppins"}}>Wir machen</p>
                
                 <p style={{fontSize:"38px",fontWeight:"700",marginTop:"-33px"}}>Bild & Video</p>
                <p style={{fontSize:"38px",fontWeight:"700",marginTop:"-30px"}}>
                <Typical
                    steps={['Bearbeitung', 1000, 'Farbkorrekturen', 500, 'Retusche', 500, 'Automatisierung', 500]}
                    loop={Infinity}
                    wrapper="p"
                />               
                </p>

                <hr id="border2"></hr>
                <p style={{fontWeight:"500",fontFamily:"Poppins"}}>Ihre One-Stop<br/>
                Lösung für Content Postproduktion</p>
                
                <div class="row">
                  <div class="col-6 col-md-5">
                  <a class="" href="https://app.cutoutwiz.com/"target="_blank"><button class="button1">KOSTENLOSER TEST.</button> </a></div>
               
                <div class="col-6 col-md-7">
                <Link target="_blank" to="/de/contact-us" ><button type="button" id="button2">KOSTENLOSES ANGEBOT</button></Link>
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
                <p class="card-text"style={{marginTop:"-7%",fontWeight:"500"}}>Bilder<br/>pro Tag</p>
              </div>
              </div>
          </div>
          
          <div class="col-6 col-md">
          <div class="card" style={{width: "100%",borderRadius:"10px"}}>
              <img src="assets/images/team.png"style={{marginLeft:"4%"}}  width="30%" height="10%" alt="Team icon"/><br/>
              <div class="card-body"style={{marginTop:"-3%"}}>
                <h4 class="card-title">500+</h4>
                <hr style={{width:"32%",border:"1px solid",backgroundColor:"black",opacity:"1",marginTop:"-1%"}}></hr>
                <p class="card-text"style={{marginTop:"-7%",fontWeight:"500"}}>Mannschaft <br/>Mitglieder</p>
              </div>
              </div>
          </div>

          <div class="col-6 col-md">
          <div class="card" style={{width: "100%",borderRadius:"10px"}}>
              <img src="assets/images/support.png"  width="30%" height="10%" alt="Support icon"/><br/>
              <div class="card-body"style={{marginTop:"-3%"}}id="text">
                <h4 class="card-title">365 Días</h4>
                <hr style={{width:"32%",border:"1px solid",backgroundColor:"black",opacity:"1",marginTop:"-1%"}}></hr>
                <p class="card-text"style={{marginTop:"-7%",fontWeight:"500"}}>Kunde
 <br/>Unterstüung
</p>
              </div>
              </div>
          </div>

          <div class="col-6 col-md">
          <div class="card" style={{width: "100%",borderRadius:"10px"}}>
              <img src="assets/images/delivery.png"  width="30%" height="10%" alt="clock icon"/><br/>
              <div class="card-body"style={{marginTop:"-3%"}}>
                <h4 class="card-title">12 Horas</h4>
                <hr style={{width:"32%",border:"1px solid",backgroundColor:"black",opacity:"1",marginTop:"-1%"}}></hr>
                <p class="card-text"style={{marginTop:"-7%",fontWeight:"500"}}>Oder weniger<br/>Lieferzeit</p>
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
                <p class="card-text"style={{marginTop:"-7%",fontWeight:"500"}}>kostenlose
 <br/>Testbilder</p>
              </div>
              </div>
              </div>
          </div>
          </div></div></div>


<div class="spacew">
        
</div>
<br/>
<div class="container" id="images">
    <h1 style={{textAlign:"center",fontFamily:"poppins",fontWeight:"700"}}>Dienstleistungen</h1>
    <p style={{textAlign:"center",fontFamily:"poppins",fontSize:"20px",fontWeight:"100"}}>Leistungen Bildbearbeitung</p><br/><br/>

    <div class="row"style={{marginTop:"-3%"}}>
      <div class="col-md-3">
      <BeforeAfterSlider 
          before= {"assets/images/Photo-Retouch-Afterlive.jpg"} alt="Beautiful girl smiling elegantly"
          after={"assets/images/Photo-Retouch-before.jpg"} alt="Beautiful girl with frackles on her face smiling elegantly"
          width={260}
          height={200}
        />
        <p style={{fontWeight:"700",textAlign:"center"}}>Foto Retuschen</p>
        </div>

      <div class="col-md-3">
      <BeforeAfterSlider
          before={"assets/images/Background-Removal-After.jpg"} alt="Red and white sports shoes on a transparent background"
          after={"assets/images/Background-Removal-Before.jpg"} alt="Red and white sports shoes on a red background"
          width={260}
          height={200}
        />
        <p style={{fontWeight:"700",textAlign:"center"}}>Hintergrund entfernen</p>
      </div>

      <div class="col-md-3">
      <BeforeAfterSlider
          before={"assets/images/Photo-Recolor-After.jpg"} alt="Stylish girl wearing yellow shirt and and white scart posing with a candy"
          after={"assets/images/Photo-Recolor-Before.jpg"} alt="Stylish girl wearing red shirt and white scart posing with a candy"
          width={260}
          height={200}
        />
        <p style={{fontWeight:"700",textAlign:"center"}}>Umfärbungen</p>
      </div>

      <div class="col-md-3">
      <BeforeAfterSlider
          before={"assets/images/Shadow-Creation-Before.jpg"} alt="A white vase on a white surface and white background"
          after={"assets/images/Shadow-Creation-After-1.jpg"} alt="A white vase on white background"
          width={260}
          height={200}
        />
        <p style={{fontWeight:"700",textAlign:"center"}}>Schatten Erstellung</p>
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
        <p style={{fontWeight:"700",textAlign:"center"}}>Farbkorrekturen</p>
      </div>

      <div class="col-md-3">
      <BeforeAfterSlider
          before={"assets/images/Image-Masking-After.jpg"} alt="A dog with wild eyes running on white background"
          after={"assets/images/Image-Masking-Before.jpg"} alt="A dog with wild eyes running on a field"
          width={260}
          height={200}
          textAlign={"center"}
        />
        <p style={{fontWeight:"700",textAlign:"center"}}>Maskierungen</p>
      </div>
      
      <div class="col-md-3">
      <BeforeAfterSlider
          before={"assets/images/Manipulation-After.jpg"} alt="Rice served with shrimps on a glass plate and vegetables lyring around"
          after={"assets/images/Manipulation-Before.jpg"} alt="Rice served with shrimps on a glass plate "
          width={260}
          height={200}
        />
        <p style={{fontWeight:"700",textAlign:"center"}}>Bildbearbeitung</p>
      </div>
    </div>
    <br/><br/>
    </div>

<div style={{backgroundColor:"#f3f5f7"}}>
  <br/>
    <div class="container" id="videos">
    <h1 style={{textAlign:"center",fontFamily:"poppins",fontWeight:"700"}}>Leistungen Videobearbeitung</h1>
    <p style={{textAlign:"center",fontFamily:"poppins",fontSize:"20px",fontWeight:"100"}}>Video Bearbeitung Sdienst</p><br/><br/>

    
    <div class="row"style={{marginTop:"-5%"}}>
      <div class="col-md-6">
      <video  height="100%" width="100%" controls="controls" poster="assets/images/Screenshot (7).png"alt="audio-editing-service-poster" style={{cursor:"pointer"}}> <source src="assets/images/Audio_Editing_Service_1.mp4"></source></video>
      <p style={{textAlign:"center"}}>Audio Bearbeitung</p>
      </div>

      <div class="col-md-6">
      <video  height="99.5%" width="100%" controls="controls" poster="assets/images/cropping.png"alt="video-cropping-service-poster"> <source src="assets/images/Video_Cropping_Service_1.mp4"></source></video>
      <p style={{textAlign:"center"}}>Video Zuschneiden</p>
      </div>
    </div>
    <br/>

    <div class="row">
      <div class="col-md-6">
      <video  height="100%" width="100%" controls="controls" poster="assets/images/subtittle.png"alt="subtittle-addition-service-poster"> <source src="assets/images/Subtitile_Addition_Service_1.mp4"></source></video>
      <p style={{textAlign:"center"}}>Untertitel erstellen</p>
      </div>

      <div class="col-md-6">
      <video  height="99.5%" width="100%" controls="controls" poster="assets/images/tittle.png"alt="tittle-addition-service-poster"> <source src="assets/images/Title_Addition_Service_1.mp4"></source></video>
      <p style={{textAlign:"center"}}>Tittle erstellen</p>
      </div>
    </div>
<br/><br/><br/><br/>
</div>
</div>
   

  <div class="container"id="apps"style={{marginTop:"4%"}}>
    <h1 style={{textAlign:"center",fontWeight:"500"}}>Apps & Anbindung</h1><br/>
    <p style={{textAlign:"center",marginTop:"-1%",fontSize:"20px"}}>Unsere Apps sind auf den wichtigsten E-Commerce-Plattformen vertreten</p><br/><br/>

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
than here. But remember you get what you pay but remember</p>
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
    <h1 style={{textAlign:"center",fontFamily:""}}>Plan auswählen</h1>
    <p style={{textAlign:"center",marginTop:"-1%",fontSize:"20px"}}>Unsere Pakete sind genau das, was Ihr Store braucht</p><br/>

    <div class="row">
      <div class="col-md-4">

      <h2 style={{fontWeight:"700",marginTop:"35%"}}>Sehen Sie sich unsere Preise an</h2>

      <p style={{textAlign: "justify"}}>Wir haben eine Vielzahl von Preisoptionen zur Auswahl, mit denen Sie Ihre Ziele erreichen können. Wählen Sie die Option, die Ihren Anforderungen perfekt entspricht. Falls Sie nach etwas anderem suchen oder ein Angebot von uns für jegliche Art von Anpassung wünschen, können Sie uns gerne eine Nachricht über unser Kontaktformular senden.</p>
      
      </div>
      <div class="col-md-8">
<div class="bodyp">
  <div class="containerp">
      <div class="column">
        <div class="pricing-card basic">
          <div class="pricing-header">
            <span class="plan-title">BASIC PLAN</span>
            <div class="price-circle">
            <span class="info" style={{paddingTop: "22%",fontSize: "14px",color: "black"}}>Beginnt Ab</span>
              <span class="price-title" style={{marginTop: "-29%"}}>
                <small>$</small><span>$1.19</span>
              </span>
              <span class="info" style={{marginTop: "-6%"}}>/Bilder</span>
            </div>
          </div>

          <ul>
            <li>
              <strong>5</strong> Domains
            </li>
            <li>
              <strong>1-100</strong> BILDER/BESTELLUNG
            </li>
            <li>
              <strong>10 </strong> Kostenlose Bilder
            </li>
            <li>
              <strong>1</strong> Monate Kostenlose Aufbewahrung 
            </li>
            <li>
              <strong>24/7</strong> Kundenbetreuung
            </li>
          </ul>
          <div class="buy-button-box">
            <a href="https://app.cutoutwiz.com/" target="_blank" class="buy-now">JETZT STARTEN</a>
          </div>        
        </div>
      </div>
      <div class="column">
        <div class="pricing-card echo">
          <div class="pricing-header">
            <span class="plan-title">STANDARD</span>
            <div class="price-circle">
            <span class="info" style={{paddingTop: "22%",fontSize: "14px",color: "black"}}>Beginnt Ab</span>
              <span class="price-title" style={{marginTop: "-29%"}}>
                <small>$</small><span>0.99</span>
              </span>
              <span class="info" style={{marginTop: "-6%"}}>/Bilder</span>
            </div>
          </div>

          <ul>
            <li>
              <strong>5</strong> Domains
            </li>
            <li>
              <strong>101-500</strong> IMÁGENES/PEDIDO
            </li>
            <li>
              <strong>10 </strong> Kostenlose Bilder
            </li>
            <li>
              <strong>2</strong> Monate Kostenlose Aufbewahrung 
            </li>
            <li>
              <strong>24/7</strong> Kundenbetreuung
            </li>
          </ul>
          <div class="buy-button-box">
            <a href="https://app.cutoutwiz.com/"target="_blank" class="buy-now">JETZT STARTEN</a>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="pricing-card pro">
          <div class="popular">POPULAR</div>
          <div class="pricing-header">
            <span class="plan-title">Premium</span>
            <div class="price-circle">
              <span class="price-title">
               <span style={{fontSize:"21px"}}> <strong>kontaktere  </strong></span>
               <span style={{marginTop:"-5%"}}>uns</span>
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
              <strong>500</strong> ꝏ IMÁGENES/PEDIDO
            </li>
            <li>
              <strong>10 </strong> Kostenlose Bilder
            </li>
            <li>
              <strong>3</strong> Monate Kostenlose Aufbewahrung 
            </li>
            <li>
              <strong>24/7</strong> Kundenbetreuung
            </li>
          </ul>
          <div class="buy-button-box">
            <Link to="/de/contact-us" target="_blank" class="buy-now">JETZT STARTEN</Link>
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
    <h1 style={{textAlign:"center"}}>Wie funktioniert's?</h1>

    <p style={{textAlign:"center",marginTop:"-1%",fontSize:"20px"}}>Folgen Sie diesen einfachen Schritten, ab dann übernehmen wir</p> 

    <div class="row">
      <div class="col-md-6" style={{marginTop:"3%"}}>
        <p>
       <b> Schritt 1: </b><br/>
       Melden Sie sich an, um zu beginnen <br/>
          <b> Schritt 2: </b><br/>
          Wählen Sie Ihren bevorzugten Plan<br/>
          <b> Schritt 3: </b><br/>
          Gehen Sie zu Ihrem Konto, um eine Bestellung aufzugeben<br/>
          <b> Schritt 4: </b><br/>
          Laden Sie die zu bearbeiteten Bilder hoch<br/>
          <b> Schritt 5: </b><br/>
          Wir verarbeiten die Bilder für Sie<br/>
          <b> Schritt 6: </b><br/>
          Laden Sie die bearbeiteten Bilder herunter
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
  <h2>Wir sind hier um<br/><span style={{fontWeight:"600"}}>alle Ihre Fragen zu beantworten</span><br/></h2>
  <Link target="_blank" to="/de/contact-us"><button type="button" id="button17">Kontaktieren Sie uns</button></Link>
  </div>
</div> 

<div style={{marginBottom:"4%"}}>
    <h1 style={{textAlign:"center",marginTop:"4%"}}>Unsere Geschichte</h1>

<p style={{textAlign:"center",marginTop:"-0.5%",fontSize:"20px"}}>Wer wir sind und wie wir entstanden sind</p> 


<div class="container"style={{marginTop:"2%"}}>
    <div class="row">
      <div class="col-md-6"style={{height:"max-content"}}>
      <img src="assets/images/story3.jpg" height="430px" width="100%" alt="The kow company office space" />
      </div>
      <div class="col-md-6" >
          
        <h2>Wie wir Ihnen helfen<br/>
        Erreichen Sie Ihr Geschäft<br/>
        Ziele</h2>

<hr id="border5"></hr>


<p style={{textAlign:"justify"}}>CutOutWiz ist eines der führenden Bild- und Videobearbeitungsunternehmen für Unternehmen auf der ganzen Welt. Da sich die Welt auf eine virtuelle Zukunft zubewegt und die Online-Bearbeitung von Produktfotos immer wichtiger wird, sind HD-Produktbilder das, was den Umsatz im Wesentlichen ankurbelt. Wir sind der vertrauenswürdige Online-Bildbearbeitungspartner für viele renommierte E-Commerce-Unternehmen auf der ganzen Welt aus den unterschiedlichsten Branchen. Wir bieten jeden möglichen Bildbearbeitungsdienst (Bearbeitung) an, von häufig verwendeten Arbeiten wie Hintergrundentfernung, Farbkorrektur, Bildretusche, Ghost Mannequin bis hin zu komplexer Bildbearbeitung. Der Grund für unseren Erfolg ist, dass wir an den Kunden glauben und den besten Service bieten.</p>
     
      </div>
    </div>
    </div>
</div>

  <div class="footer"style={{backgroundColor:"#231f20"}}>
    <div class="container">
    <div class="row">
    <div class="col-md-3"style={{marginTop:"4%"}}>
    <Link to="/" target="_blank"><img src="assets/images/ailogo.png"style={{marginTop:"3%"}} width="170" height="40" alt=""/></Link>

    <p style={{textAlign:"justify",color:"#b7b9bb",marginTop:"4%"}}>CutOutWiz ist eines der führenden Bild- und Videobearbeitungsunternehmen für Unternehmen auf der ganzen Welt.</p>
    <a href="https://www.facebook.com/cutoutwiz"target="_blank" class="fa fa-facebook"></a>
    <a href="https://twitter.com/cut_wiz?s=09"target="_blank" class="fa fa-twitter"></a>
    <a href="https://www.linkedin.com/company/cutoutwiz-ltd"target="_blank" class="fa fa-linkedin"></a>
    <a href="https://www.youtube.com/channel/UClIkCcEBksZigP56p593fDQ"target="_blank" class="fa fa-youtube"></a>
    <a href="https://www.instagram.com/accounts/login/"target="_blank" class="fa fa-instagram"></a>
    </div>
   
        <div class="col-6 col-md-2"style={{marginTop:"5%"}}>
            <b style={{color:"white",fontSize:"20px"}}>Speisekarte</b>

            <p style={{color:"#b7b9bb",marginTop:"8%"}}>
         <Link to="/" target="_blank"  style={{textDecoration:"none",color:"#b7b9bb"}}> Heim</Link> <br/>
         <Link to="#apps" target="_blank"  style={{textDecoration:"none",color:"#b7b9bb"}}> Merkmale</Link><br/>
         <Link to="#images" target="_blank"  style={{textDecoration:"none",color:"#b7b9bb"}}>  Dienste</Link><br/>
         <Link to="#prices" target="_blank"  style={{textDecoration:"none",color:"#b7b9bb"}}>  Preis</Link><br/>
         <Link to="#blogs" target="_blank"  style={{textDecoration:"none",color:"#b7b9bb"}}> Blogs</Link>
            </p>
        </div>

        <div class="col-6 col-md-2"style={{marginTop:"5%"}}>
        <b style={{color:"white",fontSize:"20px"}}>Merkmale</b>
            <p style={{color:"white",marginTop:"8%"}}>
            <a href="https://apps.shopify.com/cutoutwiz" target="_blank"  style={{textDecoration:"none",color:"#b7b9bb"}}>Shoppify App</a> <br/>
            <a href="https://sellercentral.amazon.com/gspn/provider-details/Imaging/284b7303-cec9-403e-b763-375399824520?ref_=sc_gspn_ilst_idt-284b7303&localeSelection=en_US&sellFrom=US&sellIn=US" target="_blank" style={{textDecoration:"none",color:"#b7b9bb"}}> AmazonSPN </a><br/>
            <a href="https://app.cutoutwiz.com" target="_blank" style={{textDecoration:"none",color:"#b7b9bb"}}> Cutoutwiz</a><br/>
            <a href="https://www.bigcommerce.com/apps/cutoutwiz" target="_blank" style={{textDecoration:"none",color:"#b7b9bb"}}> BigCommerce App</a><br/>
            <a href="https://www.shotflow.com/" target="_blank" style={{textDecoration:"none",color:"#b7b9bb"}}> Shotflow</a>
            </p>
        </div>

        <div class="col-6 col-md-2"style={{marginTop:"5%"}}>
        <b style={{color:"white",fontSize:"20px"}}>Nützliche Links</b>

          <p style={{color:"white",marginTop:"8%"}}>
         <Link to="/privacy-policy" target="_blank"style={{textDecoration:"none",color:"#b7b9bb"}}>Datenschutz-Bestimmungen </Link> <br/>
         <Link to="/terms-and-conditions" target="_blank"style={{textDecoration:"none",color:"#b7b9bb"}}> Terms & Condition</Link><br/>
         <Link to="/de/contact-us" target="_blank"style={{textDecoration:"none",color:"#b7b9bb"}}>Kontaktiere uns</Link> <br/>
          <a href="https://app.cutoutwiz.com/" target="_blank" style={{textDecoration:"none",color:"#b7b9bb"}}>Anmeldung</a> <br/>
          </p>
        </div>     
  

      <div class="col-6 col-md-3"style={{marginTop:"5%"}}>
      <b style={{color:"white",fontSize:"20px"}}>Unsere Adresse</b> <br/>   <br/>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10329.283883735325!2d90.39304891556642!3d23.749043274767246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc1fb12dbea63beca!2sCutOutWiz!5e0!3m2!1sbn!2sbd!4v1639129804206!5m2!1sbn!2sbd"
      width="70%" height="50%" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>

      </div>
      
      </div> 
    </div>
    <p style={{textAlign:"center",color:"white",padding:"8px",backgroundColor:"black"}}>Entworfen und entwickelt von <Link to="/" target="_blank"  style={{textDecoration:"none",color:"white"}}>CutOutWiz</Link></p>
    
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
export default Germany;