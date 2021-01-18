import React, { Component } from 'react';
import FullInfo from './FullInfo';
import minList from './minList';
import Update from './Update';

class ministry extends Component{
    constructor(props) {
        super(props);
        this.state = { minList }
        this.handleToUpdate  = this.handleToUpdate.bind(this);
    }
    
    handleToUpdate(selectedMin, selectedMinister1, selectedOrigin1, selectedMinister2, selectedOrigin2, selectedAdd, selectedWeb){
        this.setState(state => {
            const list = state.minList.filter(mini => mini.id == selectedMin)
            list[0].address = selectedAdd;
            list[0].website = selectedWeb;
            list[0].origin = selectedOrigin1;
            list[0].minister = selectedMinister1;
            list[0].origin_state = selectedOrigin2;
            list[0].minister_state = selectedMinister2;
            this.setState(this.state);
            //console.log(list);
        })
        alert('UPDATED!');
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
                        handleToUpdate = {this.handleToUpdate.bind(this)}
                   /> 
                ))}
                <Update
                    min={this.state.minList}
                    handleToUpdate = {this.handleToUpdate.bind(this)}
                />
            </div>
        );
    }
}

export default ministry;