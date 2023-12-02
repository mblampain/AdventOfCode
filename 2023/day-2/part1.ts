import {parseFile, sum} from "../../helpers.ts";
import { parseSets, respectMaxCubes } from "./helpers.ts";

const rawLines = parseFile('./part1.txt');
const puzzleLines = parseFile('./raw.txt');

export const act = (line: string): number => {
    const gameNumber = parseInt(line.split(':')[0].split(' ')[1], 10);
    const sets = parseSets(line);
    let isGameValid = true;

    sets.forEach(set => {
        set.forEach(([num, color]) => {
            if (!respectMaxCubes(num, color)) {
                isGameValid = false;
            }
        })
    });
    return isGameValid ? gameNumber : 0;
};

export const solve = (raw: string[]) => sum(raw.map(line => act(line)))

console.log('part 1 solutions:', solve(rawLines));