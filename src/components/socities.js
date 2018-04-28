import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import ACM from './acm';
import ASME from './asme';
import CSI from './csi';
import IEEE from './ieee';
import ISTE from './iste';
import SAE from './sae';
import FOOTER from './footer';


class Socities extends React.Component{
    render(){
        return(
           <div>
              <ACM/>
              <ASME/>
              <CSI/>
              <IEEE/>
              <ISTE/>
              <SAE/>
              <FOOTER/>
           </div>
        );
    }
}

export default Socities;