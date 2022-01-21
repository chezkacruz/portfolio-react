import React, { Component } from 'react';
import '../styles/about.css'; 
import '../styles/blob.css';
import '../App.css'
import {Element} from 'react-scroll'

class About extends Component{
    render(){
        return(
            <Element  name="About" className="About">
                <svg className ="blob-4" viewBox="0 0 856 640" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M365.312 568.847C273.496 594.371 178.86 661.357 88.9933 631.768C3.59006 603.648 0.0399593 514.33 0.945678 448.877C1.68345 395.561 90.4917 359.7 93.4952 306.434C97.1555 241.52 -8.16938 184.068 19.3709 122.11C46.8906 60.1996 136.1 0.802785 229.566 0.316876C327.575 -0.192651 373.268 90.398 461.994 119.809C531.541 142.863 618.549 122.208 683.692 150.854C760.518 184.636 855.947 230.025 855.779 292.969C855.606 357.857 750.477 395.776 682.922 440.233C636.669 470.672 580.31 488.192 525.24 510.492C472.151 531.99 422.402 552.976 365.312 568.847Z" fill="#46B8BD"/>
                </svg>

                <svg width="573" height="499" viewBox="0 0 573 499" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M572.181 219.919C571.413 265.818 539.031 304.077 511.581 340.724C488.756 371.196 455.708 389.421 426.751 414.07C395.93 440.306 373.59 477.818 335.306 490.774C294.099 504.719 249.823 496.459 207.057 488.419C155.765 478.775 99.0048 475.36 61.1376 439.229C22.0037 401.89 -3.27386 345.432 0.534094 291.366C4.25576 238.526 60.2254 206.482 80.9588 157.806C101.522 109.53 76.198 35.0595 121.119 8.27134C168.004 -19.6885 224.942 31.8739 278.933 39.7448C316.889 45.278 354.323 39.2452 391.742 47.723C435.415 57.618 483.237 62.3934 515.721 93.3931C549.651 125.773 572.968 172.924 572.181 219.919Z" fill="#46B8BD"/>
                </svg>


                <div className='about-content'>
                    <img src="./franchezka.jpg" alt='franchezka cruz' className='my-picture'/>

                    <div className='about-me-text-container'>
                        <h1 className='header' style={{color: '#008F95'}}>about me</h1>
                        <h3 className='header-text'>I am currently a junior pursuing a degree in Computer Science with Specialization in Software Technology at De La Salle University, Manila, Philippines. I aspire to become an IT professional and enhance my skills in the field of computing as well as data science and analytics. </h3>
                        <h4 className='interests'> Interests: Project Management, Front-end Web Development,              
                  Data Science and Analytics</h4>
                    </div>
                    
                </div>
            </Element>
        )
       
    }
}

export default About