// const path = "day_1/indput.txt"
// const file = Bun.file(path);
// const content = await file.text();

// const lines = content.split(/\s{1-4}|\n/);

// const left = [], right = [];
// for (let i = 0; i < lines.length; i++) {
//     const line = lines[i];
//     const splitted = line.split('   ');
//     left.push(splitted[0]);
//     right.push(splitted[1]);
// }

export const inputList = async (path) => {
    const file = Bun.file(path);
    const content = await file.text();
    
    const lines = content.split(/\s{1-4}|\n/);
    
    const left = [], right = [];
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const splitted = line.split('   ');
        left.push(splitted[0]);
        right.push(splitted[1]);
    }
    
    return {left, right};
}