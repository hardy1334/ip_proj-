import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter,Route,NavLink} from 'react-router-dom';
import matrix from '/home/hardik/ip_proj/src/images/explore13.jpg';
import MATRIX_INFO from './google';


class MATRIX extends React.Component{


    render(){
        let card_width={
            width:300,
        }
        let padd_left={
            paddingLeft:400,
            marginTop: -200,
            height:200
        }

        return(
    <BrowserRouter>
        <div style={padd_left} >
           <div className="card" style={card_width} >
           <img className="card-img-top" src={matrix} alt="Card image cap"/>
           <div className="card-body">
             <h5 className="card-title">GOOGLE STUDENT AMBASSADOR</h5>
             <p className="card-text">The Google Students Clubs continue to live up to the University motto of ‘Explore Your Potential‘ </p>
             <NavLink to="/google_student_club" className="btn btn-success">Click here to know more</NavLink>
             <Route path="/google_student_club" component={MATRIX_INFO}></Route>
           </div>
          </div>
         </div>
    </BrowserRouter>   
        );
    }
}



export default MATRIX;