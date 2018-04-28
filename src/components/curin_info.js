import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';


class CURIN_INFO extends React.Component{

    render(){

        return(
           <div>
             <b>Objective:</b>
             <p>We let you embark on research from day one. Research is open to 100% of Chitkara engineering students. Through Chitkara University Research and Innovation Network (CURIN), our researchers, staff and students work across disciplines to extend the boundaries of knowledge. 11 Centres of advanced research under CURIN build and sustain Chitkara University’s competitive advantage through leadership.</p>
             <b>Patents Filled:</b>
             <ul>
               <li>MULTI PURPOSE DUAL OPERATED RICKSHAW/PEDICAB</li>
               <li>SOLAR LOUNGE</li>
               <li>MICRO ELECTROMECHANICAL SENSORS (MEMS) BASED AUTOMATIC WINDSCREEN WIPER</li>
               <li>RFID BASED INTEGRATED PERSONAL IDENTIFICATION SYSTEM WITH SMART CARD</li>
               <li>REMOTE CONTROLLED SOLAR CAR WITHOUT STEERING WHEEL</li>
               <li>FOLDING BICYCLE</li>
               <li>ELECTRONIC CARD FOR SIMULTANEOUS WORKING OF MULTIPLE OPERATING SYSTEMS FOR A DIGITAL ELECTRONIC DEVICE</li>
               <li>‘INTELLIGENT SOLAR TRACKER WITH A COMPRESSORLESS REFRIGERATOR’</li>
             </ul>
             <b>Mission of CURIN</b>
               <ul>
                  <li>To promote interdisciplinary and applied research beneficial to our University, Society, National and International Community</li>
                  <li>To incorporate and inculcate inclusive research habits – with innovative streak – at all levels of students, employees and faculty</li>

               </ul>
           </div>
        );
    }
}


export default CURIN_INFO;