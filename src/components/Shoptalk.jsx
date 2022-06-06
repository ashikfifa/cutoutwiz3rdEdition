import React from "react";
import {Helmet} from "react-helmet";
import emailjs from "emailjs-com";
import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';
import Slider from "react-slick";
import ShowMore from 'react-show-more-button';
import { Link } from 'react-router-dom';


function Shoptalk(props) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
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

  function sendEmail(e) {
    e.preventDefault();

emailjs.sendForm('service_1zfatsb', 'template_aak2bzj', e.target, 'user_3TcS4pRKMgpo7fArsKmSf')
    .then((result) => {
        console.log(result.text);
        window.location.href = "https://cutoutwiz.com/thank-you";
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
    
}

  return (

    <div className="postphoto">
          <Helmet>
                <style>{'body { background-color: #f2f3f5; }'}</style>
          </Helmet>

          <div class="container">
            <div class="row"style={{marginTop:"6%"}}>
                <div class="col-md-6">
                
                  <p style={{fontSize:"30px",fontWeight:"100"}}>Have any question about <br/> Image & Video Post Production <br/> Service or Cutoutwiz?</p>
                

                <p>Complete The Form With Your Questions And <br/> We'll Get Back to You As Soon As Possible </p>
                
                <img src="../../assets/images/shop.gif" alt="" />
                </div>
                <div class="col-md-6" style={{marginTop:"10%"}}>
                <div >
                <Card style={{width:"78%"}}>
        <div style={{padding:"6%"}}>
        <b style={{fontSize:"20px", fontWeight:"900"}}>SHOPTALK 2022 : PREPARE YOURSELF</b>
          <p style={{textAlign:"justify"}}>As a retailer, you work as the connecting dot between suppliers and consumers. Having a constant smile on your face is a must and being rude is never an option.You copnstantly update yourself</p>
          <div class="text-center">
          {/* <button id="button7">Download The PDF</button> */}

          <ShowMore maxHeight={80}>
      <form onSubmit={sendEmail}>
    {/* {renderAlert()} */}
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
                  <div class="text-center">
                  <input type="submit" id="button-19" className="btn btn-info" value="SUBMIT"></input>
                  </div>
                </div>
            </div>
        </form>
 </ShowMore>
          </div>

         </div>
    </Card>
    </div>
    
    <div style={{marginLeft:"23%"}}>
          <button id="button32">Book an appoinment</button>
          </div>
          <p style={{fontSize:"12px",marginLeft:"31%"}}>Or Make a Call</p>
          <p style={{fontSize:"16px",fontWeight:"900",marginLeft:"30%",marginTop:"-3%"}}>
 +1 (415) 799-7876

 </p>
                </div>
              </div>
        </div>
        <br/><br/>

        <div class="containers"id="overflow"  style={{backgroundColor:"white"}}>
{/* <div class="container"id="overflow"> */}
       
        <Slider {...settings}>
          <div class="card"id="" style={{width: "8rem",borderRadius:"10px"}}>
              <img src="assets/images/quote (1).png" class="rounded mx-auto d-block"  width="70" height="50" alt=""style={{marginTop:"11%"}}/><br/>
              <div class="card-body">
                <p class="card-text"style={{textAlign:"center",fontWeight:"200",fontSize:"13px"}}>I am very pleased with their work.
                 The team is very patient and accommodating to all my requests. I will definitely work with them.</p>
                 <img src="assets/images/5 star.png" class="rounded mx-auto d-block"  width="13%" height="13%" alt=""/>
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

    </div>

  );
  
}

export default Shoptalk;