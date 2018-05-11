import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter,Route,NavLink} from 'react-router-dom';
import first_card from '/home/hardik/ip_proj/src/images/experttalk.jpg';
import C2S2_Firstinfo from './c2s2_info';
import '/home/hardik/ip_proj/src/style/navsty.css';

class C2s2 extends React.Component{
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
      <div >
      <div className="card shad" style={card_width}>
      <img className="card-img-top" src={first_card} alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">C2S2 </h5>
        <p className="card-text">C2S2 IS CHITKARA UNIVERSITY’S CULTURAL CLUB</p>
        <button type="button" class="btn btn-success" data-toggle="modal" data-target=".bd-example-modal-lg">Click here to know more </button>

        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
            <div>
            <b>About C2S2</b>
              <p>C2S2 club is open for all students of Chitkara University, Punjab Campus. The club functions not only during the working hours of the campus, it works even when the campus working hours are over. The club intends to encourage students to learn and teach activities that interests them. The vision of C2S2 is to create a community enriched with students who are enthusiastic and are keen to learn and teach new things.
              The club is initiated in order to enable the students to reach their full potential as productive, caring and responsible citizens.
              </p>
            <b>Objectives Of Club</b>
             <ul>
               <li>To give ample opportunities to the students for self-expression.</li>
               <li>To develop high standards of aesthetic sense, ethics, discipline and social spirit.</li>
               <li>To develop harmonious growth of personality through a variety of co-curricular activities.</li>
             </ul>
             <p>If you are interested to go in this club then you can register here:</p>
             <a href="https://goo.gl/forms/dzX7EuCC8l86fKa33">Click here to register</a>
             <p>For more details Contact Below:</p>
             <p>
             Ms. Rupali Kumari
             Ph. No. - 9758904536
             </p>     
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


export default C2s2;