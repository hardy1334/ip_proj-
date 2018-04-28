import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter,Route,NavLink} from 'react-router-dom';
import BITS from '/home/hardik/ip_proj/src/images/experttalk2.jpg';
import BITS_INFO from './bits_info';
class BITS_N_BYTES extends React.Component{

    render(){
         let card_width={
             width:300,
            
         }
         let padd_left={
             paddingLeft:400 ,
             marginTop: -158,
             height:200
         }
        return(
         <BrowserRouter>   
          <div style={padd_left}>  
            <div className="card" style={card_width} >
             <img className="card-img-top" src={BITS}  alt="Card image cap"/>
              <div className="card-body">
              <h5 className="card-title">BITS ‘N’ BYTES </h5>
              <p className="card-text">BITS ‘N’ BYTES: A Society of Computer Technocrats</p>
              <NavLink to="/bits_n_bytes" className="btn btn-success">Click here to know more</NavLink>
              <Route path="/bits_n_bytes" component={BITS_INFO}></Route>
              </div>
           </div>
          </div>
          </BrowserRouter>  
        );
    }
}


export default BITS_N_BYTES;