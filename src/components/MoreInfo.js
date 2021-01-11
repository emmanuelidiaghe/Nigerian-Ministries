import React, { Component } from 'react';
import ShowMoreText from 'react-show-more-text';

class MoreInfo extends Component{
    constructor() {
        super();
    }
  
    render() {
        return(
            <ShowMoreText
            /* Default options */
            lines={1}
            more='More info'
            less='Less info'
            className='content-css'
            anchorClass='my-anchor-css-class'
            onClick={this.executeOnClick}
            expanded={false}
            width={280}
        >
            <a href="https://www.google.bg/" title="Google" rel="nofollow" target="_blank" rel="noopener noreferrer">www.google.bg</a> ut labore et dolore magna amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore

            et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        </ShowMoreText>
        )
    }
  }
  
  export default MoreInfo;