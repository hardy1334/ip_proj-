import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import C2s2 from './club_c2s2';
import BITS_N_BYTES from './bits_n_bytes';
import TOASTMASTER from './toastmaster';
import NavbarMain from './main_navbar';
import {BrowserRouter,Route} from 'react-router-dom';
import MECHESTIN from './mechestin';
import MATRIX from './google_not_info';
import UDACITY from './u_college';
import MUN from './mun';
import CURIN from './curin';
import CEED from './ceed';
import FOOTER from './footer';

class Clubs extends React.Component{


    render(){
        return(
           <div>
             <C2s2/>
             <BITS_N_BYTES/>
             <TOASTMASTER/>
             <MECHESTIN/>
             <MATRIX/>
             <UDACITY/>
             <MUN/>
             <CURIN/>
             <CEED/>
             <FOOTER/>
           </div>
        );
    }
}

export default Clubs;