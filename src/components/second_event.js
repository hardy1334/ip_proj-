import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import icon from '../images/Maps-Location-icon.png';
import quick from '../images/even_quick_21.jpg';
//import ping from '../components/even_organ_don.jpg'

const SECOND =(props)=>{

    return( 
        <div style={{height:800}} >
        <div className="jumbotron jumbotron-fluid" style={{ background:'#E8E8E8'}} >
        <div className="container">
          <h5 className="display-4" style={{color:"#909090"}}>Cyber Security - Basement to Boardroom with Quick Heal</h5>
          <img className="card-img-top" src={quick}  alt="Card image cap" height="300" width="1200"/>
          <h5 style={{color:"#909090"}}>Details</h5>
          <p className="lead">Chitkara University in association with Quick Heal Academy is organizing a one-day program on 'Cyber Security' on 21st April 2018 at Chitkara International School, Chandigarh. This one day programme is designed to give insight into the present cybersecurity risk and the ways to mitigate the same.

          <p>Over 53,000 cyber security incidents, including phishing, website intrusions and defacements and ransomware were observed in 2017
          </p></p>
        </div>
        <div  style={{marginLeft:900}}>
        <small>Hosted By: <a href="https://www.chitkara.edu.in">Chitkara University</a>
        <br/></small>
        <small>on: 21 April at 9:00–18:00</small><br/>
        <img src={icon} style={{height:30,width:30,marginLeft:-8}}/>Chitkara International School
  <br/><small>Udyog Path, Sector 25 (West), Chandigarh, India 160014</small>      </div>
      </div>

      </div>


    )
}



export default SECOND;