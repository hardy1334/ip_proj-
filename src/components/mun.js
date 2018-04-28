import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter,Route,NavLink} from 'react-router-dom';
import mun from '/home/hardik/ip_proj/src/images/explore13.jpg';
import MUN_INFO from './mun_info';

class MUN extends React.Component{


    render(){
        let card_width={
            width:300,
        }
        let padd_left={
            paddingLeft:48,
            //marginBottom: 00,
            paddingTop:310 ,
            height:200
        }

        return(
          <BrowserRouter>  
           <div style={padd_left} >
           <div className="card" style={card_width}>
           <img className="card-img-top" src={mun} alt="Card image cap"/>
           <div className="card-body">
             <h5 className="card-title">Model United Nations</h5>
             <p className="card-text"> Model United Nations, Skills and Abilities, Social Issues</p>
             <NavLink to="/mun_club" className="btn btn-success">Click here to know more</NavLink>
             <Route path="/mun_club" component={MUN_INFO}></Route>
           </div>
         </div>
        </div>
        </BrowserRouter>
        );
    }
}


export default MUN;