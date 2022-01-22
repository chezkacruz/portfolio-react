import React, { Component } from "react";

import Modal from "./Modal";

import '../styles/projects.css'; 

class ProjectItem extends Component {
  state = {
    showModal: false,
    dataModal: {
      title: "", 
      desc: "", 
      type: "",
      tech_stack:"", 
      img_url: ""
    }
  };
 
  getModal = data => {
    this.setState({ showModal: true, dataModal: data });
    document.body.style.overflow = 'hidden';
    document.getElementById("NavbarItems").style.position = 'relative';
    document.getElementById("NavbarItems").style.zIndex = -9;
  };

  hideModal = () => {
    this.setState({ showModal: false });
    document.body.style.overflow = 'unset';
  };



  render() {
    return (
      <div className="proj-container" >
        {this.props.data.map((data, key) => (
          <div key={key} className="inside-proj" onClick={() => this.getModal(data)}>
            <img src={data.img_url} alt={data.title} className="project-img"></img>
            <p className="proj_title">{data.title}</p>
            <p className="proj_type">{data.type}</p>
          </div>
        ))}

        <Modal
          show={this.state.showModal}
          onHide={this.hideModal}
          title={this.state.dataModal.title}
          type={this.state.dataModal.type}
          desc={this.state.dataModal.desc}
          img_url={this.state.dataModal.img_url}
        />
      </div>
    );
  }
}

export default ProjectItem;
