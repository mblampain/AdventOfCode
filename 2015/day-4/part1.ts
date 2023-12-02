import {parseFile, sum} from "../../helpers.ts";
import md5 from "md5";

const rawLines = parseFile('./part1.txt');
const puzzleLines = parseFile('./raw.txt');

const startsWithXZeroes = (hash: string, x: number) =>
    [...hash.slice(0, x)].every((c) => c === "0");

export const act = (line: string, numberOfZ: number): number => {
    let hash: string = "";
    let nbZ = 0;
    do {
        nbZ++;
        hash = md5(line.concat(nbZ.toString()));
    } while (!startsWithXZeroes(hash, numberOfZ));
    return nbZ;
};

export const solve = (raw: string[]) => raw.map(line => act(line, 5))

console.log('part 1 solutions:', solve(rawLines));