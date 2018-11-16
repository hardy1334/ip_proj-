import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter,Route,NavLink} from 'react-router-dom';
import BITS from '../images/experttalk2.jpg';
import BITS_INFO from './bits_info';
import '../style/navsty.css';

class BITS_N_BYTES extends React.Component{
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
           
          <div >  
            <div className="card shad" style={card_width} >
             <img className="card-img-top" src={BITS}  alt="Card image cap"/>
              <div className="card-body">
              <h5 className="card-title">BITS ‘N’ BYTES </h5>
              <p className="card-text">BITS ‘N’ BYTES: A Society of Computer Technocrats</p>
              <button type="button" class="btn btn-success" data-toggle="modal" data-target=".bd-example-modal-lg">Click here to know more</button>

              <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                  <b>Objective of the club</b>
                  <p>The objective of the society is to create an environment that will help the students to explore their potential, and provide them a platform to pursue and excel in managerial and technical jobs, as well as in cultural events that helps in the overall development of an individual. The society also aims at apprising them of the technological advancements taking place. Students are infused with the spirit of professionalism and developing their communication skills, thereby making them able to win in this competitive, ever advancing world.</p> 
                    <b>Events organized are:</b>
                       <ul>
                        <li>Technical Quizzes</li>
                        <li> Paper Presentations</li>
                        <li>Seminars</li>
                        <li>Expert Lectures</li>
                        <li>Programming</li>
                        <li>Slide Presentations</li>
                        <li>Group Discussions</li>
                        <li>Jam Sessions</li>
                        <li>Open Sessions</li>
                        <li>Extempore</li>
                        <li>Workshops</li>
                        <li>LAN Gaming</li>
                       </ul>
                      <b>Who’s Who</b>
                      <p> President – Shreya</p>
                      <p> Vice-President – Ravi Malik</p>    
                  </div>
                  </div>
                </div>
              </div>   
              </div>
           </div>
          
        );
    }
}


export default BITS_N_BYTES;