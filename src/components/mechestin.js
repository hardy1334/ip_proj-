import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter,Route,NavLink} from 'react-router-dom';
import Mech from '../images/explore5.jpg';
import MECHESTIN_INFO from './mechestin_info';
import '../style/navsty.css';

class MECHESTIN extends React.Component{
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
            <img className="card-img-top" src={Mech} style={{height:192}} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">MECHSTEIN</h5>
              <p className="card-text">Mechanical Engineering Department’s first technical club</p>
              <button type="button" className="btn btn-success" data-toggle="modal" data-target=".bd-example-modal-lg">Click here to know more</button>

              <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                  <div>
                  <b>Objectives</b>
                  <p>Right from the start we have a broad vision of excelling in every field, we are a part of, like technical events, quiz shows, workshops etc. Our main objectives are:
      
                  To educate the next generation of leaders in the profession of mechanical engineering
                  To generate new knowledge and insight in the processes that govern our discipline
                  To provide service to the community, our profession and industry</p>
                  <b>Activities Organised</b>
                   <ul>
                     <li> Technovanza (debate, quiz, paper presentation, treasure hunt)</li>
                     <li> Corporate quiz</li>
                     <li> Science mysteries</li>
                     <li> Spell bee challenge</li>
                     <li>  Working project: CRANE</li>
                     <li> Arm wrestling</li>
                     <li> Spell Bee 1.0 National Quiz competition</li>
                     <li>  ATULYA BHARAT: quiz competition</li>
                     <li> Fresher’s party 2009 batch</li>
                     <li> AUTOMOBILES ULTIMO 2010</li>
                   </ul>
                   <b>Adminstrators</b>
                    <p> President: Akashdeep Singh</p>
                    <p>Vice-President: Gurupkar Singh Nerwal</p>
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


export default MECHESTIN;