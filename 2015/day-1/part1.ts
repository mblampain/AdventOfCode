import {parseFile, sum} from "../../helpers.ts";

const rawLines = parseFile('./part1.txt');
const puzzleLines = parseFile('./raw.txt');

export const act = (line: string): number => {
    let floor = 0;
    for (let char of line) {
        if (char === '(') {
            floor++;
        } else {
            floor--;
        }
    }
    return floor;
};

export const solve = (raw: string[]) => raw.map(line => act(line))

console.log('part 1 solutions:', solve(rawLines));