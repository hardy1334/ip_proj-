import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import one from '/home/hardik/ip_proj/src/images/one.png';
import {BrowserRouter,Route,NavLink} from 'react-router-dom';
import FirstCarousel from './carousel_home';

//components

class NavbarMain extends React.Component{
    render(){
        let resize_logo={
          height:90,
          marginTop:-10
        }
        let firstNavbar={
         paddingTop: 20,
     }
     let firstNav={
         backgroundColor:'#E80000 '
     }
         
         
       return(
         <div >
         <div style={resize_logo}>
         <img src={one}  alt="Chitkara University"/>
         </div> 
          <div style={firstNavbar}>
          <nav className="navbar navbar-expand-lg navbar-light " style={firstNav} >
         <div className="collapse navbar-collapse" id="navbarNav">
     <ul className="navbar-nav">
     <li className="nav-item active">
      <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
     </li>
     <li className="nav-item">
     <NavLink className="nav-link" to="/events">Events</NavLink>
       </li>
     <li className="nav-item ">
     <NavLink className="nav-link" to="/clubs" >Clubs</NavLink>
       </li>
     <li className="nav-item">
     <NavLink className="nav-link" to="/socities">Socities</NavLink>
       </li>
     </ul>
     </div>
     </nav>
     </div>         
    
    </div>
         );
       }

   
}
export default NavbarMain;