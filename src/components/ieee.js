import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter,Route,NavLink} from 'react-router-dom';
import ieee from '../images/experttalk4.jpg';
import '../style/navsty.css';

class IEEE extends React.Component{
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
            <img className="card-img-top" src={ieee} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">IEEE</h5>
              <p className="card-text">Institute of Electrical Electronics Engineers</p>
              <button type="button" class="btn btn-success" data-toggle="modal" data-target=".bd-example-modal-lg">Click here to know more </button>

              <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                  <div>
                  <h5>About:</h5>
                  <p>IEEE is the world's largest professional association, which is dedicated to taking technological innovation forward.
                    The global community derives inspiration from IEEE and its members through its publications, conferences, technology standards, professional and educational activities.</p>
                   <p>Members collaborate through a platform provided by the IEEE on world-changing technologies, from computing and sustainable energy systems, to aerospace, communications, robotics, healthcare, and more.</p>
                  <h5>Achivements:</h5>
                  <h4>Awards won by IEEE Branch Counselor and Executive Student Members</h4>
                  <ul>
                      <li>Meenu Khurana won award for Best Student Branch Counselor from IEEE Delhi Section Region 10 in 2010.</li>
                      <li>Students of B.Tech won Dr. J.K. Paul Memorial Award by IEEE Delhi Section for three consecutive years 2011, 2012 and 2013.</li>
                      <li>One of our student was awarded as Best Student Volunteer by IEEE Delhi Section.</li>
                      <li> and many more..........</li>
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


export default IEEE;