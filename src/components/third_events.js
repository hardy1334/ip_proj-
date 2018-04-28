import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import icon from '/home/hardik/ip_proj/src/images/Maps-Location-icon.png';
//import quick from '/home/hardik/ip_proj/src/images/even_quick_21.jpg';
import ping from '/home/hardik/ip_proj/src/images/khel.jpg'

const THIRD =(props)=>{

    return( 
        <div style={{height:800}} >
        <div className="jumbotron jumbotron-fluid" style={{ background:'#E8E8E8'}} >
        <div className="container">
          <h5 className="display-4" style={{color:"#909090"}}>Sports Rehab - Indian Sports and Fitness Carnival</h5>
          <img className="card-img-top" src={ping}  alt="Card image cap" height="300" width="1200"/>
          <h5 style={{color:"#909090"}}>Details</h5>
          <p className="lead">
          Chitkara University Sports Board will organise an Indian Sports and Fitness Carnival (ISAFC) 'Sports Rehab' on 7th-9th April 2018 at Chitkara University.
          <p>
          In this carnival following sports activities are being held:
</p><p>          Archery,
         Table Tennis,
         
          Pool,
         Futsal
         and many more......</p>
          <p>For further details, please contact:
          <small>Heena Babbar - +91 7888514537</small>
          <small>Shushant - +91 7986350238</small>
          
          </p></p>
        </div>
        <div  style={{marginLeft:900}}>
        <small>Hosted By: <a href="https://www.chitkara.edu.in">Chitkara University</a>
        <br/></small>
        <small>on:clock
        7 April - 9 April
        7 April at 9:00 to 9 April at 17:00</small><br/>
        <img src={icon} style={{height:30,width:30,marginLeft:-8}}/>
  <br/><small> 

  Chitkara University, Chandigarh-Patiala National Highway, Punjab, Rajpura 140401 </small>      </div>
      </div>

      </div>


    )
}



export default THIRD;