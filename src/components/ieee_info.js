import React,{Component} from 'react';
import ReactDOM, {render} from 'react-dom';


class IEEE_info extends React.Component{

    render(){

        return(
          <div>
            <h5>About:</h5>
            <p>IEEE is the world's largest professional association, which is dedicated to taking technological innovation forward.
              The global community derives inspiration from IEEE and its members through its publications, conferences, technology standards, professional and educational activities.</p>
             <p>Members collaborate through a platform provided by the IEEE on world-changing technologies, from computing and sustainable energy systems, to aerospace, communications, robotics, healthcare, and more.</p>
            <h5>Achivements:</h5>
            <h4>Awards won by IEEE Branch Counselor and Executive Student Members</h4>
            <ul>
                <li>Meenu Khurana won award for Best Student Branch Counselor from IEEE Delhi Section Region 10 in 2010.</li>
                <li>Students of B.Tech won Dr. J.K. Paul Memorial Award by IEEE Delhi Section for three consecutive years 2011, 2012 and 2013.</li>
                <li>One of our student was awarded as Best Student Volunteer by IEEE Delhi Section.</li>
                <li> and many more..........</li>
            </ul>
         </div>
        );
    }
}



export default IEEE_info;