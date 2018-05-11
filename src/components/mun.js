import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter,Route,NavLink} from 'react-router-dom';
import mun from '/home/hardik/ip_proj/src/images/explore13.jpg';
import MUN_INFO from './mun_info';
import '/home/hardik/ip_proj/src/style/navsty.css';

class MUN extends React.Component{
constructor(props){
    super(props);
     this.state={
         isHidden:true
     }
  
      }
        chng_state=()=>{
            this.setState({
                isHidden:!this.state.isHidden
            })
        }
    render(){
        let card_width={
            width:300,
        }
       
        return(
          <BrowserRouter>  
           <div  >
           <div className="card shad" style={card_width}>
           <img className="card-img-top" src={mun} alt="Card image cap"/>
           <div className="card-body">
             <h5 className="card-title">Model United Nations</h5>
             <p className="card-text"> Model United Nations, Skills and Abilities, Social Issues</p>
             <button type="button" class="btn btn-success" data-toggle="modal" data-target=".bd-example-modal-lg">Click here to know more</button>

             <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
               <div className="modal-dialog modal-lg">
                 <div className="modal-content">
                 <div>
                 <b>Objectives:</b>
                 <p>The MUN conferences are all about acquiring an in-depth knowledge of pressing issues, through research and examination that would help them deliberate and form resolutions by creating a balance between national interests and interests of the international community.</p>
                 <p>Each year the event brings together hundreds of young leaders from across the nation, to debate upon issues that plague the world we live in and strive to come up with innovative solutions to the same. Our students believe that each one of them has the power to bring about the change they wish to see and with this spirit they have emerged as one of the best participants at Model United Nations year after year.</p>
                 <b>Achivements</b>
                 <p><b>MUN Club Students Win IP University Model United Nations In New Delhi</b></p>
                 </div>
                 </div>
               </div>
             </div>
             </div>
             </div>
            
        </div>
        </BrowserRouter>
        );
    }
}


export default MUN;