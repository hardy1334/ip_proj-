import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter,Route,NavLink} from 'react-router-dom';
import acm from '/home/hardik/ip_proj/src/images/experttalk6.jpg';
import ACM_INFO from './acm_info'; 

class ACM extends React.Component{


    render(){
        let card_width={
            width:300,
        }
        let padd_left={
            paddingLeft:50,
            marginTop:50,
            height:200
        }
        return(
           <BrowserRouter> 
            <div style={padd_left}>
            <div className="card" style={card_width} >
            <img className="card-img-top" src={acm} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">ACM</h5>
              <p className="card-text">APPLICATIONS OF COMPUTER MACHINERY</p>
              <NavLink to="/acm_socities" className="btn btn-primary">Click here to know more</NavLink>
              <Route path="/acm_socities" component={ACM_INFO}></Route>
              </div>
          </div>
            </div>
         </BrowserRouter> 
        );
    }
}


export default ACM;