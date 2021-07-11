import React, { Component } from'react'

export default class Binding extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Mohan',
            counter: 0
        };
    }
    HandleClick = () => {
        let counter = this.state.counter;
        this.setState({
            counter: counter + 1
        })
    }
    handleChange = (event) => {
        this.setState({ name: event.target.value });
    }
    render(){
        return(
            <div>
                <p>Simple Binding: {this.state.name}</p>
                <p>Two Way Data Binding: <input type="text" onChange={this.handleChange} value={this.state.name} /> </p>
                <p>Event Binding: <button onClick={this.HandleClick}>Click</button> : {this.state.counter}</p>
            </div>
        )
    }
}