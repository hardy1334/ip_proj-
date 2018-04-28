import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter,Route,NavLink} from 'react-router-dom';
import Mech from '/home/hardik/ip_proj/src/images/explore5.jpg';
import MECHESTIN_INFO from './mechestin_info';


class MECHESTIN extends React.Component{

    render(){

        let card_width={
            width:300,
        }
        let padd_left={
            paddingLeft:47 ,
            marginTop: 250,
            height:200
        }
        return(
         <BrowserRouter>
            <div style={padd_left} >
            <div className="card" style={card_width} >
            <img className="card-img-top" src={Mech} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">MECHSTEIN</h5>
              <p className="card-text">Mechanical Engineering Department’s first technical club, MECHSTEIN at Chitkara Institute of Engineering Technology</p>
              <NavLink to="/mechestin_club" className="btn btn-success">Click here to know more</NavLink>
              <Route path="/mechestin_club" component={MECHESTIN_INFO}></Route>
              </div>
          </div>
            </div>
        </BrowserRouter>
        );
    }
}


export default MECHESTIN;