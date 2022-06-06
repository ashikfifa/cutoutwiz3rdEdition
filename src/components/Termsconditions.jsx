import React, { Component } from "react";
import 'react-multi-carousel/lib/styles.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation} from "./";
 function Termsconditions(props) {
    

  // const a=351;
  // const mArr=[1,2,3,4]

  // const mObj={
  //   name:'ashik',
  //   age:32
  // }

  // const items=[]
  // for(const num of mArr)
  // items.push(num)

    return(

        <div className="terms">
             <Router >
      <Navigation />
      </Router>
               {/* <p> {a} <br/>
               
               {mArr[3]} <br/> </p>
               
               {mObj.name},{mObj.age}
<br/>
               {
                 a < 200 ? "I am wrong" : "You are right"
               }
          

               {items}; */}
               

            <div class="container">
                <div class="row"style={{marginTop:"9%"}}>
                <img src="assets/images/terms-banner.jpg"  width="100%" height="100%" alt=""/>
                <h1 style={{textAlign:"center"}}>Terms & Conditions</h1>
                <br/><br/>
                <div>
                <b style={{fontSize:"20px"}}> Placing an Order </b>
                <br/>
                <br/>

        
            <ul>
              <li>  By Uploading your Images in your FTP Server and send the link to us </li>
              <li> By uploading images in our FTP server through the link provided by us and notify us </li>
              <li> By Uploading Images through our Web App and Shopify App from your Local Storage (Laptop, Personal Computer etc.)   </li>
            </ul>
         
            </div>


            <div>
                <b style={{fontSize:"20px"}}> Payment Method  </b>
                <br/>
                <br/>
                <ul>
              <li> Need to Advance 30% of the payment after placing the order as advance. </li>
              <li> Need to Pay 30% of the payment after getting the Work in Progress (Processed images as per the SOP)  </li>
              <li>Rest of the 40% should be paid within 1 week of getting the Finished Goods (Processed Images after Final Correction)   </li>
              <li>  Payment can be made by Visa, MasterCard, Amex, only. You warrant that you are an authorized user of the credit card and other accounts used to complete payment.</li>
              <li>All or any of the above can be waived upon discussion with our client management team.   </li>
            </ul>
            </div>

            <div>
                <b style={{fontSize:"20px"}}> Order Cancellation Policy </b>
                <br/>
                <br/>

            <ul>
              <li>  Order is needed to be cancelled before we process 10 images from the images you provide us. If you cancel within this limit you will get back the amount you have paid as advance.</li>
              <li>If you cancelled your order after processing 10 images than you will not get any payback for your advance payment.   </li>
              <li> If you cancelled order after work in progress than you need to pay the 60% of the Total Payment  </li>
              <li>After getting the Finished Good there will be no order cancellation policy.    </li>
            </ul>
            </div>

            <div>
            <b style={{fontSize:"20px"}}>Faulty Policy  </b>
            <br/><br/>
                <p>We aim to provide you with products of the highest standard and quality. That’s why we have a Work in Progress stage so that you can evaluate our work carefully. You will get 48 Hours to evaluate Work in Progress. If there are fault or faults in our work than we will correct it as per your observation. Than you will get another chance to give your feedback or observation to recover the error. After that we will send you the finished goods. Once you give the second feedback, there will be no option for order cancellation or any other observation.  </p>
            </div>

            <b style={{fontSize:"20px"}}>  Limitation of Liability </b>
            <br/><br/>
<p>We take all precautions possible to keep the details of your orders and payment secure, but in the absence of negligence on our part, we cannot be held liable for any loss you may suffer if a third party acquires unauthorized access to any data you provide when accessing or ordering from the website. </p>

<b style={{fontSize:"20px"}}>Intellectual Property </b>
<br/><br/>
<p>The KOW Company guarantees that it has not infringed or does not infringe or shall not infringe the IPR of any third party so far as related with the service(s) to be provided. The KOW Company shall indemnify its Clients against any costs or consequences as a result of such infringements.  </p>

<b style={{fontSize:"20px"}}>Severability  </b>
<br/><br/>
<p>If any portion of the order is determined to be enforceable, the remainder of the order shall continue in full force and effect, and either party may renegotiate the terms affected by the severance. </p>

<b style={{fontSize:"20px"}}>Governing Law  </b>
<br/><br/>
<p>The whole process shall be governed and construed in accordance with the laws of Bangladesh. </p>

<b style={{fontSize:"20px"}}>Settlement of Dispute  </b>
<br/><br/>
<p>We will give our best efforts to settle amicably all disputes arising in connection with our clients. There will be 15 days’ time to settle the dispute after the first written notice from the either parties.  If both of us are failed to an amicable settlement within 15 (Fifteen) days of the first written notice from either Party on the matter of disagreement, the parties shall refer the dispute to any competent court of this jurisdiction. </p>

<b style={{fontSize:"20px"}}>Assignment   </b>
<br/><br/>
<p>The KOW Company cannot use a third party without taking the consent of the client.  </p>

<b style={{fontSize:"20px"}}>Notice and Communication  </b>
<br/><br/>
<p>All Communications should be done by the registered email address of the authorized representatives from both parties. The receiving party if so requested by the sending party without undue delay shall confirm any correspondence. </p>

<b style={{fontSize:"20px"}}>Confidentiality  </b>
<br/><br/>
<p>The KOW Company may need to disclose certain “Confidential Information” to its sister concerns to some extent as required. Confidential Information shall mean any information disclosed by a Party in connection with this Contract to another party (whether oral or written). 
<br/><br/>
Parties agree to hold all Confidential Information of the other in trust and confidence, and to protect it to the same extent as it would protect its own Confidential Information (which shall in any event be reasonable protection) and not to use such Confidential Information for other purposes. Unless disclosure is in compliance with a valid order from a court of competent jurisdiction, law enforcing agency or other relevant regulatory bodies or otherwise required by operations of the law or agreed by the other Party in writing, neither Party shall disclose any Confidential Information of the other Party, by publication or otherwise, to any person other than its employees and contractors bound to confidential obligations consistent with those set forth herein and who have a need to know such Confidential Information for purposes of exercising its rights.  </p>

                </div>
            </div>
            <p style={{textAlign:"center",color:"white",padding:"8px",backgroundColor:"black"}}>Designed And Developed By <Link to="/" target="_blank"  style={{textDecoration:"none",color:"white"}}>CutOutWiz</Link></p>
        
            
        </div>

    );
 }

 export default Termsconditions;