import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Navigationfr, Home, Contact, Blog, Postphotography, Footer} from "./components";
import Typesofphoto from "./components/typesofphoto";
import Wintermarketing from "./components/Wintermarketing";
import Easyproductphoto from "./components/Easyproductphoto";
import Topshopify from "./components/Topshopify";
import Videoediting from "./components/Videoediting";
import Softbox from "./components/Softbox";
import Minimizebounce from "./components/Minimizebounce";
import Termsconditions from "./components/Termsconditions";
import Privacypolicy from "./components/Privacypolicy";
import ClothingPhoto from "./components/ClothingPhoto";
import CarPhoto from "./components/CarPhoto";
import ProductReselling from "./components/ProductReselling";
import FoodPhoto from "./components/FoodPhoto";
import InfluenceMarketing from "./components/InfluenceMarketing";
import ScrollToTop from "./components/ScrollToTop";
import Newyear from "./components/Newyear";
import Productphotography from "./components/Productphotography";
import Thankyou from "./components/Thankyou";
import Thankyoues from "./components/Thankyoues";
import Thankyounl from "./components/Thankyounl";
import Thankyoude from "./components/Thankyoude";
import Thankyoufr from "./components/Thankyoufr";
import Demoblog from "./components/Demo-blog";
import NotFound from "./components/NotFound";
import AllBlogs from "./components/AllBlogs";
import Bookacall from "./components/Bookacall";
import Contacttest from "./components/Contacttest";
import Shoptalk from "./components/Shoptalk";
import Shoptalk2 from "./components/Shoptalk2";
import Shoptalk3 from "./components/Shoptalk3";
import Spanish from "./components/Spanish";
import France from "./components/France";
import Germany from "./components/Germany";
import Netherland from "./components/Netherland";
import Contactusfr from "./components/Contactusfr";
import Contactes from "./components/Contactes";
import Contactge from "./components/Contactge";
import Contactne from "./components/Contactne";



function App() {

  return (
    <Router >
    <div className="App">
    <ScrollToTop/>
        {/* <Navigation /> */}
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/contact-us" exact component={() => <Contact />} />
          <Route path="/blog" exact component={() => <Blog />} />
          <Route path="/footer" exact component={() => <Footer />} />
          <Route path="/5-important-photography-tips-for-beginners" exact component={() => <Postphotography />} />
          <Route path="/types-of-photography-which-one-drive-your-inner-passion-most" exact component={() => <Typesofphoto />} />
          <Route path="/7-creative-winter-marketing-ideas-for-e-commerce-businesses" exact component={() => <Wintermarketing />} />
          <Route path="/easy-product-photography-solutions-for-small-business" exact component={() => <Easyproductphoto />} />
          <Route path="/top-shopify-marketing-strategy-for-sellers" exact component={() => <Topshopify />} />
          <Route path="/5-interesting-video-editing-facts" exact component={() => <Videoediting />} /> 
          <Route path="/minimize-your-bounce-rate" exact component={() => <Minimizebounce />} /> 
          <Route path="/how-to-make-a-softbox-for-product-photography" exact component={() => <Softbox />} /> 
          <Route path="/terms-and-conditions" exact component={() => <Termsconditions />} /> 
          <Route path="/privacy-policy" exact component={() => <Privacypolicy />} /> 
          <Route path="/top-new-year-resolution-for-your-online-store" exact component={() => <Newyear />} /> 
          <Route path="/product-photography-how-to-take-photos-for-your-e-commerce-business" exact component={() => <Productphotography />} /> 
          <Route path="/a-beginners-how-to-guide-for-clothing-photography" exact component={() => <ClothingPhoto />} /> 
          <Route path="/car-photography-a-beginners-how-to-guide-and-tips" exact component={() => <CarPhoto />} /> 
          <Route path="/product-reselling-photography-why-and-how-to-do-it" exact component={() => <ProductReselling />} /> 
          <Route path="/top-8-food-photography-tips-for-beginners" exact component={() => <FoodPhoto />} /> 
          <Route path="/influencer-marketing-how-to-find-the-right-one" exact component={() => <InfluenceMarketing />} /> 
          <Route path="/thank-you/*" exact component={() => <Thankyou />} /> 
          <Route path="/es/thank-you/*" exact component={() => <Thankyoues />} /> 
          <Route path="/nl/thank-you/*" exact component={() => <Thankyounl />} /> 
          <Route path="/de/thank-you/*" exact component={() => <Thankyoude />} /> 
          <Route path="/fr/thank-you/*" exact component={() => <Thankyoufr />} /> 
          <Route path="/all-blogs" exact component={() => <AllBlogs />} /> 
          <Route path="/demo-blog" exact component={() => <Demoblog />} /> 
          <Route path="/contacttest" exact component={() =><Contacttest />}/>
          <Route path="/book-a-call/" exact component={() => <Bookacall />} /> 
          <Route path="/shoptalk_2022_a-complete-guide-for-attendees_test" exact component={() => <Shoptalk />} /> 
          <Route path="/shoptalk_2022_a-complete-guide-for-attendees" exact component={() => <Shoptalk2 />} /> 
          <Route path="/shoptalk_2022_a-complete-guide-for-attendees/confirmation" exact component={() => <Shoptalk3 />} /> 
          <Route path="/es" exact component={() => <Spanish />} /> 
          <Route path="/fr" exact component={() => <France />} /> 
          <Route path="/de" exact component={() => <Germany />} /> 
          <Route path="/nl" exact component={() => <Netherland />} /> 
          <Route path="/fr/contact-us" exact component={() => <Contactusfr />} /> 
          <Route path="/es/contact-us" exact component={() => <Contactes />} /> 
          <Route path="/de/contact-us" exact component={() => <Contactge />} />
          <Route path="/nl/contact-us" exact component={() => <Contactne />} />  
          <Route path="" exact component={NotFound} />
        </Switch>
        {/* <Footer/> */}
    </div>
    </Router>
  );
}

export default App;