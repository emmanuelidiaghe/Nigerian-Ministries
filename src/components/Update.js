import React, { Component } from 'react';
import './Update.css';

class update extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedMin: "",
            selectedMinister1: "",
            selectedOrigin1: "",
            selectedMinister2: "",
            selectedOrigin2: "",
            selectedAdd: "",
            selectedWeb: "",
            validationError1: "",
            validationError2: "",
            validationError3: "",
            validationError4: "",
            validationError5: "",
            validationError6: "",
            validationError7: ""
        };
    }
    
    upload = () => {
        //this.setState(this.props.min[0])
        alert("File Updated!");
        //console.log(this.state.selectedMin);
    }
    
    render() {
        return (
            
            <div className='update '>
                <div className='update2'>
                    <h2 className='pt3'>Update List here:</h2>
                    <span className='red db'>{this.state.validationError1}</span>
                    <label className=''>Ministry: 
                        <select
                            className='w-third ml2 mb3'
                            value={this.state.selectedMin}
                            onChange={e =>
                                this.setState({
                                selectedMin: e.target.value,
                                validationError1:
                                    e.target.value === ""
                                    ? "You must select a Ministry"
                                    : ""
                                })
                            }
                            >
                            <option key='' value=''>Select a Ministry</option>
                            {this.props.min.map((min, index) => (
                                <option
                                key={index}
                                value={index}
                                >
                                {min.name}
                                </option>
                            ))}
                        </select>
                    </label><br />
                    <span className='red db'>{this.state.validationError2}</span>
                    <label className=''>Minister: 
                        <input
                            className='ml2 mb3 w-third' 
                            type='text'
                            value={this.state.selectedMinister1}
                            onChange={e =>
                                this.setState({
                                selectedMinister1: e.target.value,
                                validationError2:
                                    e.target.value === ""
                                    ? "You must enter a Minister"
                                    : ""
                                })
                            }
                        />
                    </label><br />
                    <span className='red db'>{this.state.validationError3}</span>
                    <label className=''>Origin(Min): 
                        <input
                            className='ml2 mb3 w-third' 
                            type='text'
                            value={this.state.selectedOrigin1}
                            onChange={e =>
                                this.setState({
                                selectedOrigin1: e.target.value,
                                validationError3:
                                    e.target.value === ""
                                    ? "You must enter a State"
                                    : ""
                                })
                            }
                    />
                    </label><br />
                    <span className='red db'>{this.state.validationError4}</span>
                    <label className=''>Minister of State: 
                        <input
                                className='ml2 mb3 w-third' 
                                type='text'
                                value={this.state.selectedMinister2}
                                onChange={e =>
                                    this.setState({
                                    selectedMinister2: e.target.value,
                                    validationError4:
                                        e.target.value === ""
                                        ? "You must enter a Minister"
                                        : ""
                                    })
                                }
                            />
                    </label><br />
                    <span className='red db'>{this.state.validationError5}</span>
                    <label className=''>Origin(Min_State): 
                        <input
                                className='ml2 mb3 w-third' 
                                type='text'
                                value={this.state.selectedOrigin2}
                                onChange={e =>
                                    this.setState({
                                    selectedOrigin2: e.target.value,
                                    validationError5:
                                        e.target.value === ""
                                        ? "You must enter a State"
                                        : ""
                                    })
                                }
                            />
                    </label><br />
                    <span className='red db'>{this.state.validationError6}</span>
                    <label className=''>Address: 
                        <input
                                className='ml2 mb3 w-third' 
                                type='text'
                                value={this.state.selectedAdd}
                                onChange={e =>
                                    this.setState({
                                    selectedAdd: e.target.value,
                                    validationError6:
                                        e.target.value === ""
                                        ? "You must enter an Address"
                                        : ""
                                    })
                                }
                            />
                    </label><br />
                    <span className='red db'>{this.state.validationError7}</span>
                    <label className=''>Website: 
                        <input
                                className='ml2 mb3 w-third' 
                                type='text'
                                value={this.state.selectedWeb}
                                onChange={e =>
                                    this.setState({
                                    selectedWeb: e.target.value,
                                    validationError7:
                                        e.target.value === ""
                                        ? "You must enter a Website"
                                        : ""
                                    })
                                }
                            />
                    </label><br />
                    <button
                        className='h2 white bg-green br-pill'
                        onClick={this.upload}
                    >UPDATE
                    </button><hr />
                </div>
            </div>
        );
    }
}

export default update;