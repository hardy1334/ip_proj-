import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter,Route,NavLink} from 'react-router-dom';
import acm from '../images/experttalk6.jpg';
import ACM_INFO from './acm_info'; 
import '../style/navsty.css';

class ACM extends React.Component{
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
           <div> 
            <div className="card shad" style={card_width} >
            <img className="card-img-top" src={acm} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">ACM</h5>
              <p className="card-text">APPLICATIONS OF COMPUTER MACHINERY</p>
              <button type="button" class="btn btn-success" data-toggle="modal" data-target=".bd-example-modal-lg">Click here to know more</button>

              <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                  <div>
                  <b>Objectives</b>
                  <p>The chapter was initiated with a goal to generate curiosity among the students for impending technologies in computer science apart from the regular course content.</p>
                  <h5>Various timely activities are organized and operated exclusively for educational and scientific purposes in order to:</h5>
                  <ul>
                      <li>Increase and improvise the knowledge of upcoming research fields in science, design, development, languages, management.</li>
                      <li>Improve interest in computing and its applications.</li>
                  </ul>
                  <p>Many students have been inspired to be a part of the National-level event 'Learn 'n'' Code and 'Innovaci'' on', an event on presentation skills. These events saw members of the society and non-members gather on a common platform to check their learning and analytical skills.</p>
                  <p>ACM believes in 'Learning by Doing', standing by this motto, workshops on Android 'Application Development' were organised and a six-day workshop on 'Programming with Python' was conducted. Student members who were well versed taught other students the art of developing algorithms using real life examples.</p>
                  <p>For more details:CONTACT</p>
                  <ul>
                    <li>Mr. Saravjeet Singh<br />Ph.No. - 9050366551</li>
                    <li>Ms. Preet Kaur Sekhon<br />Ph. No.- 9914602028</li>
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


export default ACM;