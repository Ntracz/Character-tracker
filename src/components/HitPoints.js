import React, { Component } from "react";
import './HitPoints.css';

class HitPoints extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: props.starting
        }
    }

    increase() {
        this.setState( { number: this.state.number + 1} )
    }

    decrease() {
        this.setState( { number: this.state.number -1 } )
    }

    componentDidMount() {
        console.log('HP ready!')
    }

    componentDidUpdate() {
        console.log("HP updated")
    }

    render () {
        return (
            <div className="hitPoints">
                <p>Max HP: {this.state.number}</p>
                <p>Current HP: {this.state.number} </p>
                <button onClick={ () => this.increase() }>HP +</button> 
                <button onClick={ () => this.decrease() }>HP -</button>
            </div>
        );
    }
}

export default HitPoints;