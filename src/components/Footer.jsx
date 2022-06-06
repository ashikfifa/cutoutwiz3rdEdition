import React, { Component } from "react";
import 'react-multi-carousel/lib/styles.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Footer() {
    return (
<div class="footer"style={{backgroundColor:"#231f20"}}>
<div class="container">
<div class="row">
<div class="col-md-3"style={{marginTop:"4%"}}>
<img src="assets/images/ailogo.png"style={{marginTop:"3%"}} width="170" height="40" alt=""/>

<p style={{textAlign:"justify",color:"white",marginTop:"4%"}}>CutOutWiz is one of the leading image and video editing company for businesses all over the world.</p>
<a href="https://www.facebook.com/cutoutwiz"target="_blank" class="fa fa-facebook"></a>
<a href="https://twitter.com/cut_wiz?s=09"target="_blank" class="fa fa-twitter"></a>
<a href="https://www.linkedin.com/company/cutoutwiz-ltd"target="_blank" class="fa fa-linkedin"></a>
<a href="https://www.youtube.com/channel/UClIkCcEBksZigP56p593fDQ"target="_blank" class="fa fa-youtube"></a>
<a href="https://www.instagram.com/accounts/login/"target="_blank" class="fa fa-instagram"></a>
</div>

    <div class="col-6 col-md-2"style={{marginTop:"5%"}}>
        <b style={{color:"white",fontSize:"20px"}}>Menu</b>

        <p style={{color:"#b7b9bb",marginTop:"8%"}}>
        Home <br/>
        Features<br/>
        Services<br/>
        Pricing<br/>
        Blogs
        </p>
    </div>

    <div class="col-6 col-md-2"style={{marginTop:"5%"}}>
    <b style={{color:"white",fontSize:"20px"}}>Features</b>
        <p style={{color:"white",marginTop:"8%"}}>
        Shoppify App <br/>
        AmazonSPN<br/>
        Cutoutwiz<br/>
        BigCommerce App<br/>
        Shotflow
        </p>
    </div>

    <div class="col-6 col-md-2"style={{marginTop:"5%"}}>
    <b style={{color:"white",fontSize:"20px"}}>Useful Links</b>

      <p style={{color:"white",marginTop:"8%"}}>
      Privacy Policy <br/>
      Terms & Condition<br/>
      Contact Us<br/>
      Sign Up<br/>
      </p>
    </div>     


  <div class="col-6 col-md-3"style={{marginTop:"5%"}}>
  <b style={{color:"white",fontSize:"20px"}}>Our Address</b> <br/>   <br/>
  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10329.283883735325!2d90.39304891556642!3d23.749043274767246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc1fb12dbea63beca!2sCutOutWiz!5e0!3m2!1sbn!2sbd!4v1639129804206!5m2!1sbn!2sbd"
  width="70%" height="50%" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>

  </div>
  
  </div> 
</div>
<p style={{textAlign:"center",color:"white",padding:"8px",backgroundColor:"black"}}>Designed And Developed By CutOutWiz</p>
</div>
    );
}

export default Footer;