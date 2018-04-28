import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter,Route,NavLink} from 'react-router-dom';
import first_card from '/home/hardik/ip_proj/src/images/experttalk.jpg';
import C2S2_Firstinfo from './c2s2_info';


class C2s2 extends React.Component{


    render(){
        let card_width={
            width:300,
        }
       let card_left={
        paddingLeft:50 ,
        height:200,
        paddingTop: 43,
       }
       
        return(
     <BrowserRouter>     
      <div style={card_left}>
      <div className="card" style={card_width}>
      <img className="card-img-top" src={first_card} alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">C2S2 </h5>
        <p className="card-text">C2S2 IS CHITKARA UNIVERSITY’S CULTURAL AND SOCIAL SERVICE CLUB</p>
        <NavLink to="/c2s2_club" className="btn btn-success " >Click here to know more</NavLink>
        <Route path="/c2s2_club" component={C2S2_Firstinfo}></Route>
      </div>
      </div>
      </div>
     </BrowserRouter>  
        );
    }
}


export default C2s2;