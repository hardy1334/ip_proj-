import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter,Route,NavLink} from 'react-router-dom';
import toast from '/home/hardik/ip_proj/src/images/experttalk4.jpg';
import TOASTMASTER_INFO from './toastmaster_info';
import '/home/hardik/ip_proj/src/style/navsty.css';

class TOASTMASTER extends React.Component{
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
         <div  >
           <div className="card shad" style={card_width} >
         <img className="card-img-top" src={toast} alt="Card image cap"/>
         <div className="card-body">
           <h5 className="card-title">TOASTMASTERS INTERNATIONAL</h5>
           <p className="card-text">WHERE LEADERS ARE MADE</p>
           <button type="button" class="btn btn-success" data-toggle="modal" data-target=".bd-example-modal-lg">Click here to know more</button>

           <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
             <div class="modal-dialog modal-lg">
               <div class="modal-content">
               <div>
               <b>About:</b>
               <p>Ready to start your transformation journey towards becoming a strong leader and a confident speaker? Visit the Office of Chitkara TM International now!</p>
               <p>It has been observed that everyone has their own way of expression. We all have a lot to say, but finding ways to say is more than half the battle won. Another meeting was hosted by the Toastmasters Club at Chitkara University, Punjab, at Fleming block. Burn Philips has said that “Winning is only half of it, the other half is having fun”, the theme for the day was centered around – ‘FUN’.</p>
               <b>Mission</b>
               <p>Toastmasters is the leading movement devoted to making effective oral communication and leadership a worldwide reality.</p>
               <b>Awards</b>
               <p>Distinguished Club Award 2013-2014</p>
               <p>Distinguished Club Award 2014-2015</p>         
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

export default TOASTMASTER;