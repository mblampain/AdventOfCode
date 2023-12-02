import {parseFile, sum} from "../../helpers.ts";

const rawLines = parseFile('./part1.txt');
const puzzleLines = parseFile('./raw.txt');

const symbols = ['']
export const act = (grid: string[]): number => {
    
    
    
    console.log(grid.map(row => row.match(/[^.\d]/iu)))
    
    return 0;
};

export const solve = (raw: string[]) => act(raw)

console.log('part 1 solutions:', solve(rawLines));