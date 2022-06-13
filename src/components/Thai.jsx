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
import { Navigationth} from "./";

 function Thai(props) {

  
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
      <Navigationth />
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
                <p style={{fontSize:"34px",fontWeight:"500",fontFamily:"Poppins"}}>เราให้บริการ</p>
                
                 <p style={{fontSize:"38px",fontWeight:"700",marginTop:"-33px"}}>Image and Video</p>
                <p style={{fontSize:"38px",fontWeight:"700",marginTop:"-30px"}}>
                <Typical
                    steps={['ปรับแต่ง', 1000, 'การแก้ไขสีและเปลี่ยนสี', 500, 'การรีทัชภาพ', 500, 'ระบบอัตโนมัติ', 500]}
                    loop={Infinity}
                    wrapper="p"
                />               
                </p>

                <hr id="border2"></hr>
                <p style={{fontWeight:"500",fontFamily:"Poppins"}}>โซลูชันหลั<br/>
                งการผลิตเนื้อหาของคุณ</p>
                
                <div class="row">
                  <div class="col-6 col-md-4">
                  <a class="" href="https://app.cutoutwiz.com/"target="_blank"><button class="button1">ทดลองใช้ฟรี</button> </a></div>
               
                <div class="col-6 col-md-8">
                <Link to="/th/contact-us" ><button type="button" id="button2">เสนอราคาฟรี</button></Link>
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
                <p class="card-text"style={{marginTop:"-7%",fontWeight:"500"}}>ภาพต่อวัน<br/>ประมวลผลภาพ</p>
              </div>
              </div>
          </div>
          
          <div class="col-6 col-md">
          <div class="card" style={{width: "100%",borderRadius:"10px"}}>
              <img src="assets/images/team.png"style={{marginLeft:"4%"}}  width="30%" height="10%" alt="Team icon"/><br/>
              <div class="card-body"style={{marginTop:"-3%"}}>
                <h4 class="card-title">500+</h4>
                <hr style={{width:"32%",border:"1px solid",backgroundColor:"black",opacity:"1",marginTop:"-1%"}}></hr>
                <p class="card-text"style={{marginTop:"-7%",fontWeight:"500"}}>ทีมงาน<br/>มากกว่า</p>
              </div>
              </div>
          </div>

          <div class="col-6 col-md">
          <div class="card" style={{width: "100%",borderRadius:"10px"}}>
              <img src="assets/images/support.png"  width="30%" height="10%" alt="Support icon"/><br/>
              <div class="card-body"style={{marginTop:"-3%"}}id="text">
                <h4 class="card-title">365 วัน</h4>
                <hr style={{width:"32%",border:"1px solid",backgroundColor:"black",opacity:"1",marginTop:"-1%"}}></hr>
                <p class="card-text"style={{marginTop:"-7%",fontWeight:"500"}}>ลูกค้า<br/>บริการล
</p>
              </div>
              </div>
          </div>

          <div class="col-6 col-md">
          <div class="card" style={{width: "100%",borderRadius:"10px"}}>
              <img src="assets/images/delivery.png"  width="30%" height="10%" alt="clock icon"/><br/>
              <div class="card-body"style={{marginTop:"-3%"}}>
                <h4 class="card-title">12 ชั่วโมงห</h4>
                <hr style={{width:"32%",border:"1px solid",backgroundColor:"black",opacity:"1",marginTop:"-1%"}}></hr>
                <p class="card-text"style={{marginTop:"-7%",fontWeight:"500"}}>รือน้อยกว่า<br/>เวลาจัดส่ง</p>
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
                <p class="card-text"style={{marginTop:"-7%",fontWeight:"500"}}>ฟรี<br/>ภาพทดลอง</p>
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
    <h1 style={{textAlign:"center",fontFamily:"poppins",fontWeight:"700"}}>บริการ</h1>
    <p style={{textAlign:"center",fontFamily:"poppins",fontSize:"20px",fontWeight:"100"}}>บริการแก้ไขภาพ</p><br/><br/>

    <div class="row"style={{marginTop:"-3%"}}>
      <div class="col-md-3">
      <BeforeAfterSlider 
          before= {"assets/images/Photo-Retouch-Afterlive.jpg"} alt="Beautiful girl smiling elegantly"
          after={"assets/images/Photo-Retouch-before.jpg"} alt="Beautiful girl with frackles on her face smiling elegantly"
          width={260}
          height={200}
        />
        <p style={{fontWeight:"700",textAlign:"center"}}>การรีทัชภาพ </p>
        </div>

      <div class="col-md-3">
      <BeforeAfterSlider
          before={"assets/images/Background-Removal-After.jpg"} alt="Red and white sports shoes on a transparent background"
          after={"assets/images/Background-Removal-Before.jpg"} alt="Red and white sports shoes on a red background"
          width={260}
          height={200}
        />
        <p style={{fontWeight:"700",textAlign:"center"}}>ลบพื้นหลังออกจากภาพ</p>
      </div>

      <div class="col-md-3">
      <BeforeAfterSlider
          before={"assets/images/Photo-Recolor-After.jpg"} alt="Stylish girl wearing yellow shirt and and white scart posing with a candy"
          after={"assets/images/Photo-Recolor-Before.jpg"} alt="Stylish girl wearing red shirt and white scart posing with a candy"
          width={260}
          height={200}
        />
        <p style={{fontWeight:"700",textAlign:"center"}}>ชั้นวางภาพ</p>
      </div>

      <div class="col-md-3">
      <BeforeAfterSlider
          before={"assets/images/Shadow-Creation-Before.jpg"} alt="A white vase on a white surface and white background"
          after={"assets/images/Shadow-Creation-After-1.jpg"} alt="A white vase on white background"
          width={260}
          height={200}
        />
        <p style={{fontWeight:"700",textAlign:"center"}}>การสร้างเงา </p>
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
        <p style={{fontWeight:"700",textAlign:"center"}}>หุ่นผี</p>
      </div>

      <div class="col-md-3">
      <BeforeAfterSlider
          before={"assets/images/Color-Correction_After.jpg"} alt="BBQ chicken decorated with small tomato and letucce served with tomato sauce on a ciramic plate"
          after={"assets/images/Color-Correction_Before.jpg"} alt="BBQ chicken decorated with small tomato and letucce served with tomato sauce on a ciramic plate"
          width={260}
          height={200}
        />
        <p style={{fontWeight:"700",textAlign:"center"}}>แก้ไขสีดำ </p>
      </div>

      <div class="col-md-3">
      <BeforeAfterSlider
          before={"assets/images/Image-Masking-After.jpg"} alt="A dog with wild eyes running on white background"
          after={"assets/images/Image-Masking-Before.jpg"} alt="A dog with wild eyes running on a field"
          width={260}
          height={200}
          textAlign={"center"}
        />
        <p style={{fontWeight:"700",textAlign:"center"}}>การปิดบังภาพ</p>
      </div>
      
      <div class="col-md-3">
      <BeforeAfterSlider
          before={"assets/images/Manipulation-After.jpg"} alt="Rice served with shrimps on a glass plate and vegetables lyring around"
          after={"assets/images/Manipulation-Before.jpg"} alt="Rice served with shrimps on a glass plate "
          width={260}
          height={200}
        />
        <p style={{fontWeight:"700",textAlign:"center"}}>การจัดการภาพ</p>
      </div>
    </div>
    <br/><br/>
    </div>

<div style={{backgroundColor:"#f3f5f7"}}>
  <br/>
    <div class="container" id="videos">
    <h1 style={{textAlign:"center",fontFamily:"poppins",fontWeight:"700"}}>บริการ</h1>
    <p style={{textAlign:"center",fontFamily:"poppins",fontSize:"20px",fontWeight:"100"}}>บริการตัดต่อวิดีโอ</p><br/><br/>

    
    <div class="row"style={{marginTop:"-5%"}}>
      <div class="col-md-6">
      <video  height="100%" width="100%" controls="controls" poster="assets/images/Screenshot (7).png"alt="audio-editing-service-poster" style={{cursor:"pointer"}}> <source src="assets/images/Audio_Editing_Service_1.mp4"></source></video>
      <p style={{textAlign:"center"}}>บริการตัดต่อเสียง </p>
      </div>

      <div class="col-md-6">
      <video  height="99.5%" width="100%" controls="controls" poster="assets/images/cropping.png"alt="video-cropping-service-poster"> <source src="assets/images/Video_Cropping_Service_1.mp4"></source></video>
      <p style={{textAlign:"center"}}>บริการตัดต่อวิดีโอ </p>
      </div>
    </div>
    <br/>

    <div class="row">
      <div class="col-md-6">
      <video  height="100%" width="100%" controls="controls" poster="assets/images/subtittle.png"alt="subtittle-addition-service-poster"> <source src="assets/images/Subtitile_Addition_Service_1.mp4"></source></video>
      <p style={{textAlign:"center"}}>เพิ่มคำบรรยาย </p>
      </div>

      <div class="col-md-6">
      <video  height="99.5%" width="100%" controls="controls" poster="assets/images/tittle.png"alt="tittle-addition-service-poster"> <source src="assets/images/Title_Addition_Service_1.mp4"></source></video>
      <p style={{textAlign:"center"}}>การเพิ่มชื่อเรื่อง </p>
      </div>
    </div>
<br/><br/><br/><br/>
</div>
</div>
   

  <div class="container"id="apps"style={{marginTop:"4%"}}>
    <h1 style={{textAlign:"center",fontWeight:"500"}}>แอพและการรวมเข้าด้วยกัน</h1><br/>
    <p style={{textAlign:"center",marginTop:"-1%",fontSize:"20px"}}>แอพของเราอยู่บนแพลตฟอร์มอีคอมเมิร์ซที่สำคัญ</p><br/><br/>

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
    <h1 style={{textAlign:"center",fontFamily:""}}>เลือกแผนของคุณ</h1>
    <p style={{textAlign:"center",marginTop:"-1%",fontSize:"20px"}}>แพ็คเกจของเราคือสิ่งที่ร้านค้าของคุณต้องการ</p><br/>

    <div class="row">
      <div class="col-md-4">

      <h2 style={{fontWeight:"700",marginTop:"35%"}}> ค่าบริการ</h2>

      <p style={{textAlign: "justify"}}>เรามีหลายราคาให้คุณเลือกเพื่อช่วยให้งานของคุณบรรลุเป้าหมาย โดยที่คุณสามารถเลือกราคาที่ตรงตามความต้องการของคุณได้อย่างลงตัว หากคุณกำลังมองหาบริการอื่น หรือต้องการใบเสนอราคาจากเราสำหรับบริการพิเศษเฉพาะสำหรับธุรกิจของคุณ โปรดส่งข้อความมาหาเราผ่านแบบฟอร์มติดต่อเรา</p>
      
      </div>
      <div class="col-md-8">
<div class="bodyp">
  <div class="containerp">
      <div class="column">
        <div class="pricing-card basic">
          <div class="pricing-header">
            <span class="plan-title">แบบพื้นฐาน</span>
            <div class="price-circle">
            <span class="info" style={{paddingTop: "22%",fontSize: "14px",color: "black"}}>เริ่มต้น </span>
              <span class="price-title" style={{marginTop: "-29%"}}>
                <small>$</small><span>1.19</span>
              </span>
              <span class="info" style={{marginTop: "-6%"}}>/หลายภาพ</span>
            </div>
          </div>

          <ul>
            <li>
              <strong>5</strong> Domains
            </li>
            <li>
              <strong>1-100</strong> ภาพ/คำสั่งซื้อ
            </li>
            <li>
                ฟรี <strong>10 </strong> ภาพ 
            </li>
            <li>
               ฟรีพื้นที่เก็บข้อมูล <strong>1</strong>เดือน
            </li>
            <li>
               ฝ่ายสนับสนุนลูกค้าทุกวันตลอด <strong>24/7</strong> ชั่วโมง
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
            <span class="plan-title">แบบมาตรฐาน</span>
            <div class="price-circle">
            <span class="info" style={{paddingTop: "22%",fontSize: "14px",color: "black"}}>เริ่มต้นที่</span>
              <span class="price-title" style={{marginTop: "-29%"}}>
                <small>$</small><span>0.99</span>
              </span>
              <span class="info" style={{marginTop: "-6%"}}>/ หลายภาพ</span>
            </div>
          </div>

          <ul>
            <li>
              <strong>5</strong> Domains
            </li>
            <li>
              <strong>101-500</strong> ภาพ/คำสั่งซื้อ
            </li>
            <li>
               ฟรี <strong>10 </strong> ภาพ
            </li>
            <li>
            ฟรีพื้นที่เก็บข้อมูล <strong>2</strong>เดือน
            </li>
            <li>
            ฝ่ายสนับสนุนลูกค้าทุกวันตลอด <strong>24/7</strong> ชั่วโมง
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
            <span class="plan-title">แบบพรีเมี่ยม</span>
            <div class="price-circle">
              <span class="price-title">
               <span style={{fontSize:"21px"}}> <strong>ติดต่อ </strong></span><br/>
               <span style={{marginTop:"-7%"}}>เรา</span>
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
              <strong>500</strong> ꝏ ภาพ/คำสั่งซื้อ
            </li>
            <li>
            ฟรี <strong>10 </strong> ภาพ
            </li>
            <li>
            ฟรีพื้นที่เก็บข้อมูล <strong>2</strong>เดือน
            </li>
            <li>
            ฝ่ายสนับสนุนลูกค้าทุกวันตลอด <strong>24/7</strong> ชั่วโมง
            </li>
          </ul>
          <div class="buy-button-box">
            <Link to="/th/contact-us" target="_blank" class="buy-now">ORDER NOW</Link>
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
    <h1 style={{textAlign:"center"}}>วิธีการสั่งซื้อ</h1>

    <p style={{textAlign:"center",marginTop:"-1%",fontSize:"20px"}}> เพียงทำตามขั้นตอนง่ายๆเหล่านี้ จากนั้นเราจะดำเนินการต่อเอง</p> 

    <div class="row">
      <div class="col-md-6" style={{marginTop:"3%"}}>
        <p>
       <b> ขั้นตอนที่ 1: </b><br/>
       เข้าสู่ระบบเพื่อเริ่มต้น <br/>
          <b> ขั้นตอนที่ 2: </b><br/>
          เลือกแบบแผนสมัครสมาชิกที่คุณต้องการ<br/>
          <b> ขั้นตอนที่ 3: </b><br/>
          ไปที่บัญชีของคุณเพื่อทำการสั่งซื้อ<br/>
          <b> ขั้นตอนที่ 4: </b><br/>
          อัพโหลดภาพที่คุณต้องการให้เราแก้ไข<br/>
          <b> ขั้นตอนที่ 5: </b><br/>
          เราจะประมวลผลภาพให้คุณ<br/>
          <b> ขั้นตอนที่ 6: </b><br/>
          ดาวน์โหลดภาพที่ถูกแก้ไขแล้ว
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
  <h2>เราอยู่ที่นี่เพื่อ<br/><span style={{fontWeight:"600"}}>ตอบทุกคำถามของคุณ</span><br/></h2>
  <Link to="/th/contact-us"><button type="button" id="button17">ติดต่อเรา</button></Link>
  </div>
</div> 

<div style={{marginBottom:"4%"}}>
    <h1 style={{textAlign:"center",marginTop:"4%"}}>เรื่องราวของเรา</h1>

<p style={{textAlign:"center",marginTop:"-0.5%",fontSize:"20px"}}>เราคือใครและมีความเป็นมาอย่างไร</p> 


<div class="container"style={{marginTop:"2%"}}>
    <div class="row">
      <div class="col-md-6"style={{height:"max-content"}}>
      <img src="assets/images/story3.jpg" height="430px" width="100%" alt="The kow company office space" />
      </div>
      <div class="col-md-6" >

        <h2>เราช่วยคุณได้อย่างไร<br/>
        บรรลุธุรกิจของคุณ <br/>
        เป้าหมาย</h2>

<hr id="border5"></hr>


<p style={{textAlign:"justify"}}>CutOutWiz เป็นหนึ่งในบริษัทตัดต่อรูปภาพและวิดีโอชั้นนำสำหรับธุรกิจทั่วโลก ในขณะที่โลกกำลังเคลื่อนไปสู่อนาคตเสมือนจริง การตัดต่อรูปภาพผลิตภัณฑ์ออนไลน์จึงสามารถข้าถึงได้มากขึ้นเรื่อยๆ รูปภาพผลิตภัณฑ์แบบ HD จึงเป็นสิ่งที่กระตุ้นยอดขาย เราเป็นพาร์ทเนอร์ให้กับบริษัทอีคอมเมิร์ซที่มีชื่อเสียงหลายแห่งทั่วโลกในหลากหลายอุตสาหกรรมสำหรับการตัดต่อภาพออนไลน์ที่มีความน่าเชื่อถือ เราให้บริการปรับแต่ง(ประมวลผล) ทุกภาพตั้งแต่บริการที่เป็นที่นิยมทั่วไป เช่น การลบภาพพื้นหลัง การแก้ไขสี การรีทัชภาพ หุ่นจำลองล่องหน ไปจนถึงบริการที่มีความซับซ้อน เช่น การปรับองค์ประกอบต่างๆในภาพ เหตุผลเบื้องหลังความสำเร็จของเราคือเราเชื่อมั่นในลูกค้าเป็นอันดับแรกและให้บริการที่มีคุณภาพดีที่สุด</p>
     
      </div>
    </div>
    </div>
</div>


<div class="footer"style={{backgroundColor:"#231f20"}}>
    <div class="container">
    <div class="row">
    <div class="col-md-3"style={{marginTop:"4%"}}>
    <Link to="/" target="_blank"><img src="assets/images/ailogo.png"style={{marginTop:"3%"}} width="170" height="40" alt=""/></Link>

    <p style={{textAlign:"justify",color:"#b7b9bb",marginTop:"4%"}}>CutOutWiz เป็นหนึ่งในบริษัทตัดต่อรูปภาพและวิดีโอชั้นนำสำหรับธุรกิจต่างๆ ทั่วโลก.</p>
    <a href="https://www.facebook.com/cutoutwiz"target="_blank" class="fa fa-facebook"></a>
    <a href="https://twitter.com/cut_wiz?s=09"target="_blank" class="fa fa-twitter"></a>
    <a href="https://www.linkedin.com/company/cutoutwiz-ltd"target="_blank" class="fa fa-linkedin"></a>
    <a href="https://www.youtube.com/channel/UClIkCcEBksZigP56p593fDQ"target="_blank" class="fa fa-youtube"></a>
    <a href="https://www.instagram.com/accounts/login/"target="_blank" class="fa fa-instagram"></a>
    </div>
   
        <div class="col-6 col-md-2"style={{marginTop:"5%"}}>
            <b style={{color:"white",fontSize:"20px"}}>เมนู</b>

            <p style={{color:"#b7b9bb",marginTop:"8%"}}>
         <Link to="/" target="_blank"  style={{textDecoration:"none",color:"#b7b9bb"}}> หน้าแรก</Link> <br/>
         <Link to="#apps" target="_blank"  style={{textDecoration:"none",color:"#b7b9bb"}}> คุณสมบัติ</Link><br/>
         <Link to="#images" target="_blank"  style={{textDecoration:"none",color:"#b7b9bb"}}>  บริการต่างๆ</Link><br/>
         <Link to="#prices" target="_blank"  style={{textDecoration:"none",color:"#b7b9bb"}}>  การตั้งราคา</Link><br/>
         <Link to="#blogs" target="_blank"  style={{textDecoration:"none",color:"#b7b9bb"}}> บล็อก</Link>
            </p>
        </div>

        <div class="col-6 col-md-2"style={{marginTop:"5%"}}>
        <b style={{color:"white",fontSize:"20px"}}>คุณสมบัติ</b>
            <p style={{color:"white",marginTop:"8%"}}>
            <a href="https://apps.shopify.com/cutoutwiz" target="_blank"  style={{textDecoration:"none",color:"#b7b9bb"}}>Shoppify App</a> <br/>
            <a href="https://sellercentral.amazon.com/gspn/provider-details/Imaging/284b7303-cec9-403e-b763-375399824520?ref_=sc_gspn_ilst_idt-284b7303&localeSelection=en_US&sellFrom=US&sellIn=US" target="_blank" style={{textDecoration:"none",color:"#b7b9bb"}}> AmazonSPN </a><br/>
            <a href="https://app.cutoutwiz.com" target="_blank" style={{textDecoration:"none",color:"#b7b9bb"}}> Cutoutwiz</a><br/>
            <a href="https://www.bigcommerce.com/apps/cutoutwiz" target="_blank" style={{textDecoration:"none",color:"#b7b9bb"}}> BigCommerce App</a><br/>
            <a href="https://www.shotflow.com/" target="_blank" style={{textDecoration:"none",color:"#b7b9bb"}}> Shotflow</a>
            </p>
        </div>

        <div class="col-6 col-md-2"style={{marginTop:"5%"}}>
        <b style={{color:"white",fontSize:"20px"}}>ลิงค์ที่เป็นประโยชน์</b>

          <p style={{color:"white",marginTop:"8%"}}>
         <Link to="/privacy-policy" target="_blank"style={{textDecoration:"none",color:"#b7b9bb"}}>นโยบายความเป็นส่วนตัว </Link> <br/>
         <Link to="/terms-and-conditions" target="_blank"style={{textDecoration:"none",color:"#b7b9bb"}}> ข้อกำหนดและเงื่อนไข</Link><br/>
         <Link to="/th/contact-us" target="_blank"style={{textDecoration:"none",color:"#b7b9bb"}}>ติดต่อเรา</Link> <br/>
          <a href="https://app.cutoutwiz.com/" target="_blank" style={{textDecoration:"none",color:"#b7b9bb"}}>สมัคร</a> <br/>
          </p>
        </div>     
  

      <div class="col-6 col-md-3"style={{marginTop:"5%"}}>
      <b style={{color:"white",fontSize:"20px"}}>ที่อยู่ของเรา</b> <br/>   <br/>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10329.283883735325!2d90.39304891556642!3d23.749043274767246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc1fb12dbea63beca!2sCutOutWiz!5e0!3m2!1sbn!2sbd!4v1639129804206!5m2!1sbn!2sbd"
      width="70%" height="50%" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>

      </div>
      
      </div> 
    </div>
    <p style={{textAlign:"center",color:"white",padding:"8px",backgroundColor:"black"}}>ออกแบบและพัฒนาโดย <Link to="/" target="_blank"  style={{textDecoration:"none",color:"white"}}>CutOutWiz</Link></p>
    
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
export default Thai;