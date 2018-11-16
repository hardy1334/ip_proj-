import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import imgnav from '../images/4372-128_128.jpeg';
import '../style/navsty.css';

class FOOTER extends React.Component{


    render(){
         let back_col={
              backgroundColor:'#D80000',
              height:340,
              marginTop: 100,
              color:'#fff',
              
         }
         let shift_foot={
             paddingTop: 20,
             paddingBottom: 50,
             position:'relative',
             marginLeft: 100,
            }
          
        return(
            <div style={back_col}>
              <footer style={shift_foot}>
              <div className="footer-address ">
              <div className="footer-address-left">
                  <h1 className="headin">Chitkara University (Punjab)</h1>
                  <h3 >Chandigarh-Patiala National Highway <br/>
                  Punjab 140 401</h3>
              </div>
              <div className="footer-address-left">
                  <h3>Chandigarh information centre</h3>
                  <h5 >SCO 160-161, Sector 9-C<br/>
                   Chandigarh 160 009 </h5>
              </div>
          </div>
            <p>For any queries ,<a href="http://chitkara.edu.in">Click here </a></p>
              </footer>
              <img src={imgnav} style={{marginLeft:1050,marginTop:-380,width:200,height:200}}/>
              </div>
        );
    }
}



export default FOOTER;