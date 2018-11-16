import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import ACM from './acm';
import ASME from './asme';
import CSI from './csi';
import IEEE from './ieee';
import ISTE from './iste';
import SAE from './sae';
import FOOTER from './footer';
//import ThemedExample from './chatbot';
import ThemedExample from './chatbot';
import ThemedExample2, { ThemedExample3 }  from './chatbot1';
import ThemedExample4 from './charbot2';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import '../style/navsty.css';



class Socities extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isClicked:false
        }
  
     }
     openchat=()=>{
         this.setState({
             isClicked:!this.state.isClicked
         })
     }

    render(){
        const theme = {
            background: '#f5f8fb',
            fontFamily: 'Fantasy',
            headerBgColor: '#D80000 ',
            headerFontColor: '#fff',
            headerFontSize: '15',
            botBubbleColor: '#D80000',
            botFontColor: '#fff',
            userBubbleColor: '#fff',
            userFontColor: '#D80000 ',
            
          }

        return(
           <div>
           <div className="container" style={{marginTop:60}}>
             <div className="row">
             <div className="col-sm"> 
              <ACM/>
             </div>
             <div className="col-sm"> 
              <ASME/>
             </div>
             <div className="col-sm">  
              <CSI/>
             </div> 
              </div>
            </div>  
            <div className="container" style={{marginTop:60}}>
             <div className="row"> 
             <div className="col-sm"> 
              <IEEE/>
             </div>
             <div className="col-sm">  
              <ISTE/>
             </div>
             <div className="col-sm">  
              <SAE/>
             </div> 
             </div>
             </div> 
            
             <button type="button" style={{marginLeft:1200}} onClick={this.openchat} className="btn btn-danger dropup btn-circle btn-xl"><i className="fa fa-user"></i></button>      
             {this.state.isClicked ?
               <ThemeProvider theme={theme} >
             <ChatBot
             headerTitle="How Can I help you"
             style={{marginLeft:600}}
             steps={[
               {
                 id: '1',
                 message: 'What is your name?',
                 trigger: '2',
               },
               {
                 id: '2',
                 user: true,
                 trigger: '3',
               },
               {
                 id: '3',
                 message: 'Hi {previousValue}, Welcome to Chitkara University!!!',
                  trigger: '4',
               },
               {
                   id: '4',
                   message: 'What do you want to know ?',
                   trigger :'5'
               },
               {
                   id: '5',
                   options:[
                       {value: 1,label: 'Events ',trigger: '6'},
                       {value: 2,label: 'Clubs',trigger: '8'},
                       {value: 3 ,label: ' Socities',trigger: '10'},
                       {value: 4,label: 'Others',trigger: '12'}
                   ],
               },
               {
                     id: '6',
                     message: 'Chitkara University organises a wide variety of events from educational to technology or research papers or entrepreneurship and many more.To know about upcoming events  ',
                     trigger:'7'
                     
               },
               {
                   id: '7',
                   component: (
                       <div><ThemedExample/></div>
                   ),
                   end:true
               },
               {
                   id: '8',
                   message: 'Chitkara University has Various categories of clubs from music,drama,technology to international clubs for public speaking and many more.To know more about clubs-',
                   trigger: '9'
               },
               {
                   id: '9',
                   component: (
                    <div><ThemedExample2/></div>
                    ),
                  end:true
               },
               {
                   id: '10',
                   message: 'Chitkara University has socities of almost all kinds varying from automobiles to computers or volunteering in social cause.To know more about socities- ',
                   trigger: '11'
               },
               {
                   id: '11',
                   component:  (
                      <div><ThemedExample3/></div>
                   ),
                   end :true
               },
               {
                   id: '12',
                   message:'Chitkara University in Punjab has been founded by Dr. Ashok Chitkara and Dr. Madhu Chitkara who have been passionate teachers for more than 40 years now. Since inception, Chitkara University has been different. Our students have been different. ',
                   trigger: '13'
               },
               {
                id: '13',
                component:  (
                   <div><ThemedExample4/></div>
                ),
                end :true
            },
             ]}
           />      
               </ThemeProvider>     :null} 
     

              <FOOTER/>
           </div>
        );
    }
}

export default Socities;