import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';
//import csil1 from '/home/hardik/ip_proj/src/images/csi1.jpg';
//import csil2 from '/home/hardik/ip_proj/src/images/csi2.jpg';
//import csil3 from '/home/hardik/ip_proj/src/images/csi10.jpg';

class FirstCarousel extends React.Component{

    render(){
     let resize_carousel_images={
         height:350,
         paddingTop:20,
         width:1200,
         marginLeft: 40,
         
        }
      let center_carousel={
        position:'center'
      }
        return(
         <div>
         <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={center_carousel} >
         <ol className="carousel-indicators">
           <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
           <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
           <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
         </ol>
         <div className="carousel-inner" style={resize_carousel_images}>
           <div className="carousel-item active">
             <img className="d-block w-100"  alt="First slide"/>
           </div>
           <div className="carousel-item">
             <img className="d-block w-100"  alt="Second slide"/>
           </div>
           <div className="carousel-item">
             <img className="d-block w-100"  alt="Third slide" />
           </div>
         </div>
         <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
           <span className="sr-only">Previous</span>
         </a>
         <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
           <span className="carousel-control-next-icon" aria-hidden="true"></span>
           <span className="sr-only">Next</span>
         </a>
       </div>
         </div>
        );
    }
} 

export default FirstCarousel;