import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter,Route,NavLink} from 'react-router-dom';
import ceed from '/home/hardik/ip_proj/src/images/explore20.jpg';
import CEED_INFO from './ceed_info';

class CEED extends React.Component{


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
           <div style={padd_left}>
           <div className="card" style={card_width} >
           <img className="card-img-top" src={ceed} alt="Card image cap"/>
           <div className="card-body">
             <h5 className="card-title">CUCEED</h5>
             <p className="card-text">Chitkara University Centre for Entrepreneurship Education & Development</p>
             <NavLink to="/ceed" className="btn btn-success">Click here to know more</NavLink>
             <Route path="/ceed" component={CEED_INFO}></Route>
           </div>
          </div>
          </div>
         </BrowserRouter> 
        );
    }
}


export default CEED;