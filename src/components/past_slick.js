import React,{Component} from "react";
import Slider from "react-slick";
import ReactDOM, {render} from 'react-dom';
import one from '/home/hardik/ip_proj/src/images/3.jpg';
import two from '/home/hardik/ip_proj/src/images/2.jpg';
import three from '/home/hardik/ip_proj/src/images/1.jpg';
import four from '/home/hardik/ip_proj/src/images/4.jpg';
import five from '/home/hardik/ip_proj/src/images/5.jpg';
import six from '/home/hardik/ip_proj/src/images/6.jpg';
import seven from '/home/hardik/ip_proj/src/images/10.jpg';
import eight from '/home/hardik/ip_proj/src/images/11.jpg';
import nine from '/home/hardik/ip_proj/src/images/13.jpg';


class SLICK extends React.Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 3500,
            autoplay: true,
            autoplaySpeed: 3000,
            cssEase: "linear"
          };
      return (
        <Slider {...settings}>
          <div>
            <img src={one}  style={{height:300}}/>
            <center><h3 style={{marginTop:-30,color:'#fff',fontWeight:'bold'}}>EXPLORE STUDENT FEST 2018</h3>
      </center>    </div>
          <div>
          <img src={two} style={{height:300}} />
          <center ><h3 style={{marginTop:-30,color:'#fff',fontWeight:'bold'}}>OCTAHACKS HACKATHON</h3></center>
          </div>
          <div>
            <img src={three} style={{height:300}}/>
            <center><h3 style={{marginTop:-30,color:'#fff',fontWeight:'bold'}}>CYBERSECURITY WORKSHOP</h3>
          </center></div>
          <div>
          <img src={four} style={{height:300}} />
         <center> <h3 style={{marginTop:-30,color:'#fff',fontWeight:'bold'}}>FUTSAL COMPETITION</h3>
          </center></div>
          <div>
          <img src={five} style={{height:300}}/>
          <center><h3 style={{marginTop:-30,color:'#fff',fontWeight:'bold'}}>CHITKARA MUNSOC</h3>
        </center></div>
        <div>
        <img src={six} style={{height:300}}/>
        <center><h3 style={{marginTop:-30,color:'#fff',fontWeight:'bold'}}>TOASTMASTER'S </h3>
      </center></div>
      <div>
      <img src={seven} style={{height:300}}/>
      <center><h3 style={{marginTop:-30,color:'#fff',fontWeight:'bold'}}>CREATING SELF-AWARENESS </h3>
    </center></div>
    <div>
    <img src={eight} style={{height:300}}/>
    <center><h3 style={{marginTop:-30,color:'#fff',fontWeight:'bold'}}>IPC 69 PHARAMACITICAL </h3>
  </center></div>
  <div>
  <img src={nine} style={{height:300}}/>
  <center><h3 style={{marginTop:-30,color:'#fff',fontWeight:'bold'}}>HEALTH AND FITNESS</h3>
</center></div>
        </Slider>
      );
    }
  }


  export default SLICK;