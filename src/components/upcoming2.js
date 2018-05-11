import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import upcom2 from '/home/hardik/ip_proj/src/images/up2.jpg'
import icon from '/home/hardik/ip_proj/src/images/Maps-Location-icon.png';
import MapContainer from './map_container';
import {GoogleApiWrapper} from 'google-maps-react';


class UPCOMING2 extends React.Component{

       constructor(props){
           super(props);
           this.state={
               isMapActive:false,
               isHidden: true,
           }
       }
                
       onshow_maps=()=>{
        console.log("carry this ");
          this.setState({
            isMapActive:!this.state.isMapActive
             
          });
          
       }

       disp_maps=()=>{
           this.setState({
               isHidden:!this.state.isHidden
           })
           console.log("disp_maps called")
       }
        comb_func=()=>{
            this.disp_maps();
            this.onshow_maps();
        }
    render(){
       
         const styl1={
             width:500,
             height:200,
             marginLeft: 20,
         }
         const styl2={
            width:500,
            marginTop: 20,
            marginLeft: 20,
            backgroundColor:'#E8E8E8'            
        }
        const styl3={
            float:'left',
            marginTop: -27,
            
        }
        const styl4={
            color:'#909090',
            paddingLeft: -80,
        }
        const styl5={
            color:'#00FF00',
            marginTop: 15,

        }
        return(
           <div style={{float:'right',marginRight:30}}>
           <div className="card" style={styl1} >
             <img className="card-img" src={upcom2} alt="Card image"/>
           </div>
           <div className="card p-3 text-right" style={{width:500,height:170,marginLeft:22,backgroundColor:"#E8E8E8",marginTop:80}}>
             <blockquote className="blockquote mb-0">
               <p>WECON 2018</p>
               <div style={styl3}><span style={styl4}>16</span><br/>
               <span style={styl5}>NOV</span></div>
               <small style={{color:'#909090',marginTop:'-40'}}>at: 16 November at 10:00 to 17 November at 16:00</small>
               <footer className="blockquote-footer">
                 <small>
                  Hosted By:<a href="https://www.curin.chitkara.edu.in/">Curin</a> and <a href="https://www.chitkara.edu.in">Chitkara University</a>
                  </small>
                 </footer>
             </blockquote>
           </div>
           <div className="card" style={styl2}>
             <div className="card-body">
               <h5 className="card-title">Details</h5>
               <p className="card-text text-muted" style={{fontSize:15}}>Chitkara University will conducts the 6th edition of International Conference on Wireless Networks & Embedded Systems to bring together academicians and professionals from research institutes and industries from India and abroad to share knowledge on the advancement of wireless communication, etc and their applications in the field of engineering/research.visit:<a href="https://www.chitkara.edu.in/wecon/">chitkara.edu.in/wecon</a>
               </p>
               
             </div>
           </div>

           <div className="card" style={styl2}>
             <div className="card-body">
               <img src={icon} style={{height:30,width:30}} />
               <h5 className="card-title" style={{fontSize:15,paddingLeft:35,marginTop:-25}}>Chitkara University</h5>
               <p className="card-text text-muted" style={{fontSize:13}}>Chitkara University,Chandigarh-Patiala Highway,Punjab
               </p>
               <button onClick={this.comb_func}   style={{float:'right',marginTop:-50}}><small>{this.state.isHidden?'Show Map':'Hide Map'}</small> </button>
              
              </div>
           </div>
           {!this.state.isHidden ?
           <div className="card"  style={{width:500,height:200,marginLeft:21,backgroundColor:"#E8E8E8",marginTop:25}} >
           {
           this.state.isMapActive &&  <MapContainer google={this.props.google}/> 
           }    
           </div>:null}
           </div>
          
         

        );
    }
}

export default GoogleApiWrapper({
    apiKey:'AIzaSyChnGPX_4Y_ytSebT48HsJ13dm1CyI0v0M'
})(UPCOMING2)