import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';



class FOOTER extends React.Component{


    render(){
         let back_col={
              backgroundColor:'red',
              
         }
         let shift_foot={
          
            marginTop: 320,
             paddingTop: 20,
             paddingBottom: 50,
            }
            let chang_clr={
                color:'#fff',
            }
        return(
            <div style={back_col}>
              <footer style={shift_foot}>
              <div className="footer-address ">
              <div className="footer-address-left">
                  <h3>Chitkara University (Punjab)</h3>
                  <h5 >Chandigarh-Patiala National Highway <br/>
                  Punjab 140 401</h5>
              </div>
              <div className="footer-address-left">
                  <h3>Chandigarh information centre</h3>
                  <h5 >SCO 160-161, Sector 9-C<br/>
                   Chandigarh 160 009 </h5>
              </div>
          </div>
            <p>For any queries ,<a href="http://chitkara.edu.in">Click here </a></p>
              </footer>
           </div>
        );
    }
}



export default FOOTER;