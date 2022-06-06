import React, { Component } from "react";
import 'react-multi-carousel/lib/styles.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation} from "./";
 function Privacypolicy(props) {

    return(
        <div className="privacy">
                          <Router >
      <Navigation />
      </Router>
            <div class="container">
                <div class="row"style={{marginTop:"9%"}}>
                <img src="assets/images/cutoutwiz-privecypolicy.jpg"  width="100%" height="100%" alt=""/>
                
                <h1 style={{textAlign:"center",marginTop:"3%"}}>PRIVACY POLICY</h1>
                <div>
                <b style={{fontSize:"20px",marginTop:"3%"}}> Brief Introduction  </b>
              <p style={{marginTop:"2%"}}>We know that you care how information about you is used and shared, and we appreciate your trust. This Privacy Policy explains how The KOW Company collect, use and share information about you when you use our websites and online services (“Services”) or otherwise interact with us. Please read this Privacy Policy carefully and contact us if you have any questions. 
<br/><br/>
If you provide us with your personal information then this indicates that you have had sufficient opportunity to access, and have read and accepted, this Privacy Policy. If you do not wish to provide personal information to us, then you do not have to do so, however it may affect your use of this website or any products and services offered on it. </p>
         
            </div>


            <div>
                <b style={{fontSize:"20px"}}> What Information we are Collecting from you?  </b>
                <br/>
                <br/>
                <ul>
              <li>Contact details including Name, email address, address and telephone number </li>
              <li>Demographic information such as Job Title, Gender, postcode, company name, company type  </li>
              <li>Payment Details like Credit Card Information, Account Information, Billing Address Information (if you are buying product from us); </li>
              <li> Raw Images provided by you to us </li>
              <li>SOP for Image Processing   </li>
              <li>Your Computers IP Address </li>
              <li>Browser Type </li>
            </ul>
            </div>

            <div>
                <b style={{fontSize:"20px"}}>How may we use your personal information? </b>
                <br/>
                <br/>

            <ul>
            <li> To Create orders </li>
            <li> Agreements for the sale of products or services </li>
            <li> Keeping transaction records accounts, tax invoices or receipts </li>
            <li> For communication Purpose (about products and services, special offers, and events which might interest you) </li>
            <li>  For performing research and analysis to improve our product and service quality to get your requirement with perfection.  </li>
            <li>  To deliver personalized or customized content to you </li>
            <li>  For Direct Marketing </li>
            <li>  To offer additional benefits to you </li>
            <li>  To send you promotional information </li>
            <li>  To comply with laws or regulations or to comply with any directions given by regulators or authorities. </li>
            </ul>
            </div>

            <div>
            <b style={{fontSize:"20px"}}>Disclosure of Personal Information to Third Parties?  </b>
            <br/><br/>
         <p>   We may disclose your personal information to: 
<ul>
<li>Credit reporting agencies and courts, tribunals and regulatory authorities where customers fail to pay for goods or services provided by us to them </li>
<li>Courts, tribunals, regulatory authorities and law enforcement offices as required by law, in connection with any actual or prospective legal proceedings, or in order to establish, exercise or defend our legal rights</li>
<li>Conducting market research and marketing strategy analysis </li>
</ul>
Where we disclose your personal information to third parties for these purposes, we will request that they follow this Privacy Policy when handling your personal information. If there is a change of control of our business or a sale or transfer of business assets, we reserve the right to transfer to the extent permitted by law our user databases, together with any personal information and non-personal information contained in those databases.  </p>     
    </div>

            <b style={{fontSize:"20px"}}>  How to make Complaint about a breach in privacy?  </b>
            <br/><br/>
<p>If you have any questions, comments or complaints regarding our practices, or if you are of the view that we have not adhered to this privacy policy, you can contact us by email to info@cutoutwiz.com. </p>

<b style={{fontSize:"20px"}}>Changes/Amendments to this Policy  </b>
<br/><br/>
<p>This Privacy Policy may be amended, including with changes, additions and deletions, from time to time in our sole discretion. Your continued use of our website following any amendments indicates that you accept the amendments. We recommend that you check this Privacy Policy regularly, prior to providing personal information, to ensure you are aware of any changes, and only proceed to provide personal information if you accept the new Privacy Policy.  </p>

                </div>
                <br/>
            </div>
            <p style={{textAlign:"center",color:"white",padding:"8px",backgroundColor:"black"}}>Designed And Developed By <Link to="/" target="_blank"  style={{textDecoration:"none",color:"white"}}>CutOutWiz</Link></p>
        
        </div>

    );
 }

 export default Privacypolicy;