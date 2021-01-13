import React, { Component } from 'react';
import FirstInfo from './FirstInfo';
import MoreInfo from './MoreInfo';
import './FullInfo.css';

class FullInfo extends Component{
    constructor(props) {
        super(props);
        this.state = props;
    }
  
    render() {
        return(
            <div className='ministry'>
                <FirstInfo
                    key={this.props.index}
                    name={this.props.name}
                    minister={this.props.minister}
                    minister_state={this.props.minister_state}
                />
                <MoreInfo 
                    key={this.props.index}
                    origin={this.props.origin}
                    address={this.props.address}
                    website={this.props.website}
                />
                <hr />
            </div>
        )
    }
  }

export default FullInfo;