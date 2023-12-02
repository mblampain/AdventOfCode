import {parseFile, sum} from "../../helpers.ts";
import { Colors, parseSets } from "./helpers.ts";

const rawLines = parseFile('./part2.txt');
const puzzleLines = parseFile('./raw.txt');

export const act = (line: string): number => {
    const sets = parseSets(line);

    const min: Record<Colors, number> = {
        [Colors.Red]: 0,
        [Colors.Green]: 0,
        [Colors.Blue]: 0,
    }
    for (let set of sets) {
        for (let [num, color] of set) {
            if (num > min[color]) {
                min[color] = num;
            }
        }
    }
    
    return Object.values(min).reduce((prev, current) => prev * current, 1);
};

export const solve = (raw: string[]) => sum(raw.map(line => act(line)))

console.log('part 2 solutions:', solve(rawLines));