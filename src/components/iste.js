import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter,Route,NavLink} from 'react-router-dom';
import iste from '/home/hardik/ip_proj/src/images/experttalk8.jpg';
import ISTE_INFO from './iste_info'; 

class ISTE extends React.Component{


    render(){
        let card_width={
            width:300,
        }
        let padd_left={
            paddingLeft:410,
            marginTop:-200,
            height:200
        }
        return(
           <BrowserRouter> 
            <div style={padd_left} >
            <div className="card" style={card_width} >
            <img className="card-img-top" src={iste} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">ISTE</h5>
              <p className="card-text">INDIAN SOCIETY FOR TECHNICAL EDUCATION</p>
              <NavLink to="/iste_socities" className="btn btn-primary">Click here to know more</NavLink>
              <Route path="/iste_socities" component={ISTE_INFO}></Route>
              </div>
          </div>
            </div>
         </BrowserRouter> 
        );
    }
}


export default ISTE;