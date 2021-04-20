import React, {Component} from 'react';
// Defines the class value as Weight, as well as extends it to Component
class Weight extends Component {
    constructor (props) {
        super(props);
        this.state = {
            // Default value of weight is set to the numerical value of zero.
            weight: 0
        };
    };

    render () {
        return (
            <div>
                <h2>Current Weight (lbs): {this.state.weight}</h2>
                {/*Input value for the weight*/}
                <input type="text" value={this.state.weight}/><br />
                {/*Lists options to adjust weight value, either by increasing or decreasing by x*/}
                <button onClick={() => this.setState({weight: this.state.weight + 1})}>+1 Pound</button>
                <button onClick={() => this.setState({weight: this.state.weight - 1})}>-1 Pound</button>
                <button onClick={() => this.setState({weight: this.state.weight + 25})}>+25 Pounds</button>
                <button onClick={() => this.setState({weight: this.state.weight - 25})}>-25 Pounds</button>
                <button onClick={() => this.setState({weight: this.state.weight + 50})}>+50 Pounds</button>
                <button onClick={() => this.setState({weight: this.state.weight - 50})}>-50 Pounds</button>
                {/*Resets the weight value*/}
                <button onClick={() => this.setState({weight: 0})}>Reset</button>
            </div>
        )
    }
}



export default Weight;