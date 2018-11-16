import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import one from '../images/one.png';
import {BrowserRouter,Route,NavLink} from 'react-router-dom';
import FirstCarousel from './carousel_home';
import '../style/navsty.css';
import imgnav from '../images/4372-128_128.jpeg';
import TOGGLEBUTTON  from './togglebutt';
import Helmet from 'react-helmet';
import '../style/navsty.css';
//components

class NavbarMain extends React.Component{
  constructor(props){
  super(props);
 this.state={
   check:false
 }
  }
  
 onChild=()=>{
     this.setState({
       check:!this.state.check
     })
 }
     
  render(){
        let resize_logo={
          height:90,
          marginTop:-10,
         
        }
        let firstNavbar={
         paddingTop: 20,
     }
     let firstNav={
         backgroundColor:'#D80000 '
         
     }

       return( 
         <div >
         <div style={resize_logo}>
         <img src={one} alt="Chitkara University"/>
         </div> 
          <div style={firstNavbar}>
          <nav className="navbar navbar-expand-lg navbar-light chng " style={firstNav}  >
          <div className="collapse navbar-collapse" id="navbarNav">
         <div className="listchng">
         <ul className="navbar-nav" >

     <li className="nav-item active ok"  >
      <a className="nav-link " href="https://www.chitkara.edu.in"  onMouseEnter={this.hoverOn}><img src={imgnav} style={{height:25,width:25}} /><span className="sr-only">(current)</span></a>
     </li>
     <li className="nav-item mio" >
   {this.state.check?  <NavLink className="nav-link" to="/events" default>Events</NavLink>
    :
    <NavLink className="nav-link omi" to="/events" default>Events</NavLink>
  }   </li>
     <li className="nav-item mio"  >
     <NavLink className="nav-link" to="/clubs" >Clubs</NavLink>
       </li>
     <li className="nav-item mio">
     <NavLink className="nav-link" to="/socities">Socities</NavLink>
       </li>
       
      <TOGGLEBUTTON  chngButtStat={this.onChild} className="nav-item " />       
        {this.state.check?
        <Helmet bodyAttributes={{style: 'background-color : #202020'}}/>
:null}     </ul> 

   
   </div> 
     </div>
     </nav>
     </div>         
    
    </div>
    
         );
       }

   
}
export default NavbarMain;