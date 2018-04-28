import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import FIRST_ROW from './first_events_row';
import SECOND  from './second_event';
import THIRD from './third_events';
import FOOTER from './footer';
import UPCOMING from './upcoming'
import UPCOMING2 from './upcoming2';
//import LeftArrow from './left';
//import RightArrow from './right';
import icon1 from '/home/hardik/ip_proj/src/images/118740.png';
import icon2 from '/home/hardik/ip_proj/src/images/arrow-left-01-128.png';

class Events extends React.Component{
   constructor(props){
       super(props);
          this.state={
              slideCount:1
          }
   }
   nextSlide=()=>{
       this.setState({slideCount:this.state.slideCount+1})
   }
   previousSlide=()=>{
       this.setState({slideCount:this.state.slideCount-1})
   }
  /* componentDidUpdate=()=>{
       window.addEventListener('load',this.handleLoad)
   }
    */
   set=()=>{
    this.setState({
        slideCount:1
    })
   }
  
    render(){
       const sty={
        marginTop:17,
        marginLeft:-35,
        //position: 'fixed'
       }

       const sty1={
           marginTop:150,

       }
       const sty2={
           marginTop: 100,
       }
       const sty3={
           marginTop: 100,
       }

        return(
         <div>
         
         <div>
          <div style={{fontFamily:'ArialBlack',fontSize:40,color:'#00FF33',padding:30}}>UPCOMING EVENTS</div>
            <div className="card-group carousel slide">
           <UPCOMING/>
           <UPCOMING2 />
            </div>
         </div>

         
         <div style={sty1} className="slider">
           <div style={{fontFamily:'ArialBlack',fontSize:40,color:'yellow',paddingBottom:40,paddingLeft:30}}>PAST EVENTS</div>
           {this.state.slideCount===1 ? <FIRST_ROW/>:null}
           {this.state.slideCount===2 ? <SECOND/>:null} 
           {this.state.slideCount===3 ? <THIRD/>:null}
      
         <div style={{backgroundPosition:"fixed"}}>    
        
         <img src={icon2}  style={{marginTop:-300,}}   onClick={ 
            this.previousSlide }  /> 
           
         <img src={icon1}  style={{marginTop:-300,marginLeft:1000}} onClick={this.nextSlide} alt="czz" />
       
         </div> 
         </div>          
         <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
         <FOOTER/>
         </div>
        );
    }
}


export default Events;