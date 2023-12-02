import {parseFile, sum} from "../../helpers.ts";

const rawLines = parseFile('./part2.txt');
const puzzleLines = parseFile('./raw.txt');

export const act = (line: string): number => {
    const [length, width, height] = line
        .split("x")
        .map((n: string) => parseInt(n));
    const lw = length * width;
    const wh = width * height;
    const hl = height * length;

    const ribbonBow = length * width * height;
    const perimeter1 = 2 * (height + width);
    const perimeter2 = 2 * (length + width);
    const perimeter3 = 2 * (length + height);
    const ribbonPresent = Math.min(perimeter1, perimeter2, perimeter3);
    return ribbonBow + ribbonPresent;
};

export const solve = (raw: string[]) => sum(raw.map(line => act(line)))

console.log('part 2 solutions:', solve(rawLines));