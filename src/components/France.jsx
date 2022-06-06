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
import { Navigationfr} from "./";

 function France(props) {

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
      <Navigationfr />
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
                <p style={{fontSize:"34px",fontWeight:"500",fontFamily:"Poppins"}}>Nous faisons</p>
                
                 <p style={{fontSize:"38px",fontWeight:"700",marginTop:"-33px"}}>Image et vidéo</p>
                <p style={{fontSize:"38px",fontWeight:"700",marginTop:"-30px"}}>
                <Typical
                    steps={['Édition', 1000, 'Recoloration', 500, 'Retouche', 500, 'Automatisation', 500]}
                    loop={Infinity}
                    wrapper="p"
                />               
                </p>

                <hr id="border2"></hr>
                <p style={{fontWeight:"500",fontFamily:"Poppins"}}>Votre guichet unique<br/>
                solution de post-production de contenu</p>
                
                <div class="row">
                  <div class="col-6 col-md-4">
                  <a class="" href="https://app.cutoutwiz.com/"target="_blank"><button class="button1">ESSAI GRAT.</button> </a></div>
               
                <div class="col-6 col-md-8">
                <Link target="_blank" to="/fr/contact-us" ><button type="button" id="button2">DEVIS GRATUIT</button></Link>
                </div>
                
                </div>

              </div>

              <div class="col-md-6">
              <img src="../../assets/images/bannerpiclast.png"height="90%" width="95%" style={{marginTop:"4%"}} alt="Edited image of girl posing for photo with smile on her face"/>
              </div>             
          </div>
        </div>
      </div>


<div style={{backgroundColor:"#ffdd0b"}}>
      <div class="container">
      <div class="row">
            <div class="col-6 col-md">
          <div class="card" style={{width: "100%",borderRadius:"10px"}}>
              <img src="../assets/images/image.png"  width="30%" height="10%" alt="Image icon"/><br/>
              <div class="card-body"style={{marginTop:"-3%"}}>
                <h4 class="card-title">16,500+</h4>
                <hr style={{width:"32%",border:"1px solid",backgroundColor:"black",opacity:"1",marginTop:"-1%"}}></hr>
                <p class="card-text"style={{marginTop:"-7%",fontWeight:"500"}}>Image<br/>Traité quotidien</p>
              </div>
              </div>
          </div>
          
          <div class="col-6 col-md">
          <div class="card" style={{width: "100%",borderRadius:"10px"}}>
              <img src="../assets/images/team.png"style={{marginLeft:"4%"}}  width="30%" height="10%" alt="Team icon"/><br/>
              <div class="card-body"style={{marginTop:"-3%"}}>
                <h4 class="card-title">500+</h4>
                <hr style={{width:"32%",border:"1px solid",backgroundColor:"black",opacity:"1",marginTop:"-1%"}}></hr>
                <p class="card-text"style={{marginTop:"-7%",fontWeight:"500"}}>Équipe<br/>Membres</p>
              </div>
              </div>
          </div>

          <div class="col-6 col-md">
          <div class="card" style={{width: "100%",borderRadius:"10px"}}>
              <img src="../assets/images/support.png"  width="30%" height="10%" alt="Support icon"/><br/>
              <div class="card-body"style={{marginTop:"-3%"}}id="text">
                <h4 class="card-title">365 Jours</h4>
                <hr style={{width:"32%",border:"1px solid",backgroundColor:"black",opacity:"1",marginTop:"-1%"}}></hr>
                <p class="card-text"style={{marginTop:"-7%",fontWeight:"500"}}>Cliente<br/>Soutien
</p>
              </div>
              </div>
          </div>

          <div class="col-6 col-md">
          <div class="card" style={{width: "100%",borderRadius:"10px"}}>
              <img src="../assets/images/delivery.png"  width="30%" height="10%" alt="clock icon"/><br/>
              <div class="card-body"style={{marginTop:"-3%"}}>
                <h4 class="card-title">12 Les heures</h4>
                <hr style={{width:"32%",border:"1px solid",backgroundColor:"black",opacity:"1",marginTop:"-1%"}}></hr>
                <p class="card-text"style={{marginTop:"-7%",fontWeight:"500"}}>Ou moins<br/>Heure de livraison</p>
              </div>
              </div>
          </div>

          <div class="col-md">
          <div class="card-hidden">
          <div class="card" style={{borderRadius:"10px",width: "100%"}}>
              <img src="../assets/images/free-images.png"  width="30%" height="10%" alt="Free trial icon"/><br/>
              <div class="card-body"style={{marginTop:"-3%"}}>
                <h4 class="card-title">10+</h4>
                <hr style={{width:"32%",border:"1px solid",backgroundColor:"black",opacity:"1",marginTop:"-1%"}}></hr>
                <p class="card-text"style={{marginTop:"-7%",fontWeight:"500"}}>Libre<br/>Images d'essai</p>
              </div>
              </div>
              </div>
          </div>
          </div></div></div>


<div class="spacew">
        
</div>
<br/>
<div class="container" id="imagesfr">
    <h1 style={{textAlign:"center",fontFamily:"poppins",fontWeight:"700"}}>Prestations de service</h1>
    <p style={{textAlign:"center",fontFamily:"poppins",fontSize:"20px",fontWeight:"100"}}>Service d'édition d'images</p><br/><br/>

    <div class="row"style={{marginTop:"-3%"}}>
      <div class="col-md-3">
      <BeforeAfterSlider 
          before= {"../assets/images/Photo-Retouch-Afterlive.jpg"} alt="Beautiful girl smiling elegantly"
          after={"../assets/images/Photo-Retouch-before.jpg"} alt="Beautiful girl with frackles on her face smiling elegantly"
          width={260}
          height={200}
        />
        <p style={{fontWeight:"700",textAlign:"center"}}>Retouche photo</p>
        </div>

      <div class="col-md-3">
      <BeforeAfterSlider
          before={"../assets/images/Background-Removal-After.jpg"} alt="Red and white sports shoes on a transparent background"
          after={"../assets/images/Background-Removal-Before.jpg"} alt="Red and white sports shoes on a red background"
          width={260}
          height={200}
        />
        <p style={{fontWeight:"700",textAlign:"center"}}>Suppression de l'arrière-plan</p>
      </div>

      <div class="col-md-3">
      <BeforeAfterSlider
          before={"../assets/images/Photo-Recolor-After.jpg"} alt="Stylish girl wearing yellow shirt and and white scart posing with a candy"
          after={"../assets/images/Photo-Recolor-Before.jpg"} alt="Stylish girl wearing red shirt and white scart posing with a candy"
          width={260}
          height={200}
        />
        <p style={{fontWeight:"700",textAlign:"center"}}>Recoloration des photos</p>
      </div>

      <div class="col-md-3">
      <BeforeAfterSlider
          before={"../assets/images/Shadow-Creation-Before.jpg"} alt="A white vase on a white surface and white background"
          after={"../assets/images/Shadow-Creation-After-1.jpg"} alt="A white vase on white background"
          width={260}
          height={200}
        />
        <p style={{fontWeight:"700",textAlign:"center"}}>Création d'ombre</p>
      </div>


    </div>

    <br/><br/>

    <div class="row">

      <div class="col-md-3">
      <BeforeAfterSlider
          before={"../assets/images/Ghost-Mannequin-After.jpg"} alt="A grey t-shirt on white background"
          after={"../assets/images/Ghost-Mannequin-Before.jpg"} alt="A grey t-shirt on a mannequin with grey background"
          width={260}
          height={200}
        />
        <p style={{fontWeight:"700",textAlign:"center"}}>Mannequin fantôme</p>
      </div>

      <div class="col-md-3">
      <BeforeAfterSlider
          before={"../assets/images/Color-Correction_After.jpg"} alt="BBQ chicken decorated with small tomato and letucce served with tomato sauce on a ciramic plate"
          after={"../assets/images/Color-Correction_Before.jpg"} alt="BBQ chicken decorated with small tomato and letucce served with tomato sauce on a ciramic plate"
          width={260}
          height={200}
        />
        <p style={{fontWeight:"700",textAlign:"center"}}>Correction de couleur</p>
      </div>

      <div class="col-md-3">
      <BeforeAfterSlider
          before={"../assets/images/Image-Masking-After.jpg"} alt="A dog with wild eyes running on white background"
          after={"../assets/images/Image-Masking-Before.jpg"} alt="A dog with wild eyes running on a field"
          width={260}
          height={200}
          textAlign={"center"}
        />
        <p style={{fontWeight:"700",textAlign:"center"}}>Masquage d'image</p>
      </div>
      
      <div class="col-md-3">
      <BeforeAfterSlider
          before={"../assets/images/Manipulation-After.jpg"} alt="Rice served with shrimps on a glass plate and vegetables lyring around"
          after={"../assets/images/Manipulation-Before.jpg"} alt="Rice served with shrimps on a glass plate "
          width={260}
          height={200}
        />
        <p style={{fontWeight:"700",textAlign:"center"}}>Manipulation d'images</p>
      </div>
    </div>
    <br/><br/>
    </div>

<div style={{backgroundColor:"#f3f5f7"}}>
  <br/>
    <div class="container" id="videosfr">
    <h1 style={{textAlign:"center",fontFamily:"poppins",fontWeight:"700"}}>Prestations de service</h1>
    <p style={{textAlign:"center",fontFamily:"poppins",fontSize:"20px",fontWeight:"100"}}>Service de montage vidéo</p><br/><br/>

    
    <div class="row"style={{marginTop:"-5%"}}>
      <div class="col-md-6">
      <video  height="100%" width="100%" controls="controls" poster="../assets/images/Screenshot (7).png"alt="audio-editing-service-poster" style={{cursor:"pointer"}}> <source src="../assets/images/Audio_Editing_Service_1.mp4"></source></video>
      <p style={{textAlign:"center"}}>Service de montage audio</p>
      </div>

      <div class="col-md-6">
      <video  height="99.5%" width="100%" controls="controls" poster="../assets/images/cropping.png"alt="video-cropping-service-poster"> <source src="../assets/images/Video_Cropping_Service_1.mp4"></source></video>
      <p style={{textAlign:"center"}}>Service de recadrage vidéo</p>
      </div>
    </div>
    <br/>

    <div class="row">
      <div class="col-md-6">
      <video  height="100%" width="100%" controls="controls" poster="../assets/images/subtittle.png"alt="subtittle-addition-service-poster"> <source src="../assets/images/Subtitile_Addition_Service_1.mp4"></source></video>
      <p style={{textAlign:"center"}}>Service de dépendance aux sous-titres</p>
      </div>

      <div class="col-md-6">
      <video  height="99.5%" width="100%" controls="controls" poster="../assets/images/tittle.png"alt="tittle-addition-service-poster"> <source src="../assets/images/Title_Addition_Service_1.mp4"></source></video>
      <p style={{textAlign:"center"}}>Service d'ajout de titre</p>
      </div>
    </div>
<br/><br/><br/><br/>
</div>
</div>
   

  <div class="container"id="appsfr"style={{marginTop:"4%"}}>
    <h1 style={{textAlign:"center",fontWeight:"500"}}>Applications et intégrations</h1><br/>
    <p style={{textAlign:"center",marginTop:"-1%",fontSize:"20px"}}>Nos applications sont présentes sur les principales plateformes de commerce électronique</p><br/><br/>

    <div class="row">

      <div class="col-md"id="logopop">
      <a href="https://apps.shopify.com/cutoutwiz" target="_blank"><img src="../assets/images/shopify (2).png" class="rounded mx-auto d-block" height="65px" width="200px" alt="Shopify logo"/>
     </a> </div>

      <div class="col-md" id="logopop"style={{marginTop:"7px"}}>
      <a href="https://sellercentral.amazon.com/gspn/provider-details/Imaging/284b7303-cec9-403e-b763-375399824520?ref_=sc_gspn_ilst_idt-284b7303&localeSelection=en_US&sellFrom=US&sellIn=US" target="_blank"><img src="../assets/images/amazon.png" class="rounded mx-auto d-block" height="65px" width="200px" alt="Amazon logo"/>
      </a></div>

      <div class="col-md"id="logopop">
      <a href="https://app.cutoutwiz.com/" target="_blank"><img src="../assets/images/cut.png" class="rounded mx-auto d-block" height="65px" width="200px" alt="Cutoutwiz logo"/>
      </a></div>

      <div class="col-md"id="logopop">
      <a href="https://www.bigcommerce.com/apps/cutoutwiz/" target="_blank"><img src="../assets/images/big.png"class="rounded mx-auto d-block" height="65px" width="200px" alt="Bigcommerce logo"/>
      </a></div>

      <div class="col-md"id="logopop">
      <a href="https://www.shotflow.com/" target="_blank"><img src="../assets/images/shotflow (2).png" class="rounded mx-auto d-block" height="65px" width="200px"  alt="Shotflow logo"/>
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
              <img src="../assets/images/quote (1).png" class="rounded mx-auto d-block"  width="70" height="50" alt=""style={{marginTop:"11%"}}/><br/>
              <div class="card-body">
                <p class="card-text"style={{textAlign:"center",fontWeight:"200",fontSize:"13px"}}>I am very pleased with their work.
                 The team is very patient and accommodating to all my requests. I will definitely work with them.</p>
                 <img src="../assets/images/5 star.png" class="rounded mx-auto d-block"  width="30%" height="30%" alt=""/>
              </div>
              <p style={{textAlign:"center",fontWeight:"700"}}>zasy chua</p>
              <br/>
          </div>

          <div class="card"id="" style={{width: "8rem",borderRadius:"10px"}}>
              <img src="../assets/images/quote (1).png" class="rounded mx-auto d-block"  width="70" height="50" alt=""style={{marginTop:"11%"}}/><br/>
              <div class="card-body">
                <p class="card-text"style={{textAlign:"center",fontWeight:"200",fontSize:"13px"}}>Very good service, was very 
                patient with me in my back and fro amendments. I would say it's very affordable too. Jobs are delivered.</p>
                 <img src="../assets/images/5 star.png" class="rounded mx-auto d-block" width="30%" height="30%" alt=""/>
              </div>
              <p style={{textAlign:"center",fontWeight:"700"}}>Jia Jia</p>
              <br/>
          </div>
          <div class="card"id="" style={{width: "8rem",borderRadius:"10px"}}>
              <img src="../assets/images/quote (1).png" class="rounded mx-auto d-block"  width="70" height="50" alt=""style={{marginTop:"11%"}}/><br/>
              <div class="card-body">
                <p class="card-text"style={{textAlign:"center",fontWeight:"200",fontSize:"13px"}}>I love this app. We've
                 been using CutOutWiz for some time. I am continually impressed with the results and stellar customer support.</p>
                 <img src="../assets/images/5 star.png" class="rounded mx-auto d-block"  width="30%" height="30%" alt=""/>
              </div>
              <p style={{textAlign:"center",fontWeight:"700"}}>Kamo Fitness</p>
              <br/>
          </div>
          <div class="card"id=""  style={{width: "12rem",borderRadius:"10px"}}>
              <img src="../assets/images/quote (1).png" class="rounded mx-auto d-block"  width="70" height="50" alt=""style={{marginTop:"11%"}}/><br/>
              <div class="card-body">
                <p class="card-text"style={{textAlign:"center",fontWeight:"200",fontSize:"13px"}}>I was having difficulties
                 with proper images and quality but the Rep called and walked me through proper image sizing and lighting.</p>
                 <img src="../assets/images/5 star.png" class="rounded mx-auto d-block"  width="30%" height="30%" alt=""/>
              </div>
              <p style={{textAlign:"center",fontWeight:"700"}}>Bèl Bagay Swimwear</p>
              <br/>
          </div>
          <div class="card"id=""  style={{width: "12rem",borderRadius:"10px"}}>
              <img src="../assets/images/quote (1).png" class="rounded mx-auto d-block"  width="70" height="50" alt=""style={{marginTop:"11%"}}/><br/>
              <div class="card-body">
                <p class="card-text"style={{textAlign:"center",fontWeight:"200",fontSize:"13px"}}>I have tried several image background removal services, some cheaper
than here. But remember you get what you pay.</p>
                 <img src="../assets/images/5 star.png" class="rounded mx-auto d-block"  width="30%" height="30%" alt=""/>
              </div>
              <p style={{textAlign:"center",fontWeight:"700"}}>General Unique</p>
              <br/>
          </div>
        </Slider>
      </div>
      <div class="spacew">

</div>
    </div>


    <div class="container"id="pricesfr"style={{marginBottom:"4%"}}>
    <h1 style={{textAlign:"center",fontFamily:""}}>Choisissez votre forfait</h1>
    <p style={{textAlign:"center",marginTop:"-1%",fontSize:"20px"}}>Nos forfaits sont exactement ce dont votre magasin a besoin</p><br/>

    <div class="row">
      <div class="col-md-4">

      <h2 style={{fontWeight:"700",marginTop:"35%"}}>Consultez nos prix</h2>

      <p style={{textAlign: "justify"}}>Nous proposons plusieurs options de tarification au choix
         de cela vous aidera à atteindre vos objectifs.
          Choisissez celui qui répond à vos exigences
           à la perfection. Au cas où vous chercheriez
            autre chose, ou souhaitez un devis de notre part pour
             toute sorte de personnalisation, n'hésitez pas à nous envoyer
              un texte via notre formulaire Contactez-nous.</p>
      
      </div>
      <div class="col-md-8">
<div class="bodyp">
  <div class="containerp">
      <div class="column">
        <div class="pricing-card basic">
          <div class="pricing-header">
            <span class="plan-title">RÉGIME DE BASE</span>
            <div class="price-circle">
            <span class="info" style={{paddingTop: "22%",fontSize: "12px",color: "black"}}>commence à partir de</span>
              <span class="price-title" style={{marginTop: "-29%"}}>
                <small>$</small><span style={{fontSize:"20px"}}>1.19</span>
              </span>
              <span class="info" style={{marginTop: "-12%"}}>/ Images</span>
            </div>
          </div>

          <ul>
            <li>
              <strong>5</strong> Domains
            </li>
            <li>
              <strong>1-100</strong> IMAGES/ORDRE
            </li>
            <li>
              <strong>10 </strong> SANS-IMAGES
            </li>
            <li>
              <strong>1</strong> MOIS DE STOCKAGE GRATUIT
            </li>
            <li>
              <strong>24/7</strong> SERVICE CLIENT
            </li>
          </ul>
          <div class="buy-button-box">
            <a href="https://app.cutoutwiz.com/" target="_blank" class="buy-now">COMMANDE</a>
          </div>        
        </div>
      </div>
      <div class="column">
        <div class="pricing-card echo">
          <div class="pricing-header">
            <span class="plan-title">LA NORME</span>
            <div class="price-circle">
            <span class="info" style={{paddingTop: "22%",fontSize: "12px",color: "black"}}>commence à partir de</span>
              <span class="price-title" style={{marginTop: "-29%"}}>
                <small>$</small><span  style={{fontSize:"20px"}}>0.99</span>
              </span>
              <span class="info" style={{marginTop: "-12%"}}>/ Images</span>
            </div>
          </div>

          <ul>
            <li>
              <strong>5</strong> Domains
            </li>
            <li>
              <strong>101-500</strong> IMAGES/ORDRE
            </li>
            <li>
              <strong>10 </strong> SANS-IMAGES
            </li>
            <li>
              <strong>2</strong> MOIS DE STOCKAGE GRATUIT
            </li>
            <li>
              <strong>24/7</strong> SERVICE CLIENT
            </li>
          </ul>
          <div class="buy-button-box">
            <a href="https://app.cutoutwiz.com/"target="_blank" class="buy-now">COMMANDE</a>
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
               <span style={{fontSize:"18px"}}> <strong>contacter </strong></span>
               <span style={{marginTop:"-10%",fontSize:"18px"}}>Nous</span>
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
              <strong>500</strong> ꝏ IMAGES/ORDRE
            </li>
            <li>
              <strong>10 </strong> SANS-IMAGES
            </li>
            <li>
              <strong>3</strong> MOIS DE STOCKAGE GRATUIT
            </li>
            <li>
              <strong>24/7</strong> SERVICE CLIENT
            </li>
          </ul>
          <div class="buy-button-box">
            <Link to="/fr/contact-us" target="_blank" class="buy-now">NOUS CONTACTER</Link>
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
<div class="container"id="howitworksfr">
    <h1 style={{textAlign:"center"}}>Comment passer une commande</h1>

    <p style={{textAlign:"center",marginTop:"-1%",fontSize:"20px"}}>Suivez simplement ces étapes simples, et nous partirons de là</p> 

    <div class="row">
      <div class="col-md-6" style={{marginTop:"3%"}}>
        <p>
       <b> Étape 1: </b><br/>
       Connectez-vous pour commencer <br/>
          <b> Étape 2: </b><br/>
          Choisissez votre plan d'abonnement préféré<br/>
          <b> Étape 3: </b><br/>
          Accédez à votre compte pour passer une commande<br/>
          <b> Étape 4: </b><br/>
          Téléchargez les images que vous souhaitez que nous modifiions<br/>
          <b> Étape 5: </b><br/>
          Nous traiterons les images pour vous<br/>
          <b> Étape 6: </b><br/>
          Télécharger les images éditées
        </p>
      </div>
      <div class="col-md-6">
      <video height="100%" width="100%"  controls autoplay> <source src="../assets/images/Key-features-Video.mp4"></source></video>
     
      </div>
    </div>
</div>

<br/><br/>
</div>


<div class="containerback"id="contactus">
  <img src="../assets/images/contact_front.jpg" height="350px" width="100%" id="gulabi"alt="People working in customer service"/>
  <div class="centered">
  <h2>Nous sommes ici pour<br/><span style={{fontWeight:"600"}}>Répondez à toutes vos requêtes</span><br/></h2>
  <Link target="_blank" to="/fr/contact-us"><button type="button" id="button17">Nous contacter</button></Link>
  </div>
</div> 

<div style={{marginBottom:"4%"}}>
    <h1 style={{textAlign:"center",marginTop:"4%"}}>Notre histoire</h1>

<p style={{textAlign:"center",marginTop:"-0.5%",fontSize:"20px"}}>Qui sommes-nous et comment sommes-nous devenus</p> 


<div class="container"style={{marginTop:"2%"}}>
    <div class="row">
      <div class="col-md-6"style={{height:"max-content"}}>
      <img src="../assets/images/story3.jpg" height="430px" width="100%" alt="The kow company office space" />
      </div>
      <div class="col-md-6" >

        <h2>Comment nous vous aidons<br/>
        Réalisez votre entreprise <br/>
        Objectifs</h2>

<hr id="border5"></hr>


<p style={{textAlign:"justify"}}>CutOutWiz est l'un des principaux éditeurs d'images et de vidéos
    entreprise pour les entreprises du monde entier. Alors que le monde bouge
     vers un futur virtuel, la retouche photo de produits en ligne devenant
      de plus en plus accessibles, les images de produits HD sont ce qui
       stimuler les ventes. Nous sommes le partenaire de confiance en matière d'édition d'images en ligne pour
        de nombreuses entreprises de commerce électronique renommées dans le monde entier à travers un
         gamme variée d'industries. Nous proposons toutes les retouches d'image possibles
          service (de traitement) des services couramment utilisés tels que
           suppression de l'image d'arrière-plan, correction des couleurs, retouche d'image,
            mannequin invisible, jusqu'aux services même complexes comme l'image
             manipulation. La raison de notre succès est que nous croyons en
              client d'abord et fournir le meilleur service de qualité.</p>
     
      </div>
    </div>
    </div>
</div>
  {/*  <div style={{backgroundColor:"#f3f5f7"}}>
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
          <img src="../assets/images/readbackgrnd.jpg" width="100%" height="100%" alt="Read Our Blogs photo"/>
          
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
        <img src="../assets/images/Blog banner.png" height="58%" width="100%" alt="Celebratory lights and decorations on a yellow background"/>
        <div style={{padding:"2%"}}>
        <Link to="/top-new-year-resolution-for-your-online-store" style={{textDecoration:"none",color:"black"}}><b>New Year’s Resolutions – Write your e-commerce success story today!</b></Link>
          <p style={{textAlign:"justify"}}>All e-commerce business owners know how fast-growing and ever changing the online business world is. You’ve been working at the same...</p>
          <Link to="/top-new-year-resolution-for-your-online-store"><button id="button7">Read More</button></Link>
         </div>
    </Card>
      </div>

      <div class="col-md-4">
      <Card style={{height:"98%"}}>
        <img src="../assets/images/1.jpg" height="58%" width="100%" alt="French fries salad and other food items with forks and and sauce on a yellow background"/>
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
        <img src="../assets/images/types-of-photography.jpg" height="58%" width="100%" alt="Photographer standing on a mountain with a camera on hard ready to capture the nature and mountains"/>
        <div style={{padding:"2%"}}>
        <Link to="/types-of-photography-which-one-drive-your-inner-passion-most" style={{textDecoration:"none",color:"black"}}><b>Types of Photography: Which one drives your inner passion most?</b></Link>
          <p style={{textAlign:"justify"}}>Photographs are our way of capturing the world as we see it. It’s a medium of expressing our inner thoughts and holding onto memories...</p>
          <Link to="/types-of-photography"><button id="button7">Read More</button></Link>
         </div>
    </Card>
      </div>

      <div class="col-md-4">
      <Card style={{height:"98%"}}>
        <img src="../assets/images/latestblog.jpg" height="58%" width="100%"alt="Girl wearing a yellow sweater pointing to a piece of paper "/>
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
        <img src="../assets/images/Blog-23.jpg" height="58%" width="100%" alt="Girl photographer capturing ceramic bowls on her professional camera"/>
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
</div> */}

  <div class="footer"style={{backgroundColor:"#231f20"}}>
    <div class="container">
    <div class="row">
    <div class="col-md-3"style={{marginTop:"4%"}}>
    <Link to="/" target="_blank"><img src="assets/images/ailogo.png"style={{marginTop:"3%"}} width="170" height="40" alt=""/></Link>

    <p style={{textAlign:"justify",color:"#b7b9bb",marginTop:"4%"}}>CutOutWiz est l'une des principales sociétés de montage d'images et de vidéos pour les entreprises du monde entier.</p>
    <a href="https://www.facebook.com/cutoutwiz"target="_blank" class="fa fa-facebook"></a>
    <a href="https://twitter.com/cut_wiz?s=09"target="_blank" class="fa fa-twitter"></a>
    <a href="https://www.linkedin.com/company/cutoutwiz-ltd"target="_blank" class="fa fa-linkedin"></a>
    <a href="https://www.youtube.com/channel/UClIkCcEBksZigP56p593fDQ"target="_blank" class="fa fa-youtube"></a>
    <a href="https://www.instagram.com/accounts/login/"target="_blank" class="fa fa-instagram"></a>
    </div>
   
        <div class="col-6 col-md-2"style={{marginTop:"5%"}}>
            <b style={{color:"white",fontSize:"20px"}}>Menu</b>

            <p style={{color:"#b7b9bb",marginTop:"8%"}}>
         <Link to="/" target="_blank"  style={{textDecoration:"none",color:"#b7b9bb"}}> Domicile</Link> <br/>
         <Link to="#apps" target="_blank"  style={{textDecoration:"none",color:"#b7b9bb"}}> Caractéristiques</Link><br/>
         <Link to="#images" target="_blank"  style={{textDecoration:"none",color:"#b7b9bb"}}> Services fournis</Link><br/>
         <Link to="#prices" target="_blank"  style={{textDecoration:"none",color:"#b7b9bb"}}>  Tarification</Link><br/>
         <Link to="#blogs" target="_blank"  style={{textDecoration:"none",color:"#b7b9bb"}}> Blogues</Link>
            </p>
        </div>

        <div class="col-6 col-md-2"style={{marginTop:"5%"}}>
        <b style={{color:"white",fontSize:"20px"}}>Caractéristiques</b>
            <p style={{color:"white",marginTop:"8%"}}>
            <a href="https://apps.shopify.com/cutoutwiz" target="_blank"  style={{textDecoration:"none",color:"#b7b9bb"}}>Shoppify App</a> <br/>
            <a href="https://sellercentral.amazon.com/gspn/provider-details/Imaging/284b7303-cec9-403e-b763-375399824520?ref_=sc_gspn_ilst_idt-284b7303&localeSelection=en_US&sellFrom=US&sellIn=US" target="_blank" style={{textDecoration:"none",color:"#b7b9bb"}}> AmazonSPN </a><br/>
            <a href="https://app.cutoutwiz.com" target="_blank" style={{textDecoration:"none",color:"#b7b9bb"}}> Cutoutwiz</a><br/>
            <a href="https://www.bigcommerce.com/apps/cutoutwiz" target="_blank" style={{textDecoration:"none",color:"#b7b9bb"}}> BigCommerce App</a><br/>
            <a href="https://www.shotflow.com/" target="_blank" style={{textDecoration:"none",color:"#b7b9bb"}}> Shotflow</a>
            </p>
        </div>

        <div class="col-6 col-md-2"style={{marginTop:"5%"}}>
        <b style={{color:"white",fontSize:"20px"}}>Liens utiles</b>

          <p style={{color:"white",marginTop:"8%"}}>
         <Link to="/privacy-policy" target="_blank"style={{textDecoration:"none",color:"#b7b9bb"}}> Politique de confidentialité </Link> <br/>
         <Link to="/terms-and-conditions" target="_blank"style={{textDecoration:"none",color:"#b7b9bb"}}> Termes et conditions</Link><br/>
         <Link to="/fr/contact-us" target="_blank"style={{textDecoration:"none",color:"#b7b9bb"}}>Contactez</Link> <br/>
          <a href="https://app.cutoutwiz.com/" target="_blank" style={{textDecoration:"none",color:"#b7b9bb"}}>S'inscrire</a> <br/>
          </p>
        </div>     
  

      <div class="col-6 col-md-3"style={{marginTop:"5%"}}>
      <b style={{color:"white",fontSize:"20px"}}>Notre adresse</b> <br/>   <br/>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10329.283883735325!2d90.39304891556642!3d23.749043274767246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc1fb12dbea63beca!2sCutOutWiz!5e0!3m2!1sbn!2sbd!4v1639129804206!5m2!1sbn!2sbd"
      width="70%" height="50%" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>

      </div>
      
      </div> 
    </div>
    <p style={{textAlign:"center",color:"white",padding:"8px",backgroundColor:"black"}}>Conçu et développé par <Link to="/" target="_blank"  style={{textDecoration:"none",color:"white"}}>CutOutWiz</Link></p>
    
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
export default France;