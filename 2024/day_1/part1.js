// https://adventofcode.com/2024/day/1
import { inputList } from '../import-input.js'

const {left, right} = await inputList("day_1/input.txt")

const sortSmallestToBiggest = (a, b) => a - b
const totalDistance = (left, right) => {
    const sortedLeft = left.sort(sortSmallestToBiggest),
        sortedRight = right.sort(sortSmallestToBiggest)
    
    let totalDistance = 0
    let i = 0
    while (i < sortedLeft.length && i < sortedRight.length) {
        totalDistance += Math.abs(sortedLeft[i] - sortedRight[i]);
        i++;
    }
    
    return totalDistance
}

console.log(totalDistance(left, right))