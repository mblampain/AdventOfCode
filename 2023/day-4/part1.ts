import {parseFile, sum} from "../../helpers.ts";

const rawLines = parseFile('./part1.txt');
const puzzleLines = parseFile('./raw.txt');

export const act = (line: string): number => {
    const card = line.split(':')[1];
    const [winNums, myNums] = card.split(' | ').map(num => num.trim().split(/\s+/));
    const winSet = new Set(winNums)
    const goodNumbers = myNums.filter(num => winSet.has(num));
    
    return goodNumbers.length === 0 ? 0 : Math.pow(2, goodNumbers.length - 1);
};

export const solve = (raw: string[]) => sum(raw.map(line => act(line)))

console.log('part 1 solutions:', solve(puzzleLines));