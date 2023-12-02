import {parseFile, sum} from "../../helpers.ts";
import {act as part1} from './part1.ts'

const rawLines = parseFile('./part2.txt');
const puzzleLines = parseFile('./raw.txt');

const digits = {
    'zero' : 0,
    'one' : 1,
    'two' : 2,
    'three' : 3,
    'four' : 4,
    'five' : 5,
    'six' : 6,
    'seven' : 7,
    'eight' : 8,
    'nine' : 9,
} as const;

export const act = (line: string): number => {
    let editedLine = line;
    for (let [num, index] of Object.entries(digits)) {
        editedLine = editedLine.replace(num, `${num[0]}${index}${num[num.length - 1]}`)
    }
    return part1(editedLine);
};

export const solve = (raw: string[]) => sum(raw.map(line => act(line)))

console.log('part 2 solutions:', solve(rawLines));