import React, { Component } from 'react';
import FullInfo from './FullInfo';
import minList from './minList';

class ministry extends Component{
    constructor(props) {
        super(props);
        this.state = { minList }
    }
    
    render() {
        return (
            <div>
                {this.state.minList.map((min, index) => (
                   <FullInfo 
                        key={index}
                        name={min.name}
                        minister={min.minister}
                        minister_state={min.minister_state}
                        origin={min.origin}
                        address={min.address}
                        website={min.website}
                   /> 
                ))}
            </div>
        );
    }
}

export default ministry;