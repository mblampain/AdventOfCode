import {parseFile, sum} from "../helpers.ts";

const rawLines = parseFile('./part2.txt');
const puzzleLines = parseFile('./raw.txt');

export const act = (line: string): number => 0;

export const solve = (raw: string[]) => sum(raw.map(line => act(line)))

console.log('part 2 solutions:', solve(rawLines));