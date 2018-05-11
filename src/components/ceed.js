import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter,Route,NavLink} from 'react-router-dom';
import ceed from '/home/hardik/ip_proj/src/images/explore20.jpg';
import CEED_INFO from './ceed_info';
import '/home/hardik/ip_proj/src/style/navsty.css';
class CEED extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isHidden:true
        }
     }

   chng_state=()=>{
       this.setState({
           isHidden:!this.state.isHidden
       })
   }

    render(){
        let card_width={
            width:300,
        }
       
        return(
          <BrowserRouter>  
           <div >
           <div className="card shad" style={card_width} >
           <img className="card-img-top" src={ceed} style={{height:192}} alt="Card image cap"/>
           <div className="card-body">
             <h5 className="card-title">CUCEED</h5>
             <p className="card-text">Chitkara University Centre for Entrepreneurship & Development</p>
             <button type="button" class="btn btn-success" data-toggle="modal" data-target=".bd-example-modal-lg">Click here to know more</button>

             <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
               <div class="modal-dialog modal-lg">
                 <div class="modal-content">
                 <div>
                 <b>About Ceed</b>
                 <p>CEED is an entrepreneurship development endeavor of Chitkara University to develop a mind set of being an entrepreneur while a student is in its academic tenure. Most of the big startups like Facebook, Google, Flipkart and lot many more are born out of an academic environment. CEED has a structured setup where it has 2 entrepreneurship development cells which are run by the students under the guidance of a dedicated mentor. Once the students move out of the University, till plan to continue their entrepreneurship projects they are moved and provided space at Chitkara University Innovation Incubator near Chandigarh IT Park. The Incubator already has 40+ startups successfully functioning.
                 </p>
                 <b>Our Vision</b>             
                 <p>The vision of CEED is to build innovative sustainable startups from student oriented environment</p>
                 <b>Services</b>
                  <ul>
                  <li>Free WiFi & Electricity</li>
                  <li>Mentoring</li>
                  <li>Marketing And Branding Help</li>
                  <li>Access To Events</li>
                  <li>Seed Funding Assistance</li>
                  </ul>
              
             </div>
                 </div>
               </div>
             </div>
             </div>
             </div>
          
          </div>
         </BrowserRouter> 
        );
    }
}


export default CEED;