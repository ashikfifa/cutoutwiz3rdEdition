import React, { Component } from "react";
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation} from "./";

 function FoodPhoto(props) {

    return(
        <div className="postphoto">
                     <Router >
      <Navigation />
      </Router>

            {/* META TAG AND META TITTLE */}

              <Helmet>
                <title>Top 8 Food Photography Tips for Beginners - CutOutWiz</title>
                <meta name="description" keywords= "Food Photography, Beginner photography" content="Photographing food lets you play with the ingredients and design the setting that would be most appealing to you. Food photographs bring great joy to both the photographer and the viewer."
                />
            </Helmet>



            <div id="button_back"style={{marginTop:"9%", backgroundColor: "#211f40",height: "100%",width: "100%"}}>

                 {/* BLOG TITTLE */}

            <p id="headpost"style={{color: "white",textAlign: "center",fontSize: "50px",top: "50%",fontWeight: "200"}}>Top 8 Food Photography Tips For Beginners</p>
            </div>



            <div class="container" style={{marginTop:"4%"}}>
            <div class="row">
            <div class="col-md-8" style={{height:"max-content"}}>



                  {/* BANNER IMAGE */}

                <img src="../../assets/images/1.jpg"  width="100%" height="20%" alt="French fries salad and other food items with forks and and sauce on a yellow background"/>


                {/* FIRST PARAGRAPH */}

                 <p style={{textAlign:"justify",marginTop:"4%",fontFamily:"poppins"}}>Whenever we enter a
                 restaurant, we’re given a menu with the names and photos of different food items. We often
                 place our orders based on the appearance of the food on the menu. Whether consciously
                  or unconsciously, we’re estimating the taste of the food based on its looks. Not
                   only that, you’ll often observe highly qualified chefs putting a lot of time and
                    effort into garnishing a dish and making it look clean, elegant, and mouthwatering.
                     All this proves the importance of the visual appeal of a food item. And what screams
                      louder about visual appeals than a well captured photo of food? Food photographs,
                       whether taken for passion or professional purposes, bring great joy to both the
                       photographer and the viewer.</p> <br/>



        {/* QUOTE  */}


    <i style={{fontSize:"20px",fontWeight:"700"}}>“Good food is the foundation of genuine happiness.”</i>        <br/> <br/>

        {/* WRITTER NAME NAD DESIGNATION*/}

                <p style={{textAlign:"right",fontFamily:"poppins",fontSize:"18px"}}>Auguste Escoffier<br/>
                French Chef</p>


        {/* SECOND PARAGRAPH */}

                <p style={{textAlign:"justify",marginTop:"4%",fontFamily:"poppins"}}>Foods are one of the
                basic necessities in order for us to keep being alive. But are the roles of food only
                 limited to that? Delicious food can be a primary motivator for many people as they bring
                  joy in our eyes and peace to our heart. Photographing food lets you play with the
                  ingredients and design the setting that would be most appealing to you. Here you have
                  an all-in-one role as chef, photographer and decorator. So everything you do is within
                   your own control. While it provides immense freedom, properly capturing the desirable
                   angle to make the food appeal to all is not an easy task. The tips to do that is what
                   we’ll be enlightening you with here. These tips will help you, regardless of whether
                    you are an amateur or a pro-chef.</p>




        {/* IMAGE */}

    <img src="../../assets/images/happy-young-group-having-lunch-home-asia-family-party-eating-pizza-food-making-selfie-with-her-friends-birthday-party-dining-table-together-house-celebration-holiday-togetherness-768x43.jpg" class="rounded mx-auto d-block"  width="80%" height="20%" alt="happy-young-group-having-lunch-home-asia-family-party-eating-pizza-food-making-selfie-with-her-friends-birthday-party-dining-table-together-house-celebration-holiday-togetherness"/>
<br/>


           {/* HEADLINE */}
           <p style={{fontSize:"20px",fontWeight:"700"}}>Top Strategies for Food Photography</p>


            {/* SUB-HEADING */}

           <p style={{fontSize:"18px",fontWeight:"700"}}>Be inspired to inspire others</p>



        {/* DESCRIPTION */}


           <p style={{textAlign:"justify"}}>Although food photography is a relatively new genre of
            photography, it’s evolved quite fast due to people’s love for delicious food. You’ll
            find many food photographers online with their regular blog posts or Instagram feeds and
             realize what an elegant and yet delicious an art form it is slowly becoming. All you need
              to do is visit their pages/feed regularly, see, read and observe the techniques they’re
               putting into the photographs. Regular monitoring and studying as such will inspire you
               to be more creative and keep you up to date as well.</p>



        {/* SUB-HEADING */}

           <p style={{fontSize:"18px",fontWeight:"700"}}>Consider Collaborations</p>

           {/* DESCRIPTION */}

           <p style={{textAlign:"justify"}}>Food photography can be quite tricky at times as
            it requires you do a handful of tasks all by yourself. What if you could delegate
            all these works to others? Try to collaborate with Chefs and stylists who can provide
             an expert level insight into your works. This will bring your workload to a minimum
             and you’ll be able to specialize just on the photography bit.  </p>


         {/* SUB-HEADING */}
           <p style={{fontSize:"18px",fontWeight:"700"}}>Photo Composition</p>


        {/* DESCRIPTION */}
           <p style={{textAlign:"justify"}}>The photos you click, no matter the genre, have to be
           placed in a way that draws the viewer’s attention. Be careful not to crowd the photo with
           too many tools, decorations or side dishes. Your primary subject should appear as the hero
            of the photo and a mere glace should be enough for your viewer to recognize it. You can
            implement the rule of thirds here where you divide the whole frame into nine equal parts
            and the core focus remains on keeping the subject on these lines or at their intersections.


           <br/><br/>  {/* ETA DIYE DUI PARAGRAPH ER MAJHE GAP BUJHAY */}

Take experimental pictures to figure out the best angles for photographing the particular food.
 For example- if it’s something round shaped like- a pizza or gravy on a china bowl, all items
 will seem more vibrant if the pictures are taken from above. On the other hand, if you want to
  flaunt the layers of burger, cake or ice cream, a side angle may be more appropriate.</p>

  


{/* PASPASHI DUITA IMAGE DITE CHAILE */}


                <div class="row">
                <div class="col-md-6">

                    {/* 1ST IMAGE */}

                    <img src="../../assets/images/top-view-meat-soup-with-greens-seasonings-dark-background.jpg"width="100%" height="100%" alt=""/>
                </div>
                <div class="col-md-6">

                    {/* 2ND IMAGE */}

                    <img src="../../assets/images/rainbow-layer-cake-isolated-white-background.jpg"width="100%" height="100%" alt="rainbow-layer-cake-isolated-white-background"/>
                </div>

            </div><br/>


        {/* HEADING */}

         <p style={{fontSize:"18px",fontWeight:"700"}}>Pick a background that speaks to you</p>

{/* DESCRIPTION */}

         <p style={{textAlign:"justify"}}>The primary goal of food photography is to make the viewers 
         crave for it. They should be able to picture themselves eating that food in the setting you
          designed! This is why, backgrounds are particularly important in food photography.
           For example- even two to-go coffee cups on a park bench may challenge nostalgia in 
           its viewers or food in an intentionally messy kitchen counter setup may seem more
            relatable and therefore attractive.  </p>



{/* PASPASHI DUITA IMAGE DITE CHAILE */}

         <div class="row">
                <div class="col-md-6">

                    {/* 1ST IMAGE */}


                    <img src="../../assets/images/two-cups-coffee-take-away-park-wooden-bench-early-morning-with-sunny-glow.jpg"width="100%" height="100%" alt="two-cups-coffee-take-away-park-wooden-bench-early-morning-with-sunny-glow"/>
                </div>


                {/* 2ND IMAGE */}

                <div class="col-md-6">
                    <img src="../../assets/images/grilled-chicken-legs-barbecue-sauce-with-pepper-seeds-parsley-salt-black-stone-plate-black-stone-table-1024x684.jpg"width="100%" height="100%" alt="grilled-chicken-legs-barbecue-sauce-with-pepper-seeds-parsley-salt-black-stone-plate-black-stone-table"/>
                </div>

            </div><br/>



        {/* HEADING */}

            <p style={{fontSize:"18px",fontWeight:"700"}}>Creativity is key</p>



{/* DESCRIPTION */}

<p style={{textAlign:"justify"}}>You can do everything according to the rulebook and yet have 
a food photograph that doesn’t speak to its viewers. Look at the two pictures carefully, which
 one seems more appealing? Obviously, the one on the right seems far juicier and more attractive 
 due to the shiny light brown color, the side angle that captured all the layers and the black
  background that shifts your full focus on the burger. The one on the left, on the other hand,
   seems more flat and dull. You need to make sure you’re working with bright color foods, styling
    it properly to get a picture that makes people crave for it.</p>




{/* PASPASHI DUITA IMAGE DITE CHAILE */}

<div class="row">
                <div class="col-md-6">

                     {/* 1ST IMAGE */}

                    <img src="../../assets/images/MicrosoftTeams-image-1 (3).jpg"width="100%" height="100%" alt="Unedited image of burger in white background"/>
                </div>
                <div class="col-md-6">

                     {/* 2ND IMAGE */}


                    <img src="../../assets/images/front-view-burger-stand.jpg"width="100%" height="100%" alt="Juicy layered burger with cheese lettuce and pickles"/>
                </div>

            </div><br/>


            {/* HEADING */}

   <p style={{fontSize:"18px",fontWeight:"700"}}>Lights, camera, food!</p>


        {/* DESCRIPTION */}

<p style={{textAlign:"justify"}}>Food calms us down, makes us feel full and in peace. Keeping that
 in mind, the lighting for food photography needs to be soft, eye soothing and shouldn’t distract 
 attention in any way. It’s best to go for natural lighting. Pick a spot near a large window, place your
  dish on a table and conduct the shoot during the golden hour (the short vibrant time after sunrise or 
  before sunset). Other than that, you can go for artificial options such as– <b>Softbox</b> with a golden 
  lighting to be reflected all over. Make sure the lights are coming from a slight angle and not directly
   behind the food. Also refrain from using harsh lighting such as- direct sunlight or in-camera flashes 
   that may distort the original color of your dish.</p>



{/* SINGLE IMAGE */}


        <img src="../../assets/images/6159822-768x432.jpg" class="rounded mx-auto d-block"  width="80%" height="20%" alt="Illustration of banner for winter collection with discount"/>
           <br/>





           <p style={{fontSize:"18px",fontWeight:"700"}}>Use props</p>


           <p style={{textAlign:"justify"}}>Props are like friends or companions to the main dish. They provide support to the main subject by enhancing its beauty and are normally either related to the ingredients or crockeries used in cooking or presenting the dish. Do remember that props are enhancing elements, they shouldn’t stand out more than the main dish or distract viewers in any way. Although the dish itself is good enough to stand out in the first picture, the spices added in the second pictures makes it look more fulfilled and vibrant that before- thus illustrating the magic props can bring to a food photograph.</p>




{/* PASPASHI DUITA IMAGE DITE CHAILE */}
           <div class="row">
                <div class="col-md-6">

                    
                    <img src="../../assets/images/top-view-vegetable-soup-with-meat-inside-plate-grey-1024x684.jpg"width="100%" height="100%" alt="top-view-vegetable-soup-with-meat-inside-plate-grey"/>
                </div>
                <div class="col-md-6">
                    <img src="../../assets/images/top-view-delicious-vegetable-soup-with-seasonings-grey-space-1024x684.jpg"width="100%" height="100%" alt="top-view-delicious-vegetable-soup-with-seasonings-grey-space"/>
                </div>

            </div><br/>


               <p style={{fontSize:"18px",fontWeight:"700"}}>Fresh food for fresh photos</p>


           <p style={{textAlign:"justify"}}>A freshly cooked meal with smoke still coming out of it looks more attractive than anything. The aroma, the vibrant color speaks to us all. As time goes by, the color becomes dull, food becomes soggy and dint or spots can start appearing as well. Never let food sit for too long before photographing it. No amount of light or editing can provide the vibrancy a freshly cooked meal can. If you’re working with vegetables or fruits, it’s best to buy them the day before the shoot. If that’s not possible and you have to buy them beforehand, cover them with a wet napkin before storing it in the fridge. That way, the water will protect the food from getting dinted.
           <br/><br/>
While photographing delicious looking food is one of the most fun things you’ll ever do, it also requires you to be skilled enough to breathe soul into it. But do not worry. By patiently following the recommended steps, you can embark on a bright and fun adventure of food photography and become an expert in it as well. Surely, practice leads to perfection and the same applies in case of food photography as well.</p>


             </div>







{/* END */}











             <div className="col-md-4">

            <div class="row">
            <div class="col-4 col-md-4">
                <div class="row-8">
            <img src="../../assets/images/types-of-photography.jpg"  width="100%" height="100%" alt=""/>
                </div>

            {/* <div class="row-4"style={{marginTop:"37%"}}>
            <img src="assets/images/latestblog.jpg"  width="100%" height="100%" alt=""/>
            </div> */}
            </div>

            <div class="col-8 col-md-8">
            <div class="row-4">
            <Link to="/types-of-photography-which-one-drive-your-inner-passion-most"style={{textDecoration:"none"}}>
                <p style={{fontSize:"18px",fontFamily:"poppins",color:"black"}}>Types Of Photography: Which One Drives Your Inner Passion Most?</p>
                </Link>
                </div>
            <div class="row-8">
                <p style={{fontSize:"14px",fontWeight:"100",opacity:"0.6"}}>Photographs are our way of capturing the world as we see it. It’s a medium of
                     expressing our inner thoughts and holding onto memories close</p>
            </div>
            </div>
            </div>


            <div class="row">
            <div class="col-4 col-md-4">
                <div class="row-8">
            <img src="../../assets/images/latestblog.jpg"  width="100%" height="100%" alt=""/>
                </div>
            </div>

            <div class="col-8 col-md-8">
            <div class="row-4">
            <Link to="/7-creative-winter-marketing-ideas-for-e-commerce-businesses"style={{textDecoration:"none"}}>
                <p style={{fontSize:"18px",fontFamily:"poppins",color:"black"}}>7 Creative Winter Marketing Ideas For E-Commerce Businesses</p>
               </Link>
                </div>
            <div class="row-8">
                <p style={{fontSize:"14px",fontWeight:"100",opacity:"0.6"}}>The beginning of winter fills our minds with
                numerous excitements. It’s the season of Christmas, snowfall, and New Year. With a sudden change in weather</p>
            </div>
            </div>
            </div>



            <div class="row">
            <div class="col-4 col-md-4">
                <div class="row-8">
            <img src="../../assets/images/Blog-21.jpg"  width="100%" height="100%" alt=""/>
                </div>

            {/* <div class="row-4"style={{marginTop:"37%"}}>
            <img src="assets/images/latestblog.jpg"  width="100%" height="100%" alt=""/>
            </div> */}
            </div>

            <div class="col-8 col-md-8">
            <div class="row-4">
            <Link to="/top-shopify-marketing-strategy-for-sellers"style={{textDecoration:"none"}}>
                <p style={{fontSize:"18px",fontFamily:"poppins",color:"black"}}>Top Shopify Marketing Strategy For Sellers</p>
            </Link>
                </div>
            <div class="row-8">
                <p style={{fontSize:"14px",fontWeight:"100",opacity:"0.6"}}>E-commerce platforms like Shopify are ultimate
                 friends of small business owners. The platform allows you to build your own website and shine in the world</p>
            </div>
            </div>
            </div>

            <div class="row">
            <div class="col-4 col-md-4">
                <div class="row-8">
            <img src="../../assets/images/Blogpost.jpg"  width="100%" height="100%" alt=""/>
                </div>

            {/* <div class="row-4"style={{marginTop:"37%"}}>
            <img src="assets/images/latestblog.jpg"  width="100%" height="100%" alt=""/>
            </div> */}
            </div>

            <div class="col-8 col-md-8">
            <div class="row-4">
            <Link to="/5-important-photography-tips-for-beginners"style={{textDecoration:"none"}}>
                <p style={{fontSize:"18px",fontFamily:"poppins",color:"black"}}>5 Important Photography Tips For Beginners</p>
                </Link>
                </div>
            <div class="row-8">
                <p style={{fontSize:"14px",fontWeight:"100",opacity:"0.6"}}>Photographs help us freeze a
                certain moment and then relive it again and again. It enables us to capture our happiest memories into a frame</p>
            </div>
            </div>
            </div>
<br/>
<br/>
           <p style={{fontWeight:"700",fontSize:"20px",fontFamily:"poppins"}}>Share:</p>
           <hr style={{width:"80%",border:"3px solid",backgroundColor:"black",opacity:"1",marginTop:"-3%"}}></hr>


           <div class="row">
         <div class="col-4 col-md-4">
           <a href="https://www.facebook.com/sharer.php?u=https://cutoutwiz.com/5-important-photography-tips-for-beginners/"target="_blank"><img src="../../assets/images/facebookblack.png"height="100%" width="50%" alt=""/></a>
        </div>

        <div class="col-4 col-md-4">
          <a href="https://twitter.com/intent/tweet?text=%20https://cutoutwiz.com/5-important-photography-tips-for-beginners/"target="_blank"> <img src="../../assets/images/twit.png"height="100%" width="50%" alt=""/></a>
        </div>

        <div class="col-4 col-md-4">
          <a href="    https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%3A%2F%2Fcutoutwiz.com%2F5-important-photography-tips-for-beginners%2F%26title%3D5%2520Important%2520Photography%2520Tips%2520for%2520Beginners%2520%25E2%2580%2593%2520CutOutWiz%26summary%3D%26source%3Dhttps%3A%2F%2Fcutoutwiz.com%2F5-important-photography-tips-for-beginners%2F"target="_blank"> <img src="../../assets/images/linkdn.png"height="100%" width="50%" alt=""/></a>
        </div>
    </div>





</div>
            </div>
        </div>
        <br/><br/>
        <p style={{textAlign:"center",color:"white",padding:"8px",backgroundColor:"black"}}>Designed And Developed By CutOutWiz</p>
        </div>
    );

 }

 export default FoodPhoto;