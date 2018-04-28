import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter,Route,NavLink} from 'react-router-dom';
import ieee from '/home/hardik/ip_proj/src/images/experttalk4.jpg';
import IEEE_INFO from './ieee_info'; 

class IEEE extends React.Component{


    render(){
        let card_width={
            width:300,
        }
        let padd_left={
            paddingLeft:50,
            marginTop:230,
            height:200
        }
        return(
           <BrowserRouter> 
            <div style={padd_left} >
            <div className="card" style={card_width} >
            <img className="card-img-top" src={ieee} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">IEEE</h5>
              <p className="card-text">Institute of Electrical Electronics Engineers</p>
              <NavLink to="/ieee_socities" className="btn btn-primary">Click here to know more</NavLink>
              <Route path="/ieee_socities" component={IEEE_INFO}></Route>
              </div>
          </div>
            </div>
         </BrowserRouter> 
        );
    }
}


export default IEEE;