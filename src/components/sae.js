import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter,Route,NavLink} from 'react-router-dom';
import sae from '../images/experttalk7.jpg';
import SAE_INFO from './ieee_info'; 
import '../style/navsty.css';

class SAE extends React.Component{
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
            <img className="card-img-top" src={sae} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">SAE</h5>
              <p className="card-text">SOCIETY OF AUTOMOTIVE ENGINEERS INDIA</p>
            
              <button type="button" className="btn btn-success" data-toggle="modal" data-target=".bd-example-modal-lg">Click here to know more</button>

              <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                  <h5>Objectives:</h5>
                  <ul>
                      <li>To enhance the knowledge base of student members about recent trends in the engineering of mobility systems</li>
                      <li>To benefit its student members and faculty with knowledge of the latest advancements in technology in the field of automobiles</li>
                      <li>To provide to its members access to SAE International programs and services globally enabling them to practice world class standard in productivity and quality</li>
                      <li>To provide a forum for members to informally exchange views and ideas.</li>
                  </ul>
                  <h5>SAE India Collegiate Club at Chitkara University, Punjab</h5>
                  <p>Society of Automotive Engineers (SAE) is an International Society having headquarters in the USA. It has more than 121,000 members, which includes â€“ engineers, business executives, educators, and students from more than 97 countries â€“ who share information and exchange ideas for advancing the engineering of mobility systems. SAE is one-stop resource for standards development, events, and technical information and expertise used in designing, building, maintaining, and operating self-propelled vehicles for use on land or sea, in air or space. SAEINDIA is an affiliate society of SAE International. It has 190 collegiate clubs in India with 22,500 student members (as on April 6â€™2010).</p>
                  <p>It has got five sections namely Northern India Section, Eastern India Section, Western India Section, Bangalore Section and Southern India Section.</p>
        
        
                  <p>For more details contact below:</p>
                  <p>Mr. Akshit Kapoor<br />Ph. No. - 8567091369</p>
        
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


export default SAE;