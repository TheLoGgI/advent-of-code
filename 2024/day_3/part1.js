
const path = "day_3/input.txt";
const file = Bun.file(path);
const content = await file.text();

const test = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))"
const test2 = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))"

const mullItOver = (input) => {
    const regex = /mul\((\d+),(\d+)\)|don't\(\)|do\(\)/g;
    const matches = input.match(regex);
    let skip = false
    const numbers = matches.map(match => {
        if (match === "do()") {
            skip = false;
            return [0,0];
        }
        if (skip || match === "don't()") {
            skip = true;
            return [0,0];
        }

        const [_, num1, num2] = match.match(/mul\((\d+),(\d+)\)/);
        return [parseInt(num1), parseInt(num2)];
    });
    return numbers.map(([num1, num2]) => num1 * num2).reduce((acc, curr) => acc + curr, 0);
}

console.log('Day 3 result: ', mullItOver(content));