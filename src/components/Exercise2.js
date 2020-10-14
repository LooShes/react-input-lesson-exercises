import React, { Component } from 'react';

class Exercise2 extends Component {

constructor() {
    super()
    this.state = {
        name: "",
        fruit: ""
    }
}

updateFruit = async (event) => {
    await this.setState({fruit: event.target.value})
    console.log(`${this.state.name} selected ${this.state.fruit}`)
}

updateName = (event) => {
    this.setState({name: event.target.value})
}

render() {
    return (
        <div>
            <input id="name-input" value={this.state.name} onChange={this.updateName} />
            <select id="select-input" value={this.state.fruit} onChange={this.updateFruit}>
                <option id="apple">apple</option>
                <option id="banana">banana</option>
                <option id="peach">peach</option>
                <option id="strawberry">strawberry</option>
            </select>
        </div>
    );
}
}

export default Exercise2;