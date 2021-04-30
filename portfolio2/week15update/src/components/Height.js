import React, {Component} from 'react';
// Defines the class value as Height, as well as extends it to Component
class Height extends Component {
    constructor (props) {
        super(props);
        this.state = {
            // Default value of weight is set to the numerical value of zero.
            feet: 0,
            inches: 0
        };
    };

    render () {
        return (
            <div>
                <h2>Current Height: {this.state.feet}'{this.state.inches} </h2>
                {/*Lists options to adjust height value, either by increasing or decreasing by x*/}
                <button onClick={() => this.setState({feet: this.state.feet + 1})}>+1 Foot</button>
                <button onClick={() => this.setState({feet: this.state.feet - 1})}>-1 Foot</button>
                <button onClick={() => this.setState({inches: this.state.inches + 1})}>+1 Inch</button>
                <button onClick={() => this.setState({inches: this.state.inches - 1})}>-1 Inch</button>
                {/*Resets the height value*/}
                <button onClick={() => this.setState({feet: 0, inches: 0})}>Reset</button>
            </div>
        )
    }
}



export default Height;