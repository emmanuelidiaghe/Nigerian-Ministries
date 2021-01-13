import React, { Component } from 'react';
import './FirstInfo.css';
import logo from '../images/logo.png';

class FirstInfo extends Component{
  
    render() {
        return(
            <div className='first'>
                <div className='minHead '>
                    <img src={logo} className='logo' alt='logo'></img>
                    <h2>{this.props.name}</h2>
                </div>
                <div>
                    <div className='flex'>
                        <h4 className='mt3'>Minister: </h4>
                        <p className='ml2'>{this.props.minister}</p>
                    </div>
                    <div className='flex'>
                        <h4 className='mt3'>Minister of State:</h4>
                        <p className='ml2'>{this.props.minister_state}</p>
                    </div>
                </div>
            </div>
        )
    }
  }
  
  export default FirstInfo;