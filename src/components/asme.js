import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter,Route,NavLink} from 'react-router-dom';
import asme from '/home/hardik/ip_proj/src/images/experttalk8.jpg';
import ASME_INFO  from './asme_info';
import '/home/hardik/ip_proj/src/style/navsty.css';

class ASME extends React.Component{
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
       
        let card_wh={
            width:1060,
            height:'any',
            marginTop: 30,
        }
        return(
           <BrowserRouter> 
            <div >
            <div className="card shad" style={card_width} >
            <img className="card-img-top" src={asme} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">ASME</h5>
              <p className="card-text">American Society of Mechanical Engineers</p>
              <button type="button" class="btn btn-success" data-toggle="modal" data-target=".bd-example-modal-lg">Click here to know more</button>

              <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                  <div>
                  <h5>OBJECTIVES:</h5>
                  <p>The Society receives members from various colleges and universities, and acts as a platform where students and professionals can congregate and endeavour towards a common goal of creating the importance of engineers in the society. They also receive a great opportunity to interact-at local as well as international level-with people in same profession and of like-minded interests.</p>
                  <p>At ASME, the community of engineers worldwide finds support to tackle, and design solutions to, real-world challenges. The ASME codes and standards, publications, conferences, continuing education and professional development programs provide a foundation for advancing technical knowledge and a safer world.</p>
                  <h5>ASME-Chitkara Student Section Activities:</h5>
                  <ul>
                  <li>Major event: Decoding Da Vinci 2.0</li>
                  <li>Minor event 1: Egg Survival Competition</li>
                 
                 </ul>
              <li>Expert Lecture: 10 March, 2011</li>
              <li>Industrial Visit (DMW): 18 August, 2011</li>
              <li>Event (WORD WATT 2): 13 September, 2011</li>
              <li>Praudyogikii - 12: 3-4 February, 2012</li>
             
              <h5>International participations:</h5>
              <ul>
              <li>The team Lakshya has participated in "Human Powered Vehicle Challenge (HPVC)", West Americas 2010 organized by the American Society of Mechanical Engineers (ASME) at California State University, USA in April 2010.</li>
              <li>The team Nischya has participated in "Human Powered Vehicle Challenge (HPVC)" organized by the American Society of Mechanical Engineers (ASME) at Indianapolis Motor Speedway, Indianapolis, IN, USA. April 29 May 1, 2011.</li>
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


export default ASME;