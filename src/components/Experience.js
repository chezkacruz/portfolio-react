import React, { Component } from 'react';
import '../styles/experience.css'; 
import '../App.css'
import '../styles/about.css'; 

import { Element } from 'react-scroll'

class Experience extends Component{
    render(){
        return(
            <Element name="Experience" className="Experience">
                <svg className="blob-1" width="636" height="368" viewBox="0 0 636 368" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M173.101 276.393C105.196 234.146 -18.8223 201.269 3.12818 124.367C26.0566 44.0381 154.81 91.9735 233.635 64.3139C276.43 49.2971 302.395 4.48247 347.737 3.44317C435.458 1.43247 542.76 -16.307 592.332 56.092C649.077 138.968 653.952 274.583 579.695 342.217C509.055 406.554 402.984 329.723 308.665 314.453C259.919 306.562 215.029 302.478 173.101 276.393Z" fill="#FF9292"/>
                </svg>

                <svg className="blob-4" width="809" height="615" viewBox="0 0 809 615" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M731.518 167.278C768.522 192.998 820.434 225.034 806.157 268.333C790.67 315.301 693.411 327.509 663.955 372.181C635.938 414.673 686.003 464.768 650.467 504.454C617.554 541.211 550.001 557.737 498.861 556.558C442.852 555.267 419.847 486.833 362.451 497.816C299.18 509.923 277.114 594.593 214.365 610.996C164.807 623.951 108.35 601.853 88.0465 569.549C64.7621 532.502 108.01 479.125 103.989 435.384C101.424 407.48 79.6078 386.4 68.8708 360.938C56.213 330.92 41.2077 302.411 34.4302 270.428C25.4483 228.043 -29.5296 167.659 22.2243 140.817C94.0349 103.573 168.477 174.144 247.768 159.782C284.01 153.217 286.697 102.215 320.488 86.7926C352.957 71.973 389.444 90.4598 423.524 79.5647C481.48 61.0368 534.189 -12.1177 586.207 1.845C635.65 15.1167 575.47 95.1532 604.431 128.125C630.015 157.251 697.982 143.969 731.518 167.278Z" fill="#F07D73"/>
                </svg>


                <div className="about-content">
                    <div className="about-me-text-container">
                        <h1 className='header' style={{color: '#E24E42'}}>experience</h1>
                        <h1  className='header-text'>Here are some of the technologies I’ve worked with in my previous projects. I’m always eager to learn more in this fast-paced industry. </h1>
                     </div>

                     <div className = "skills-cont">
                         <div className='skills-row'>
                            <img className="skills-logo" src="./icons8-html-5-96.png" alt="HTML5"></img>
                            <img className="skills-logo" src="./icons8-css3-96.png" alt="CSS3"></img>
                            <img className="skills-logo" src="./icons8-javascript-96.png" alt="JavaScript"></img>
                            <img className="skills-logo" src="./icons8-python-96.png" alt="HPython"></img>
                         </div>
                       
                       <div className='skills-row'>
                            <img className="skills-logo" src="./icons8-nodejs-96.png" alt="Node.js"></img>
                            <img className="skills-logo" src="./icons8-react-96.png" alt="React.js"></img>
                            <img className="skills-logo" src="./icons8-bootstrap-96.png" alt="Bootstrap"></img>
                            <img className="skills-logo" src="./icons8-java-96.png" alt="Java"></img>
                       </div>

                       <div className='skills-row'>
                            <img className="skills-logo" src="./icons8-mongodb-96.png" alt="MongoDB"></img>
                            <img className="skills-logo" src="./icons8-mysql-logo-96.png" alt="MySQL"></img>
                            <img className="skills-logo" src="./icons8-c-programming-96.png" alt="C"></img>
                            <img className="skills-logo" src="./icons8-adobe-photoshop-96.png" alt="Adobe Photoshop"></img>
                       </div>


                        


                     </div>
                     
                    
                </div>
            </Element>

        )
    }
}

export default Experience