import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import icon from '../images/Maps-Location-icon.png';
//import quick from '../images/even_quick_21.jpg';
import ping from '../images/octa.jpg';

const FIRST_ROW =(props)=>{

    return( 
        <div style={{height:800}} >
        <div className="jumbotron jumbotron-fluid" style={{ background:'#E8E8E8'}} >
        <div className="container">
          <h5 className="display-4" style={{color:"#909090"}}>OctaHacks - Tech Hackathon</h5>
          <img className="card-img-top" src={ping}  alt="Card image cap" height="300" width="1200"/>
          <h5 style={{color:"#909090"}}>Details</h5>
          <p className="lead">The Developer Student Club and UCollege Community presenting first hackathon 'OctaHacks' on 14-15th April 2018 at Chitkara University.
          We have partnered with the prominent companies in tech, such as Udacity,.TECH Domains, OYO, AWS, Uploadcare, WolframAlpha, Digital Ocean, Temboo and JetBrains. 
          Come & be a part of this exuberant event at just Rs.150 per head.
          <p>Faculty Coordinator:
          Aditi Maudgit - 8360399569
          </p><p>
          Student Coordinator:
          Sagar Chaudhary - 9056455979
          </p><p>
          For more details please visit: http://www.octahacks.tech/
          </p>
        </p>
        </div>
        <div  style={{marginLeft:900}}>
        <small>Hosted By: <a href="https://www.chitkara.edu.in">Chitkara University</a>
        <br/></small>
        <small>on: 21 April at 9:00–18:00</small><br/>
        <img src={icon} style={{height:30,width:30,marginLeft:-8}}/>Chitkara University
  <br/><small>Chitkara University, Chandigarh-Patiala National Highway, Punjab, Rajpura 140401</small>      </div>
      </div>

      </div>


    )
}



export default FIRST_ROW;