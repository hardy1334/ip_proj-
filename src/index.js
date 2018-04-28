import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import './index.css';
//import "./node_modules/video-react/dist/video-react.css";
import NavbarMain from './components/main_navbar';
//import { Player } from 'video-react';
import {BrowserRouter,Route} from 'react-router-dom';
import Events from './components/events';
import Clubs from './components/clubs';
import Socities from './components/socities';
import FirstCarousel from './components/carousel_home';     

 class App extends React.Component{
  render(){
   let resize_logo={
     height:90,
     marginTop:-10
   }
   let firstNavbar={
    paddingTop: 20,
}
let firstNav={
    backgroundColor:'#E80000'
}
    
    
  return(
    <div>
    
    </div>
    );
  }
};

ReactDOM.render(
 <BrowserRouter>
    <div>
       <Route  path="/" component={NavbarMain}></Route>  
       <Route  path="/events" component={Events}></Route>
       <Route path="/clubs" component={Clubs}></Route>
       <Route path="/socities" component={Socities}></Route>
    </div>
 </BrowserRouter>
  , document.getElementById('root'));