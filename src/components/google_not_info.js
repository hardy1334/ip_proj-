import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter,Route,NavLink} from 'react-router-dom';
import matrix from '../images/explore13.jpg';
import MATRIX_INFO from './google';
import '../style/navsty.css';

class MATRIX extends React.Component{
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
           <div className="card shad" style={card_width} >
           <img className="card-img-top" src={matrix} alt="Card image cap"/>
           <div className="card-body">
             <h5 className="card-title">GOOGLE STUDENT AMBASSADOR</h5>
             <p className="card-text">Developers Come together Here </p>
             <button type="button" className="btn btn-success" data-toggle="modal" data-target=".bd-example-modal-lg">Click here to know more</button>

             <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
               <div className="modal-dialog modal-lg">
                 <div className="modal-content">
                 <div>
                 <b>Objectives</b>
                 <p> The Google Student Ambassador Program has been started by Google to connect with Universities all over the globe. Under this program, Chitkara University has its own Google Students Clubs, in both Punjab and Himachal Pradesh campuses. These clubs comprise of some of the most innovative minds in the campus. These clubs are led by the Google Student Ambassadors, who acts as a liaison between the university and Google. GSAs are selected by Google through a rigorous selection process.</p>
                 <p>The GSC-CUs work as innovative channels in helping students of Chitkara University learn about various Google programs, products and to interact with Google teams. This in fact is, a 2-way channel, where the Universities also contribute to Google Ecosystem by helping them understand the culture of our fine institutions and how well we adapt to the dynamic atmosphere around us.</p>
                 <p>Presently both Chitkara Campuses at Baddi, Himachal Pradesh and Jansla, Punjab have Google Students Clubs.</p>
                 <ul>
                   <li>Android Workshop</li>
                   <li>Online Marketing Lab</li>
                   <li>Approit</li>
                   <li>Digital Marketing 101</li>
                   <li>Cloud Computing Tech-Talk</li>
                 </ul>
                <b>This Program runs under the Chitkara School of Engineering and Technology, headed by:</b>
                <p>Mr. Rajnish Sharma (Dean Academics)</p>
                <p>rajnish.sharma@chitkarauniversity.edu.in</p> 
                
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



export default MATRIX;