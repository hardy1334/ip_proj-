import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter,Route,NavLink} from 'react-router-dom';
import toast from '/home/hardik/ip_proj/src/images/experttalk4.jpg';
import TOASTMASTER_INFO from './toastmaster_info';

class TOASTMASTER extends React.Component{

render(){
    let card_width={
        width:300,
    }
    let padd_left={
        paddingLeft:750 ,
        marginTop: -200,
        height:200
    }
        
    return(
        <BrowserRouter>
         <div style={padd_left} >
           <div className="card" style={card_width} >
         <img className="card-img-top" src={toast} alt="Card image cap"/>
         <div className="card-body">
           <h5 className="card-title">TOASTMASTERS INTERNATIONAL</h5>
           <p className="card-text">TOASTMASTERS CLUB WHERE LEADERS ARE MADE</p>
           <NavLink to="/toastmasters_international" className="btn btn-success">Click here to know more</NavLink>
           <Route path="/toastmasters_international" component={TOASTMASTER_INFO}></Route>
           </div>
          </div>
         </div>
        </BrowserRouter> 
    );
}

}

export default TOASTMASTER;