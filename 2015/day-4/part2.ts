import {parseFile, sum} from "../../helpers.ts";
import { act as part1 } from './part1.ts'
const rawLines = parseFile('./part2.txt');
const puzzleLines = parseFile('./raw.txt');

export const solve = (raw: string[]) => raw.map(line => part1(line,6))

console.log('part 2 solutions:', solve(rawLines));