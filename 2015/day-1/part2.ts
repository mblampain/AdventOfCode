import {parseFile, sum} from "../../helpers.ts";

const rawLines = parseFile('./part2.txt');
const puzzleLines = parseFile('./raw.txt');

export const act = (line: string): number => {
    let floor = 0;
    let position = -1;
    for (let i = 0; i <= line.length; i++) {
        let char = line.charAt(i);
        if (char === "(") {
            floor++;
        }
        if (char === ")") {
            if (position === -1 && floor === 0) {
                position = i + 1;
            }
            floor--;
        }
    }
    return position;
};

export const solve = (raw: string[]) => raw.map(line => act(line))

console.log('part 2 solutions:', solve(rawLines));