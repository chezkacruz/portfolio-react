import React, { Component } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import '../styles/blob.css';
import '../styles/home.css'; 
import '../App.css'
import { Element } from 'react-scroll'

class Home extends Component {
    render(){
        return(
          <Element name ="Home" className='Home' >
            <svg className="blob-1"viewBox="0 0 937 792" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M721.676 41.1408C844.334 108.601 947.147 233.195 935.509 387.17C924.518 532.587 793.219 645.373 669.792 727.615C577.095 789.381 476.335 761.496 373.052 761.949C244.638 762.512 67.487 844.926 12.1115 730.5C-43.2935 616.013 118.622 492.337 181.399 365.922C235.119 257.744 243.013 122.7 344.125 61.9181C465.305 -10.9279 610.683 -19.9036 721.676 41.1408Z" fill="#FFDBD8"/>
            </svg>

            <svg className="blob-2" viewBox="0 0 755 570" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M753.852 208.225C768.311 362.146 595.959 428.888 462.343 484.524C319.375 544.054 144.137 630.899 45.9747 502.976C-54.6801 371.805 28.3623 180.603 130.764 52.4197C200.22 -34.5216 315.874 8.61764 420.087 34.6763C552.988 67.9087 740.131 62.1515 753.852 208.225Z" fill="#48C5CA"/>
            </svg>

            <svg className="blob-3"  viewBox="0 0 508 401" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M40.6691 31.2081C86.087 -0.237735 149.087 57.4133 205.925 53.9594C275.812 49.7126 335.965 -23.8378 400.552 9.33917C470.457 45.2475 509.256 133.185 507.955 209.104C506.702 282.181 453.697 340.236 394.22 378.692C345.226 410.37 282.416 398.842 221.876 394.074C165.937 389.669 105.947 391.765 63.1608 352.621C19.2462 312.444 7.40463 251.524 3.39228 194.187C-0.740139 135.133 -6.14121 63.6181 40.6691 31.2081Z" fill="#FFF7C0"/>
            </svg>



            <div className='home-content'>
                <h1 id='my-name-is'>HI! MY NAME IS</h1>
                <h1 id='my-name'>Franchezka Cruz</h1>
                <p id ='im-a'> I'm a 
                    <span id="title">
                        <Typewriter
                           loop
                           cursor
                           cursorStyle="_"
                           typeSpeed={70}
                           deleteSpeed={50}
                           delaySpeed={1000}
                           words={['Student', 'Web Developer', 'Problem Solver', 'Leader']}
                        />
                    
                    </span></p>
            </div>
        </Element>

          
        )
    }
}

export default Home