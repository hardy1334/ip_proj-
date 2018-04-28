import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter,Route,NavLink} from 'react-router-dom';
import csi from '/home/hardik/ip_proj/src/images/experttalk9.jpg';
import CSI_INFO from './csi_info'; 

class CSI extends React.Component{


    render(){
        let card_width={
            width:300,
        }
        let padd_left={
            paddingLeft:770,
            marginTop:-200,
            height:200
        }
        return(
           <BrowserRouter> 
            <div style={padd_left} >
            <div className="card" style={card_width} >
            <img className="card-img-top" src={csi} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">CSI</h5>
              <p className="card-text">COMPUTER SOCIETY OF INDIA</p>
              <NavLink to="/csi_socities" className="btn btn-primary">Click here to know more</NavLink>
              <Route path="/csi_socities" component={CSI_INFO}></Route>
              </div>
          </div>
            </div>
         </BrowserRouter> 
        );
    }
}


export default CSI;