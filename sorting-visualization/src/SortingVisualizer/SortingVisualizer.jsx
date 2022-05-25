import React from 'react';
import './SortingVisualizer.css';

class SortingVisualizer extends React.Component {
    // Constructor and initializes attributes.
    // We only have one array as the only attribute.     
    constructor(props) {
        super(props);       // React.Component is required when using class-based component so we
        // have to call parent constructor because our class is a a derived class.

        // Attribute of our class which is an object that contains an array.                    
        this.state = {
            array: [],
        };
    }

    resetArray() {
        const temp = [];
        for (let i = 0; i < 100; i++) {
            temp.push(randomIntFrom(5, 1000));
        }
    }

    render() {
        return <div></div>
    }
}

// Return a random Int from interval (min, max).
function randomIntFrom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer