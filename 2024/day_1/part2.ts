// https://adventofcode.com/2024/day/1
import { inputList } from './import-input.js'

const {left, right} = await inputList("day_2/input.txt")

const similarityScore = (left, right) => {
    const indexList = new Map()
    
    for (let i = 0; i < right.length; i++) {
        const element = right[i];
        if (indexList.has(element)) {
            indexList.set(element, indexList.get(element) + 1)
        } else {
            indexList.set(element, 1)
        }
    }
    indexList.forEach((value, key) => {
        if (value === 0) indexList.delete(key)
    })

    let similarityScore = 0
    for (let i = 0; i < left.length; i++) {
        const element = left[i];
        if (indexList.has(element)) {
            similarityScore += element * indexList.get(element) 
            // console.log('similarityScore: ', element, indexList.get(element) , similarityScore);
        } 
    }

    return similarityScore

}

console.log(similarityScore(left, right))