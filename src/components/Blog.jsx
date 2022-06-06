import React, { Component } from "react";
import { Link } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';
import Slider from "react-slick";
import {Helmet} from "react-helmet";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation} from "./";

function Blog() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className="blogs">
         <Router >
      <Navigation />
      </Router>
            <Helmet>
                <title>Image & Video Editing Company | Blogs | CutOutWiz</title>
                <meta name="description" keywords= "product photo editing" content="By implementing product photo editing, you'll be able to be removing backgrounds, edit a photo and ensure professional retouching. " 
                />
            </Helmet>
            <div className="">
                 <img src="assets/images/our_blogs.jpg" height="80%" width="100%" alt="Glasses on top of a open book"/>
            </div>

            <div class="container" style={{marginTop:"5%"}}>
                    <div class="row">
                        <div class="col-md-7">
                            <Slider {...settings}>
                           
                            <div>
                            <Link to="/minimize-your-bounce-rate"><img src="assets/images/Bounce-Rate-cover2.jpg" height="100%" width="100%" alt="minimize your bounce rate banner"/></Link>
                            </div>
                            <div>
                            <Link to="/product-photography-how-to-take-photos-for-your-e-commerce-business"><img src="assets/images/a9579b1d-9fb5-43b2-b45f-7244173a4473.jpg" height="100%" width="100%" alt="Ecommerce business owner clicking photos of shoes with other product boxes on his side"/></Link>
                            </div>
                            <div>
                            <Link to="/influencer-marketing-how-to-find-the-right-one"><img src="assets/images/Influencer_Marketing.jpg" height="100%" width="100%" alt="A hand holding a maget that symbolizes influencer marketing pulling consumers towards it"/></Link>
                            </div>
                            <div>
                            <Link to="/how-to-make-a-softbox-for-product-photography"><img src="assets/images/MicrosoftTeams-image-1 (1).jpg" height="100%" width="100%"alt="A grey bag on a wood table with a lit softbox pointed towards it"/></Link>
                            </div>
                            </Slider>
                        </div>

                        <div class="col-md-5">
                           <div class="row-md-6">
                           <div class="content"> <Link to="/top-8-food-photography-tips-for-beginners">
                    <div class="content-overlay"></div> <img class="content-image" src="assets/images/1.jpg" alt="French fries salad and other food items with forks and and sauce on a yellow background"/>
                    <div class="content-details fadeIn-bottom">
                        <p class="content-title" style={{fontSize:"20px",fontWeight:"600"}}>Top 8 Food Photography Tips For Beginners</p>
                    </div>
                </Link> </div>
                           </div>
                           
                           <div class="row-md-6"style={{marginTop:"4%"}}>
                           <div class="content"> <Link to="/top-shopify-marketing-strategy-for-sellers">
                    <div class="content-overlay"></div> <img class="content-image" src="assets/images/Blog-21.jpg"alt="Top Shopify Marketing Strategy For Sellers banner"/>
                    <div class="content-details fadeIn-bottom">
                        <p class="content-title"  style={{fontSize:"20px",fontWeight:"600"}}>Top Shopify Marketing Strategy For Sellers</p>
                    </div>
                </Link> </div>
                            </div>
                            
                        </div>
                    </div>
            </div>

            <div class="container">
                <h1 style={{textAlign:"center",marginTop:"6%",fontFamily:"poppins",fontWeight:"600"}}>OUR
                 FEATURED BLOGS</h1>
                <br/>
                <div class="row">
                    <div class="col-md-6" style={{height:"max-content"}}>
                   <Link to="/a-beginners-how-to-guide-for-clothing-photography" style={{textDecoration:"none"}}> <img src="assets/images/Blog-14-min.jpg" height="70%" width="100%" alt="A sweater, sock and beanie hat on a hanger"/>
                    <p style={{fontWeight:"600",fontFamily:"poppins",marginTop:"2%",color:"black"}}>A Beginner’s How-To Guide For Clothing Photography</p></Link>
                         <p style={{textAlign:"justify"}}>Clothes are not just a piece of fabric we drape over ourselves; rather
                          it tells people more about our choices and preferences. Clothes help us become our unique selves and
                           create an identity of our own. As an e-commerce apparel store owner, clothes you sell on your store
                            should represent an amalgamation of comfort, choice and style.</p>
                    </div>

                    <div class="col-md-3">
                        <div class="row-md-6">
                        <Link to="/7-creative-winter-marketing-ideas-for-e-commerce-businesses"style={{textDecoration:"none"}}>
                        
                        <img src="assets/images/latestblog.jpg" height="100%" width="100%" alt="Girl wearing a yellow sweater pointing to a piece of paper "/>
                        <p style={{fontWeight:"600",fontFamily:"poppins",color:"black"}}>7 Creative Winter
                         Marketing Ideas for E-commerce Businesses</p></Link>
                        </div>
                        <div class="row-md-6">
                        <Link to="/product-reselling-photography-why-and-how-to-do-it"style={{textDecoration:"none"}}>
                          
                        <img src="assets/images/Blog-10-min.jpg" height="100%" width="100%" alt="T-shirt, jeans and boots on a white surface"/>
                        <p style={{fontWeight:"600",fontFamily:"poppins",color:"black"}}>Product Reselling Photography: Why And How To Do It?</p></Link>
                        
                        </div>
                        
                    </div>

                    <div class="col-md-3">
                    <div class="row-md-6">
                    <Link to="/easy-product-photography-solutions-for-small-business"style={{textDecoration:"none"}}>
                    <img src="assets/images/Blog-23.jpg" height="100%" width="100%" alt="Girl photographer capturing ceramic bowls on her professional camera"/>
                    <p style={{fontWeight:"600",fontFamily:"poppins",color:"black"}}>Easy Product Photography Solutions
                     for Small Business</p></Link>
                    </div>
                        <br/>
                    <div class="row-md-6">
                    <Link to="/5-important-photography-tips-for-beginners"style={{textDecoration:"none"}}>   
                    <img src="assets/images/Blogpost.jpg" height="100%" width="100%" alt="A guy with a camera on his hand clicking pictures"/>
                    <p style={{fontWeight:"600",fontFamily:"poppins",color:"black"}}>5 Important Photography Tips for Beginners</p></Link>
                    </div>
                        
                    </div>
                </div>
            </div>

            <div class="container">
            <h1 style={{textAlign:"center",marginTop:"6%",fontFamily:"poppins",fontWeight:"600"}}>LATEST BY CATEGORY</h1>
        <br/>
            <div class="row">
                <div class="col-md-3">
                <div class="row-md-6">
                <Link to="/product-photography-how-to-take-photos-for-your-e-commerce-business"style={{textDecoration:"none"}}>
                    <img src="assets/images/a9579b1d-9fb5-43b2-b45f-7244173a4473.jpg" height="100%" width="100%" alt="Ecommerce business owner clicking photos of shoes with other product boxes on his sides"/>
                    <p style={{fontWeight:"600",fontFamily:"poppins",color:"black"}}>Product Photography: How to take photos for your E-commerce Business</p></Link>
                    </div>

                    <div class="row-md-6">
                    <Link to="/top-shopify-marketing-strategy-for-sellers"style={{textDecoration:"none"}}>
                    <img src="assets/images/Blog-21.jpg" height="100%" width="100%" alt="Glasses on top of a open book"/>
                    <p style={{fontWeight:"600",fontFamily:"poppins",color:"black"}}>Top Shopify Marketing Strategy for Sellers</p></Link>
                    </div>
                </div>


                <div class="col-md-6">
                <Link to="/car-photography-a-beginners-how-to-guide-and-tips">
                    <img src="assets/images/Blog-12-1-min.jpg" height="67%" width="100%" alt="A dashing red car on the road"/></Link>
                    <p style={{textAlign:"justify"}}>Cars carry different meaning for different people. For some, it’s a necessity to get from one place to another. To a certain group, cars provide a sense of independence and adventure; creating that exciting adrenaline rush a lot of people crave for. To others, an attractive car photography works as a stairway to achieving and maintaining a position in high society.</p>
                    
                    <Link to="/car-photography-a-beginners-how-to-guide-and-tips"><button id="button10">Read More</button></Link>
                    </div>


                <div class="col-md-3">
                <div class="row-md-6">
                <Link to="/influencer-marketing-how-to-find-the-right-one"style={{textDecoration:"none"}}>
                    <img src="assets/images/Influencer_Marketing_2.jpg" height="100%" width="100%" alt="A hand holding a maget that symbolizes influencer marketing pulling consumers towards it"/>
                    <p style={{fontWeight:"600",fontFamily:"poppins",color:"black"}}>Influencer Marketing: How to Find the Right One</p>
                   </Link>
                   </div>

                    <div class="row-md-6">
                    <Link to="/product-reselling-photography-why-and-how-to-do-it"style={{textDecoration:"none"}}>
                          
                        <img src="assets/images/Blog-10-min.jpg" height="100%" width="100%" alt="T-shirt, jeans and boots on a white surface"/>
                        <p style={{fontWeight:"600",fontFamily:"poppins",color:"black"}}>Product Reselling Photography: Why And How To Do It?</p></Link>
                        
                    </div>
                </div>

            </div>
            <br/>


            <div class="row">


                <div style={{textAlign:"center"}}>
                <Link to="/all-blogs">    <button id="button10">SEE MORE</button></Link>
                </div>

            </div>

         </div>

            <br/>
        </div>

    );
}

export default Blog;