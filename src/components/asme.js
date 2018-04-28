import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter,Route,NavLink} from 'react-router-dom';
import asme from '/home/hardik/ip_proj/src/images/experttalk8.jpg';
import ASME_INFO  from './asme_info';


class ASME extends React.Component{


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
            <div style={padd_left}>
            <div className="card" style={card_width} >
            <img className="card-img-top" src={asme} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">ASME</h5>
              <p className="card-text">American Society of Mechanical Engineers</p>
              <NavLink to="/asme_socities" className="btn btn-primary">Click here to know more</NavLink>
              <Route path="/asme_socities" component={ASME_INFO}></Route>
              </div>
          </div>
            </div>
         </BrowserRouter> 
        );
    }
}


export default ASME;