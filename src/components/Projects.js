import React, { Component } from "react";
import {Element} from 'react-scroll'
import '../styles/projects.css'; 
import '../styles/about.css'; 
import '../styles/blob.css'; 

import ProjectItem from "./ProjectItem";
class Projects extends Component {
    state = {
      post: [
        { id: 1, title: "Click & Ship", 
          desc:" A web application that simulates the processes of an online shopping application. Worked with the CRUD operations to allow users to buy and sell items. ",  
          type: "Web Application", 
          tech_stack: "Node.js, MongoDB, HTML, CSS", 
          img_url: "./franchezka.jpg"
        },
        { id: 2, title: "Click & Ship", 
          desc:"temp desc 1",  
          type: "Web Application", 
          tech_stack: "Node.js, MongoDB", 
          img_url: "./franchezka.jpg"
        },
        { id: 3, title: "Click & Ship", 
          desc:"temp desc 1",  
          type: "Web Application", 
          tech_stack: "Node.js, MongoDB", 
          img_url: "./franchezka.jpg"
        },
        { id: 4, title: "Click & Ship", 
          desc:"temp desc 1",  
          type: "Web Application", 
          tech_stack: "Node.js, MongoDB", 
          img_url: "./franchezka.jpg"
        },
        { id: 5, title: "Click & Ship", 
          desc:"temp desc 1",  
          type: "Web Application", 
          tech_stack: "Node.js, MongoDB", 
          img_url: "./franchezka.jpg"
        },
        { id: 6, title: "Click & Ship", 
          desc:"temp desc 1",  
          type: "Web Application", 
          tech_stack: "Node.js, MongoDB", 
          img_url: "./franchezka.jpg"
        },
      ]
    };
  
    render() {
      return (
        <Element name = "Projects" className="Projects">
            <svg className="blob-5" width="500" height="500" viewBox="0 0 755 743" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M722.338 512.255C691.478 559.218 628.227 565.059 583.958 598.217C543.796 628.297 517.447 676.076 473.331 698.76C425.641 723.28 365.575 759.221 321.178 733.329C271.047 704.092 295.244 609.383 252.288 569.848C213.981 534.591 145.107 563.463 103.285 532.788C56.2282 498.274 -15.2916 447.249 4.15108 387.849C27.6472 316.064 137.224 324.87 189.063 270.723C218.495 239.98 212.126 189.295 231.098 150.795C257.382 97.4568 266.274 3.80486 322.316 0.312607C386.16 -3.66586 389.388 127.914 452.074 137.025C518.645 146.699 577.36 17.2659 637.727 46.1512C690.845 71.5672 626.415 173.084 647.281 230.429C665.631 280.861 733.951 296.612 747.852 348.806C761.872 401.448 753.118 465.416 722.338 512.255Z" fill="#FFBF43"/>
                </svg>
            

            <svg className="blob-2"width="793" height="644" viewBox="0 0 793 644" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M386.388 643.643C323.318 647.417 280.652 591.036 223.876 567.874C167.328 544.804 94.6435 549.618 53.7384 507.935C11.1377 464.525 -7.66722 401.066 3.06136 342.86C13.3627 286.972 81.4391 255.764 109.646 204.619C143.921 142.471 119.214 49.4832 185.025 12.9222C248.825 -22.5211 327.082 29.2043 398.724 44.0244C463.185 57.3592 527.453 65.6155 584.123 95.4816C650.039 130.22 718.485 167.653 751.17 229.77C786.407 296.736 812.763 383.259 770.042 448.809C726.598 515.469 618.158 510.73 543.274 548.759C487.316 577.177 449.831 639.846 386.388 643.643Z" fill="#FFDF7A"/>
            </svg>


            <div className="projects-content">
                <h1 className='header' style={{color: '#E9B000'}}>projects</h1>

                <div className="proj-row">
                    <ProjectItem data={this.state.post} />
                </div>


                
            </div>
          
        </Element>
      );
    }
  }
  
export default Projects;