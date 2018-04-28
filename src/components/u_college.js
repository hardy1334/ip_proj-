import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter,Route,NavLink} from 'react-router-dom';
import udacity from '/home/hardik/ip_proj/src/images/explore23.jpg'; 
import UDACITY_INFO from './u_college_info';

class UDACITY extends React.Component{

    render(){
        let card_width={
            width:300,
        }
        let padd_left={
            paddingLeft:750,
            marginTop: -200,
            height:200
        }
        return(
          <BrowserRouter>
            <div style={padd_left} >
            <div className="card" style={card_width}>
            <img className="card-img-top" src={udacity} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">UCOLLEGE</h5>
              <p className="card-text">BeInDemand is an initiative by Udacity where they collaborate with selected engineering colleges in India to up skill outgoing graduates for jobs that are in demand</p>
              <NavLink to="/udacity_college" className="btn btn-success">Click here to know more</NavLink>
              <Route path="/udacity_college" component={UDACITY_INFO}></Route>  
            </div>
          </div>


           </div>
          </BrowserRouter> 
        );

    }
}


export default UDACITY;