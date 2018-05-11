import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter,Route,NavLink} from 'react-router-dom';
import csi from '/home/hardik/ip_proj/src/images/experttalk9.jpg';
import CSI_INFO from './csi_info'; 
import '/home/hardik/ip_proj/src/style/navsty.css';


class CSI extends React.Component{
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
            <div className="card shad" style={card_width} >
            <img className="card-img-top"  src={csi} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title" style={{marginLeft:5,fontSize:20}}>CSI</h5><br/>
              <p className="card-text" style={{marginLeft:5}}> COMPUTER SOCIETY OF  INDIA</p>
              <button type="button" class="btn btn-success" data-toggle="modal" data-target=".bd-example-modal-lg">Click here to know more</button>

              <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
               <div class="modal-dialog modal-lg">
                <div class="modal-content">
                <div>
                <h5>About</h5>
                <p>The Computer Society of India is a non-profit professional meet to exchange views and information learn and share ideas.</p>
                <h5>Chapters of CSI</h5>
                <p>A Chapter of the Society is a group of members in a particular locality or city. It has direct links with the members. For the benefit of members, the chapter organizes monthly technical meetings, product presentations, exhibitions, film and video shows.</p>
                <h5>Special Interest Group on eGovernance</h5>
                <p>Core objective is to focus on important areas where Information Technology can be leveraged and bring likeminded professionals together to add value by bringing out recommendations relevant to various stakeholders.</p>
                <h5>Publications of CSI</h5>
                <p>Computer Society of India brings out three national publications namely CSI Journal of Computer Science and Informatics, CSI Communications and CSI Adhyayan.
                 The journal Computer Science and Informatics is a quarterly publication, which contains reviewed articles of theoretical interest, case studies of successful applications of national relevance, and reviews of books and journals.
                 </p>
                <p>The CSI Communications is a monthly theme based national publication covering technical articles of current interests and reports of conferences, symposia, and seminars organized by CSI and member institutions. CSI Communications also serves as an important medium of communication between CSI and its members.
                The CSI Adhyayan is a quarterly publication dedicated for IT education, research and student community. This quarterly publication performs the functions of a newsletter, a magazine and journal.
                </p>
                <h5>CSI EVENTS</h5>
                <li>Industrial Visit- Kapsons Solutions</li>
                <ul>
                    <li>Distributor as well as Retailer.</li>
                    <li>Works on Functional Areas like Bazaar online, Bazaar Real time.</li>
                    <li>Develop software of User ease.</li>
                    <li>Develop software on latest technology.</li>
                </ul>
            
            <h5>Technical Fest</h5>
            <p>CSI excelled in performing a great task at the technical fest praudyugikii'13. The events were as follows</p>
            <ul>
                <li>Major Event- Placement Mania</li>
                <li>Minor Event- Creatific L' Espirit, also awarded as event of the fest</li>
            </ul>
            <p>For more details Contact Below</p>
            <p>Mr. Jaswinder Kataria<br />Ph.No. -8674530924</p>
   
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


export default CSI;