import react from "react";
import "./Newsletter.css";
const Newsletter=()=>{
    return(
        <div className="newsletter"> 
            <h1>Get exclusive deals on your Email</h1>
            <p>Subscribe to our newsletter and stay updated on the latest products and offers!</p>
            <div>
                <input type="email" placeholder="Enter your email address"></input>
                <button>Subscribe</button>
                 
            </div>
        </div>
    )
}
export default Newsletter;