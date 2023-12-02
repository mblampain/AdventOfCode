import {parseFile, sum} from "../../helpers.ts";
import {isNiceStr} from "./helpers.ts";

const rawLines = parseFile('./part1.txt');
const puzzleLines = parseFile('./raw.txt');

export const act = (line: string): number => isNiceStr(line) ? 1 : 0;

export const solve = (raw: string[]) => sum(raw.map(line => act(line)))

console.log('part 1 solutions:', solve(rawLines));