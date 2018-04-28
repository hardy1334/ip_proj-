import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter,Route,NavLink} from 'react-router-dom';
import sae from '/home/hardik/ip_proj/src/images/experttalk7.jpg';
import SAE_INFO from './ieee_info'; 

class SAE extends React.Component{


    render(){
        let card_width={
            width:300,
        }
        let padd_left={
            paddingLeft:750,
            marginTop:-200,
            height:200
        }
        return(
           <BrowserRouter> 
            <div style={padd_left}>
            <div className="card" style={card_width} >
            <img className="card-img-top" src={sae} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">SAE</h5>
              <p className="card-text">SOCIETY OF AUTOMOTIVE ENGINEERS INDIA</p>
              <NavLink to="/sae_socities" className="btn btn-primary">Click here to know more</NavLink>
              <Route path="/sae_socities" component={SAE_INFO}></Route>
              </div>
          </div>
            </div>
         </BrowserRouter> 
        );
    }
}


export default SAE;