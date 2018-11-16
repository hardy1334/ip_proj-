import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter,Route,NavLink} from 'react-router-dom';
import udacity from '../images/explore23.jpg'; 
import UDACITY_INFO from './u_college_info';
import '../style/navsty.css';

class UDACITY extends React.Component{
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
            <div className="card shad" style={card_width}>
            <img className="card-img-top" src={udacity} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">UCOLLEGE</h5>
              <p className="card-text">BeInDemand is an initiative by Udacity </p>
              <button type="button" class="btn btn-success" data-toggle="modal" data-target=".bd-example-modal-lg">Click here to know more</button>

              <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                  <div>
                  <b>Objectives</b>
                  <p>This initiative would help fulfilling Chitkara’s dream of preparing every student to be ready to face the professional world. In the times when skills speak more than anything for a technical graduate, Chitkara and Udacity will provide the ideal environment and courses, which help develop professional qualities. Moreover, the courses allow students to learn at their own pace and even provide with discussion forums so that they may review any difficulty they’re facing and get different perspectives on how to solve them.
                  This collaboration will bring students closer to the right set of skills needed and they will be at same pace with the industry. The initiative will help master in-demand skills. Build and design amazing projects. Earn a valued scredential. Launch career in Data Science, Machine Learning, Android, iOS, and more. Be in demand!
                  </p>
                  <p>Chitkara University collaborated with Udacity to launch their BeInDemand Initiative. Being the most favoured and disciplined University in the region, Chitkara felt proud to host the launching of ‘UCollege’, a University Chapter of Udacity in the region.</p>
                  <p>BeInDemand is an initiative by Udacity where they collaborate with selected engineering colleges in India to up skill outgoing graduates for jobs that are in demand.</p>
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


export default UDACITY;