import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';


export default class MapContainer extends Component{

    state={
        locations:[
      {name:"Chitkara University,Punjab Campus",location:{lat:30.517609,lng:76.659570}},
      {name:"Exploretorium",location:{lat:30.515873,lng:76.657383}},
      { name: "Hospitality", location: {lat: 30.514857, lng: 76.659529} },
      { name: "Architecture", location: {lat: 30.517214, lng:76.660463}},
      
        ]
    }

    componentDidMount=()=>{
        this.loadMap();
    }


   loadMap=()=>{
       if(this.props && this.props.google){
           const {google}=this.props;
           const maps=google.maps;
           const mapRef=this.refs.map;
           const node=ReactDOM.findDOMNode(mapRef);
           
           const mapConfig=Object.assign({},{
               center:{lat:30.517609,lng:76.659570},
               zoom:15,
               mapTypeId:'hybrid'
           })
           this.map=new maps.Map(node,mapConfig);

           this.state.locations.forEach(location=>{
               const marker=new google.maps.Marker({
                   position:{lat:location.location.lat,lng:location.location.lng},
                   map:this.map,
                   title:location.name
               });
           })

       }
   }
render(){
    const style={
        width: '38.5vw',
        height: '60vh',
        
    }


return(
   <div ref="map" style={style}>
        loading map.....
   </div>

);
}}