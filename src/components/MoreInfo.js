import React, { Component } from 'react';
import './MoreInfo.css';
import ShowMoreText from 'react-show-more-text';

class MoreInfo extends Component{
    render() {
        return(
            <ShowMoreText
                lines={1}
                more='More info'
                less='Less info'
                className='content-css more'
                anchorClass='my-anchor-css-class'
                onClick={this.executeOnClick}
                expanded={false}
                width={20}
            >
                <div className='flex'>
                    <h4 className='mt3'>State of Origin:</h4>
                    <p className='ml2'>{this.props.origin}</p>
                </div>
                <div className=''>
                    <h4 className='mt3'>Address:</h4>
                    <p className=''>{this.props.address}</p>
                </div>
                <div className='flex'>
                    <h4 className='mt3'>Website:</h4>
                    <a className='ml2 mt3' rel="noreferrer" target='_blank' href={this.props.website}>{this.props.website}</a>
                </div>
            </ShowMoreText> 
        )
    }
  }
  
export default MoreInfo;