import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';

 class TOGGLEBUTTON extends React.Component{
    constructor(props){
      super(props);
       this.state={
           chngcolor:false
       }
    }
    onkio=()=>{
        this.setState({
        chngcolor:!this.state.chngcolor
        })
    }
   render(){
      return (
         <div>          
         <button onClick={this.props.chngButtStat} onMouseEnter={this.onkio}>{this.state.chngcolor?'Dark Theme':'Light Theme'}</button>
          </div>
         
      )
    }
}

export default TOGGLEBUTTON;

