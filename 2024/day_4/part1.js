const path = "day_4/input.txt";
const file = Bun.file(path);
const content = await file.text();

const findXmas = (input) => {
    const globalRegex = /XMAS|SANX/g;
    const lines = input.split('\n');

    let timesOfXmas = 0;
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // Horizontally
        const regex = /XMAS/g;
        const regexReversed = /SAMX/g;
        const matches = line.match(regex);
        const matchesReversed = line.match(regexReversed);
        timesOfXmas += (matches ?? []).length + (matchesReversed ?? []).length;

        for (let j = 0; j < line.length; j++) {
            const letter = line[j];
            const totalLength = line.length;
            console.group('letter: ', letter, i, j);
            
            if (letter === 'X') {

                // Vertically
                // let verticalLines = "X"
                // // Check downwards
                // if (i < lines.length - 4) {
                //     verticalLines += lines[i+1][j];
                //     verticalLines += lines[i+2][j];
                //     verticalLines += lines[i+3][j];
                // }

                // // Check upwards
                // if (i > 2) {
                //     verticalLines += "X"
                //     verticalLines += lines[i-1][j];
                //     verticalLines += lines[i-2][j];
                //     verticalLines += lines[i-3][j];
                // }
                // const verticallyMatches = verticalLines.match(globalRegex);
                // if (verticallyMatches !== null) timesOfXmas += verticallyMatches.length

                // Diagonally
                let diagonalLines = "X"
                // Check downwards
                if (i < lines.length - 4 && j + 3 <= totalLength) {
                    // console.log("down right");
                    diagonalLines += lines[i+1][j+1];
                    diagonalLines += lines[i+2][j+2];
                    diagonalLines += lines[i+3][j+3];

                    // console.log("down left", i, j);
                    diagonalLines += "X"
                    diagonalLines += lines[i+1][j-1];
                    diagonalLines += lines[i+2][j-2];
                    diagonalLines += lines[i+3][j-3];
                }

                // Check upwards
                if (i > 2) {
                    diagonalLines += "X"
                    diagonalLines += lines[i-1][j-1];
                    diagonalLines += lines[i-2][j-2];
                    diagonalLines += lines[i-3][j-3];

                    diagonalLines += "X"
                    diagonalLines += lines[i-1][j+1];
                    diagonalLines += lines[i-2][j+2];
                    diagonalLines += lines[i-3][j+3];
                }
                const diagonalMatches = diagonalLines.match(globalRegex);
                if (diagonalMatches !== null) timesOfXmas += diagonalMatches.length


            }

            console.groupEnd();

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