export const mergeSortAnimations = (swapRecord, ANIMATION_SPEED_MS, PRIMARY_COLOR, SECONDARY_COLOR) => {
    for (let i = 0; i < swapRecord.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
            const [barOneIdx, barTwoIdx] = swapRecord[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
        } else {
            setTimeout(() => {
                const [barOneIdx, newHeight] = swapRecord[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
        }
    }
}