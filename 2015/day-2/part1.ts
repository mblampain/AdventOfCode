import {parseFile, sum} from "../../helpers.ts";

const rawLines = parseFile('./part1.txt');
const puzzleLines = parseFile('./raw.txt');

export const act = (line: string): number => {
    const [length, width, height] = line
        .split("x")
        .map((n: string) => parseInt(n));
    const lw = length * width;
    const wh = width * height;
    const hl = height * length;

    const smallestSide = Math.min(lw, wh, hl);
    const surface = 2 * lw + 2 * wh + 2 * hl;
    
    return surface + smallestSide;
};

export const solve = (raw: string[]) => sum(raw.map(line => act(line)))

console.log('part 1 solutions:', solve(rawLines));