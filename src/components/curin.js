import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter,Route,NavLink} from 'react-router-dom';
import curin from '../images/explore22.jpg';
import CURIN_INFO from './curin_info';
import '../style/navsty.css';

class CURIN extends React.Component{
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
        <img className="card-img-top" src={curin} style={{height:192}} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">CURIN </h5>
          <p className="card-text">Chitkara University Research & Innovation 
          Network</p>
          <button type="button" class="btn btn-success" data-toggle="modal" data-target=".bd-example-modal-lg">Click here to know more</button>

          <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
              <div>
              <b>Objective:</b>
              <p>We let you embark on research from day one. Research is open to 100% of Chitkara engineering students. Through Chitkara University Research and Innovation Network (CURIN), our researchers, staff and students work across disciplines to extend the boundaries of knowledge. 11 Centres of advanced research under CURIN build and sustain Chitkara University’s competitive advantage through leadership.</p>
              <b>Patents Filled:</b>
              <ul>
                <li>MULTI PURPOSE DUAL OPERATED RICKSHAW/PEDICAB</li>
                <li>SOLAR LOUNGE</li>
                <li>MICRO ELECTROMECHANICAL SENSORS (MEMS) BASED AUTOMATIC WINDSCREEN WIPER</li>
                <li>RFID BASED INTEGRATED PERSONAL IDENTIFICATION SYSTEM WITH SMART CARD</li>
                <li>REMOTE CONTROLLED SOLAR CAR WITHOUT STEERING WHEEL</li>
                <li>FOLDING BICYCLE</li>
                <li>ELECTRONIC CARD FOR SIMULTANEOUS WORKING OF MULTIPLE OPERATING SYSTEMS FOR A DIGITAL ELECTRONIC DEVICE</li>
                <li>‘INTELLIGENT SOLAR TRACKER WITH A COMPRESSORLESS REFRIGERATOR’</li>
              </ul>
              <b>Mission of CURIN</b>
                <ul>
                   <li>To promote interdisciplinary and applied research beneficial to our University, Society, National and International Community</li>
                   <li>To incorporate and inculcate inclusive research habits – with innovative streak – at all levels of students, employees and faculty</li>
 
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



export default CURIN;