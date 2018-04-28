import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter,Route,NavLink} from 'react-router-dom';
import curin from '/home/hardik/ip_proj/src/images/explore22.jpg';
import CURIN_INFO from './curin_info';

class CURIN extends React.Component{

render(){
    let card_width={
        width:300,
    }
    let padd_left={
        paddingLeft:400,
        marginTop: -2,
        height:200
    }

   return(
       <BrowserRouter>
        <div style={padd_left} >
        <div className="card" style={card_width}>
        <img className="card-img-top" src={curin} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">CURIN </h5>
          <p className="card-text">Chitkara University Research & Innovation 
          Network</p>
          <NavLink to="/curin" className="btn btn-success">Click here to know more</NavLink>
          <Route path="/curin" component={CURIN_INFO}></Route>  
        </div>
       </div>
        </div>
      </BrowserRouter>  
   );

}

}



export default CURIN;