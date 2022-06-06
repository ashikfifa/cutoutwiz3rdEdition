import emailjs from "emailjs-com";
import {Helmet} from "react-helmet";
import React, { useState } from "react";
export default function Contacttest() {
 
    //  Counter is a state initialized to 0
    const [counter, setCounter] = useState(0)
  
    // Function is called everytime increment button is clicked
    const handleClick1 = () => {
      // Counter state is incremented
      setCounter(counter + 1)
    }
    
    // Function is called everytime decrement button is clicked
    const handleClick2 = () => {
      // Counter state is decremented
      setCounter(counter - 1)
    }
  function sendEmail(e) {
     e.preventDefault();

emailjs.sendForm('service_krj39i5', 'template_19riz4s', e.target, 'user_fP7jBQmI5FgGFRuW3NM3s')

     .then((result) => {
        console.log(result.text);
        window.location.href = "../thank-you/counter";
     }, (error) => {
         console.log(error.text);
    });
    e.target.reset();
    
 }
 
  return (
    
    <div className="containers">
          <Helmet>
                <style>{'body { background-color: #f2f3f5}'}</style>
          </Helmet>
          {counter}
          <div class="container">
          <div class="row">
          <div style={{marginTop:"4%"}}>
          <p style={{textAlign:"center",fontSize:"30px",fontFamily:"poppins"}}>GET IN TOUCH WITH US</p>
          <div class="text-center"style={{marginBottom:"-2%"}}><button id="button-20">CONTACT US</button></div>
  
    <form onSubmit={sendEmail}>
    {/* {renderAlert()} */}
    {counter}
    <div className="buttons">
		<button style={{
		fontSize: '60%',
		position: 'relative',
		top: '20vh',
		marginRight: '5px',
		backgroundColor: 'green',
		borderRadius: '8%',
		color: 'white',
		}}
		onClick={handleClick1}>Increment</button>
		<button style={{
		fontSize: '60%',
		position: 'relative',
		top: '20vh',
		marginLeft: '5px',
		backgroundColor: 'red',
		borderRadius: '8%',
		color: 'white',
		}}
		onClick={handleClick2}>Decrement</button>
	</div>
            <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
                    <p type="count" className="form-control" name="{counter}">{counter}</p>
                </div>
                <div className="col-8 form-group mx-auto">
                    <input type="text" className="form-control" placeholder="Name" name="name"required/>
                </div>
                <div class="col-8 form-group mx-auto">
                  <select id="inputState" class="form-control"name="option">
                    <option selected> --Select Option-- </option>
                    <option>Image Editing Service</option>
                    <option>Video Editing Service</option>
                  </select>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                    <input type="email" className="form-control" placeholder="Email" name="email"required/>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                    <input type="text" className="form-control" placeholder="Subject" name="subject"required/>
                </div>
                <div className="col-8 form-group pt-2 mx-auto">
                    <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"required></textarea>
                </div>
                <div className="col-8 pt-3  mx-auto">
                  <div class="text-center">
                  <input type="submit" id="button-19" className="btn btn-info" value="SUBMIT"></input>
                  </div>
                  
                </div>
                <div className="buttons">
                <button type="submit" onClick={handleClick1}>Increment</button>
                </div>
            </div>
        </form>
        </div>
        </div>
        </div>
    
    <br/>
</div>
  );
  
  
}

