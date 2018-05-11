import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter,Route,NavLink} from 'react-router-dom';
import iste from '/home/hardik/ip_proj/src/images/experttalk8.jpg';
//import ISTE_INFO from './iste_info'; 
import '/home/hardik/ip_proj/src/style/navsty.css';

class ISTE extends React.Component{

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
            <img className="card-img-top" src={iste} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">ISTE</h5>
              <p className="card-text">INDIAN SOCIETY FOR TECHNICAL EDUCATION</p>
              <button type="button" class="btn btn-success" data-toggle="modal" data-target=".bd-example-modal-lg">Click here to know more</button>

              <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                  <div>
                  <h5>Objectives</h5>
                  <p>There are various objectives of the ISTE and these are to formulate the general goals and responsibilities of technical education, develop effective teachers and educational administrators, enhance professional ideals and standards, foster research as a function complementary to teaching, cultivate fraternal spirit amongst the teachers, administrators, industrialist and professionals and to bring about effective linkage between technical institutions, industry and society.</p>
                  <h5>Various activities are carried out by the ISTE and some of the activities are:</h5>
                  <ul>
                      <li>Expert talk for students that benefit them</li>
                      <li>visit to different industries to enhance the knowledge and exposure in the industrial world</li>
                      <li>IOHC</li>
                      <li>Project review and evaluation</li>
                      <li>Quiz</li>
                      <li>Talent scout</li>
                      <li>Treasure hunt</li>
                      <li>Events during technical fests</li>
                  </ul>
                  <p>For more details Contact :</p>
                  <p>Mr. Akhilesh Khanna<br />Ph. No.- 9781360924</p>
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


export default ISTE;