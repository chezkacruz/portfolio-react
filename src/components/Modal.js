import React, { Component } from "react";

import '../App.css'
import '../styles/projects.css'; 

class Modal extends Component {
  render() {
    return (  
      <React.Fragment>
        {this.props.show && (
          <div className="modal">
            
              <img src={this.props.img_url} alt={this.props.title} className="modal-pic"></img>
              <h1>{this.props.title}</h1>
              <h1>{this.props.desc}</h1>
              <h1>{this.props.type}</h1>
              <h1>{this.props.tech_stack}</h1>

              <button onClick={this.props.onHide}>Close Modal</button>

            
            
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Modal;