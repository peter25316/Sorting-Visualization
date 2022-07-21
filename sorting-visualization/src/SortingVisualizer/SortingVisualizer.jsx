import React, { useState, useEffect } from 'react';
import { getMergeSortSwapRecord } from './Algorithms/mergeSort';
import { mergeSortAnimations } from './Algorithms/mergeSortAnimation';
import Body from './Body/Body';
import './Body/Body.css'
import './SortingVisualizer.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 3;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'royalblue';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

const SortingVisualizer = () => {
    const [array, setArray] = useState([]);

    useEffect(() => {
        generateArray();
    }, [])

    // https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
    const generateArray = () => {
        setArray(Array.from({ length: 100 }, () => Math.floor(Math.random() * (500 - 3 + 1) + 3)))
    }

    const mergeSort = () => {
        const swapRecord = getMergeSortSwapRecord(array);
        mergeSortAnimations(swapRecord, ANIMATION_SPEED_MS, PRIMARY_COLOR, SECONDARY_COLOR);
    }

    const quickSort = () => {

    }

    return (
        <div>
            <div className='nav-bar'>
                <button onClick={() => generateArray()}>Generate New Array</button>
                <button onClick={() => mergeSort()}>Merge Sort</button>
                <button onClick={() => quickSort()}>Quick Sort</button>
            </div>
            <Body array={array}></Body>
        </div>
    );
};

export default SortingVisualizer