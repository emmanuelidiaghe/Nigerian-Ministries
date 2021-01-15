import React, { Component } from 'react';
import FullInfo from './FullInfo';
import minList from './minList';
import Update from './Update';

class ministry extends Component{
    constructor(props) {
        super(props);
        this.state = { minList }
        this.handler = this.handler.bind(this)
    }
    
    handler = () => {
        this.setState[selectedMin]({
            
        })
    }

    render() {
        return (
            <div>
                {this.state.minList.map((min, index) => (
                   <FullInfo 
                        key={index}
                        name={min.name}
                        origin={min.origin}
                        address={min.address}
                        website={min.website}
                        minister={min.minister}
                        origin_state={min.origin_state}
                        minister_state={min.minister_state}
                   /> 
                ))}
                <Update
                    min={this.state.minList}
                    handler={this.handler}
                />
            </div>
        );
    }
}

export default ministry;