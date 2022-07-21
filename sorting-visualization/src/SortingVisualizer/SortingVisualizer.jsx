import React, { useState, useEffect } from 'react';
import { getMergeSortAnimations } from './Algorithms/mergeSort';
import Body from './Body/Body';
import './Body/Body.css'
import './SortingVisualizer.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'royalblue';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

const SortingVisualizer = () => {
    const [array, setArray] = useState([]);

    // https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
    useEffect(() => {
        generateArray();
    }, [])

    const generateArray = () => {
        setArray(Array.from({ length: 100 }, () => Math.floor(Math.random() * (500 - 3 + 1) + 3)))
    }

    const mergeSort = () => {
        const animations = getMergeSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    const quickSort = () => {

    }

    return (
        <div>
            <div className='nav-bar'>
                <button onClick={() => generateArray()}>Generate New Array</button>
                <button onClick={() => mergeSort()}>Merge Sort</button>
                <button >Quick Sort</button>
            </div>
            <Body array={array}></Body>
        </div>
    );
};

export default SortingVisualizer