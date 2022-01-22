import React, { Component } from 'react';
import './Navbar.css'
import { Link, Events, animateScroll as scroll, scroller } from 'react-scroll'


class Navbar extends Component {

    state = { clicked: false }
    status = { isScrolled: true }

    
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    componentDidMount() {

        this.listener = document.addEventListener("scroll", e => {
            var scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 40) {
              this.setState({ isScrolled: true})
            } else {
              if (!this.state.status) {
                this.setState({ isScrolled: false });
              }
            }
          });

          

          Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
          });
      
          Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
          });

          
      }
      componentDidUpdate() {
        document.removeEventListener("scroll", this.listener);
      }

      scrollToTop() {
        scroll.scrollToTop();
      }

      scrollTo() {
        scroller.scrollTo('Experience', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        })
        scroller.scrollTo('About', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        })
      }

      componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
      }


    render(){
        return(
            <nav className={this.state.isScrolled ? 'NavbarItems-scroll' : 'NavbarItems'}>
               <svg className="navbar-logo" width="60" height="60" viewBox="0 0 125 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle className="temp"cx="62.5" cy="62.5" r="60.5" stroke="#EB6E80" stroke-width="4"/>
                    <path d="M45.43 97V92.41L49.48 91.51C49.54 89.23 49.57 86.98 49.57 84.76C49.63 82.54 49.66 80.32 49.66 78.1V59.92H44.53V53.98L49.93 53.35C50.47 49.63 51.31 46.6 52.45 44.26C53.65 41.92 55.15 39.85 56.95 38.05C59.29 35.71 61.99 34 65.05 32.92C68.11 31.78 71.05 31.21 73.87 31.21C76.51 31.21 78.94 31.72 81.16 32.74C83.44 33.76 84.88 35.62 85.48 38.32C85.48 40.24 84.88 41.86 83.68 43.18C82.48 44.44 80.8 45.07 78.64 45.07C76.96 45.07 75.4 44.47 73.96 43.27C72.58 42.01 71.23 39.97 69.91 37.15L69.73 36.79C68.41 38.47 67.51 40.57 67.03 43.09C66.61 45.55 66.46 48.91 66.58 53.17H75.04V59.92H66.76V78.1C66.76 80.2 66.76 82.33 66.76 84.49C66.76 86.59 66.79 88.72 66.85 90.88L73.33 92.41V97H45.43Z" fill="#EB6E80"/>
                </svg>

                <h1 className='nav-name'>franchezka cruz</h1>

                <div className="menu-icon" onClick = {this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars' }></i> 
                </div>
              
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link activeClass="active" className="nav-links" to="Home" spy={true} smooth={true} duration={500}>HOME</Link></li>
                    <li><Link activeClass="active" className="nav-links" to="About" spy={true} smooth={true} duration={500}>ABOUT</Link></li>
                    <li><Link activeClass="active" className="nav-links" to="Experience" spy={true} smooth={true} duration={500}>EXPERIENCE</Link></li>
                    <li><Link activeClass="active" className="nav-links" to="Projects" spy={true} smooth={true} duration={500}>PROJECTS</Link></li>
                    <li><Link activeClass="active" className="nav-links" to="Experience" spy={true} smooth={true} duration={500}>CONTACT</Link></li>
                </ul>

            </nav>
        )
    }
}

export default Navbar