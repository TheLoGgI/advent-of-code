const path = "day_4/input.txt";
const file = Bun.file(path);
const content = await file.text();

const findXmas = (input) => {
    const globalRegex = /XMAS|SANX/g;
    const lines = input.split('\n');

    let timesOfXmas = 0;
    for (let i = 0; i < lines.length -1; i++) {
        const line = lines[i];
        console.log('i: ', i);

        for (let j = 0; j < line.length; j++) {
            const letter = line[j];
            
            
        }



        
    }

    return timesOfXmas



}

const testInput = `
MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`

console.log(findXmas(testInput));