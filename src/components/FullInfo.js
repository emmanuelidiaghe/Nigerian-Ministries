import React, { Component } from 'react';
import FirstInfo from './FirstInfo';
import MoreInfo from './MoreInfo';
import './FullInfo.css';

class FullInfo extends Component{
    constructor(props) {
        super(props);
        //this.handleToUpdate  = this.handleToUpdate.bind(this);
    }
  
    render() {
        return(
            <div className='ministry'>
                <FirstInfo
                    key={this.props.index}
                    name={this.props.name}
                    origin={this.props.origin}
                    minister={this.props.minister}
                    origin_state={this.props.origin_state}
                    minister_state={this.props.minister_state}
                />
                <MoreInfo 
                    key={this.props.index}
                    address={this.props.address}
                    website={this.props.website}
                />
                <hr />
            </div>
        )
    }
  }

export default FullInfo;