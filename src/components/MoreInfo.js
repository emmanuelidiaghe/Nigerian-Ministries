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
            width={20}
        >
            <div className='flex'>
                <h4 className='mt3'>State of Origin:</h4>
                <p className='ml2'>Kano State</p>
            </div>
            <div className=''>
                <h4 className='mt3'>Address:</h4>
                <p className=''>Federal Secretariat Towers, Shehu Shagari Way
                    Central Area, P.M.B. 192, Garki
                    Abuja Nigeria.
                </p>
            </div>
            <div className='flex'>
                <h4 className='mt3'>Website:</h4>
                <a className='ml2 mt3' href='www.justice.gov.ng'>www.justice.gov.ng</a>
            </div>
        </ShowMoreText>
        )
    }
  }
  
  export default MoreInfo;