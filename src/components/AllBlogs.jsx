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
import Typical from 'react-typical'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation} from "./";
 function AllBlogs(props) {
  return (
    
    <div className="postphoto">
            <Router >
      <Navigation />
      </Router>
      <Helmet>
                <title>CutOutWiz : Image and Video Post Production</title>
                <meta  name="description" keywords="Product photo edinting company" content="CutOutWiz is one of the leading image and video editing company for businesses all over the world. As the world moves towards a virtual business base, product photo editing has been a very important part for any E-commerce business "  
                />
     </Helmet>
     <div style={{backgroundColor:"#f3f5f7"}}>
      <br/><br/>
    <div id="blogs">
    <div class="container">

    <h1 style={{textAlign:"center"}}>All Blogs</h1>

<p style={{textAlign:"center",marginTop:"-1%",fontSize:"20px"}}>Learn more on different industry verticals and practices in our blogs</p>

    </div>
   
   


    <div class="container">
      <div class="row">


        <div class="col-md-4">
      <Card  style={{height:"98%"}}>
        <img src="../../assets/images/Blog banner.png" height="58%" width="100%"/>
        <div style={{padding:"2%"}}>
        <Link to="/top-new-year-resolution-for-your-online-store" style={{textDecoration:"none",color:"black"}}><b>New Year’s Resolutions – Write your e-commerce success story today!</b></Link>
          <p style={{textAlign:"justify"}}>All e-commerce business owners know how fast-growing and ever changing the online business world is. You’ve been working at the same...</p>
          <Link to="/top-new-year-resolution-for-your-online-store"><button id="button7">Read More</button></Link>
         </div>
    </Card>
      </div>

      <div class="col-md-4">
      <Card style={{height:"98%"}}>
        <img src="../../assets/images/1.jpg" height="58%" width="100%"/>
        <div style={{padding:"2%"}}>
        <Link to="/top-8-food-photography-tips-for-beginners" style={{textDecoration:"none",color:"black"}}><b>Top 8 Food Photography Tips For Beginners</b></Link>
          <p style={{textAlign:"justify"}}>Whenever we enter a restaurant, we’re given a menu with
           the names and photos of different food items. We often place our orders based on the appearance of...</p>
          <Link to="/top-8-food-photography-tips-for-beginners"><button id="button7">Read More</button></Link>
         </div>
    </Card>
      </div>
      
      

      <div class="col-md-4">
    <Card  style={{height:"98%"}}>
        <img src="../../assets/images/Bounce-Rate-cover2.jpg"  width="100%" height="58%" alt=""/>
        <div style={{padding:"2%"}}>
        <Link to="/top-new-year-resolution-for-your-online-store" style={{textDecoration:"none",color:"black"}}><b>Minimize Your Bounce Rate</b></Link>
          <p style={{textAlign:"justify"}}>Bounce rate means that users are not engaging with your website. Read more to know about the impacts and reasons of bounce rate.If you have dipped your toe into what is called the ocean...</p>
          <Link to="/top-new-year-resolution-for-your-online-store"><button id="button7">Read More</button></Link>
         </div>
    </Card>
        </div>
      </div>

      <div class="row">

      <div class="col-md-4">
      <Card  style={{height:"98%"}}>
        <img src="../../assets/images/types-of-photography.jpg" height="58%" width="100%"/>
        <div style={{padding:"2%"}}>
        <Link to="/types-of-photography-which-one-drive-your-inner-passion-most" style={{textDecoration:"none",color:"black"}}><b>Types of Photography: Which one drives your inner passion most?</b></Link>
          <p style={{textAlign:"justify"}}>Photographs are our way of capturing the world as we see it. It’s a medium of expressing our inner thoughts and holding onto memories...</p>
          <Link to="/types-of-photography"><button id="button7">Read More</button></Link>
         </div>
    </Card>
      </div>

      <div class="col-md-4">
      <Card style={{height:"98%"}}>
        <img src="../../assets/images/latestblog.jpg" height="58%" width="100%"/>
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
        <img src="../../assets/images/Blog-23.jpg" height="58%" width="100%"/>
        <div style={{padding:"2%"}}>
        <Link to="/easy-product-photography-solutions-for-small-business" style={{textDecoration:"none",color:"black"}}><b>Easy Product Photography Solutions for Small Business</b></Link>
          <p style={{textAlign:"justify"}}>The beginning of winter fills our minds with numerous excitements.
           It’s the season of Christmas, snowfall, and New Year. With a sudden change in...</p>
           <Link to="/easy-product-photography-solutions-for-small-business"><button id="button7">Read More</button></Link>
         </div>
    </Card>
    </div>

    </div>


    <div class="row">

<div class="col-md-4">
<Card  style={{height:"98%"}}>
<img src="../../assets/images/a9579b1d-9fb5-43b2-b45f-7244173a4473.jpg"  width="100%" height="58%" alt=""/>
  <div style={{padding:"2%"}}>
  <Link to="/product-photography-how-to-take-photos-for-your-e-commerce-business" style={{textDecoration:"none",color:"black"}}><b>Product Photography: How to take photos for your E-commerce Business </b></Link>
    <p style={{textAlign:"justify"}}>Creative product photography requires you have a suitable device, background, lights, removing backgrounds and photography retouching...</p>
    <Link to="/product-photography-how-to-take-photos-for-your-e-commerce-business"><button id="button7">Read More</button></Link>
   </div>
</Card>
</div>

<div class="col-md-4">
<Card style={{height:"98%"}}>
<img src="../../assets/images/Influencer_Marketing_2.jpg"  width="100%" height="58%" alt=""/>
  <div style={{padding:"2%"}}>
  <Link to="/influencer-marketing-how-to-find-the-right-one" style={{textDecoration:"none",color:"black"}}> <b>Influencer Marketing: How To Find The Right One</b></Link>
    <p style={{textAlign:"justify"}}>Depending on whether our goal is to spread our word or increase sales, our campaign, deliverables and even influencer choice will vary....</p>
    <Link to="/influencer-marketing-how-to-find-the-right-one"><button id="button7">Read More</button></Link>
   </div>
</Card>
</div>
<div class="col-md-4">
<Card  style={{height:"98%"}}>
<img src="../../assets/images/MicrosoftTeams-image-1 (2).jpg"  width="100%" height="58%" alt=""/>
  <div style={{padding:"2%"}}>
  <Link to="/how-to-make-a-softbox-for-product-photography" style={{textDecoration:"none",color:"black"}}><b>How To Make A Softbox For Product Photography</b></Link>
    <p style={{textAlign:"justify"}}>To create a softbox for product photoshoot, you need acquire the materials, measure and cut them, add it all up and place the light to....</p>
     <Link to="/how-to-make-a-softbox-for-product-photography"><button id="button7">Read More</button></Link>
   </div>
</Card>
</div>

</div>

<div class="row">

<div class="col-md-4">
<Card  style={{height:"98%"}}>
<img src="../../assets/images/Blog-21.jpg"  width="100%" height="58%" alt=""/>
  <div style={{padding:"2%"}}>
  <Link to="/top-shopify-marketing-strategy-for-sellers" style={{textDecoration:"none",color:"black"}}><b>Top Shopify Marketing Strategy For Sellers</b></Link>
   
    <p style={{textAlign:"justify"}}> <br/>Shopify marketing strategy includes getting best product photography, photo editing, ensure competitive pricing and SEO friendly...</p>
    <Link to="/top-shopify-marketing-strategy-for-sellers"><button id="button7">Read More</button></Link>
   </div>
</Card>
</div>

<div class="col-md-4">
<Card style={{height:"98%"}}>
<img src="../../assets/images/Blog-14-min.jpg"  width="100%" height="58%" alt=""/>
  <div style={{padding:"2%"}}>
  <Link to="/a-beginners-how-to-guide-for-clothing-photography" style={{textDecoration:"none",color:"black"}}> <b>A Beginner’s How-To Guide For Clothing Photography</b></Link>
    <p style={{textAlign:"justify"}}>To take the perfect clothing photography for your e-store, you need to get realistic photos, plan the setup, get brighter lights and ensure multiple angles...</p>
    <Link to="/a-beginners-how-to-guide-for-clothing-photography"><button id="button7">Read More</button></Link>
   </div>
</Card>
</div>
<div class="col-md-4">
<Card  style={{height:"98%"}}>
<img src="../../assets/images/Blog-10-min.jpg"  width="100%" height="58%" alt="T-shirt, jeans and boots on a white surface"/>
  <div style={{padding:"2%"}}>
  <Link to="/product-reselling-photography-why-and-how-to-do-it" style={{textDecoration:"none",color:"black"}}><b>Product Reselling Photography: Why And How To Do It?</b></Link>
    <p style={{textAlign:"justify"}}>In order to perfectly photograph your old staff for reselling, you need to clean the products, accept the vintage look and maintain consistency....</p>
     <Link to="/product-reselling-photography-why-and-how-to-do-it"><button id="button7">Read More</button></Link>
   </div>
</Card>
</div>

</div>

<div class="row">

<div class="col-md-4">
<Card  style={{height:"98%"}}>
<img src="../../assets/images/Blogpost.jpg"  width="100%" height="58%" alt=""/>
  <div style={{padding:"2%"}}>
  <Link to="/5-important-photography-tips-for-beginners" style={{textDecoration:"none",color:"black"}}><b>5 Important Photography Tips For Beginners</b></Link>
    <p style={{textAlign:"justify"}}>In product photography, it’s important to always shoot in raw, adjust exposure triangle effectively, follow the rules of thirds and adjust your on-camera flash....</p>
    <Link to="/5-important-photography-tips-for-beginners"><button id="button7">Read More</button></Link>
   </div>
</Card>
</div>

<div class="col-md-4">
<Card style={{height:"98%"}}>
<img src="../../assets/images/Blog-12-1-min.jpg"  width="100%" height="58%" alt=""/>
  <div style={{padding:"2%"}}>
  <Link to="/car-photography-a-beginners-how-to-guide-and-tips" style={{textDecoration:"none",color:"black"}}> <b>Car Photography: A Beginner’s How-To Guide And Tips</b></Link>
    <p style={{textAlign:"justify"}}>In order to master the art of car photography, you need to find the perfect location, shooting time, get the best angles and ensure story telling....</p>
    <Link to="/car-photography-a-beginners-how-to-guide-and-tips"><button id="button7">Read More</button></Link>
   </div>
</Card>
</div>
<div class="col-md-4">
{/* <Card  style={{height:"98%"}}>
  <img src="assets/images/Blog-23.jpg" height="58%" width="100%"/>
  <div style={{padding:"2%"}}>
  <Link to="/easy-product-photography-solutions-for-small-business" style={{textDecoration:"none",color:"black"}}><b>Easy Product Photography Solutions for Small Business</b></Link>
    <p style={{textAlign:"justify"}}>The beginning of winter fills our minds with numerous excitements.
     It’s the season of Christmas, snowfall, and New Year. With a sudden change in...</p>
     <Link to="/easy-product-photography-solutions-for-small-business"><button id="button7">Read More</button></Link>
   </div>
</Card> */}
</div>

</div>
  </div>

  
  </div>
  <br/><br/>
</div>

  <div class="footer"style={{backgroundColor:"#231f20"}}>
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
export default AllBlogs;