import {parseFile, sum} from "../../helpers.ts";
import { Directions } from "./part1.ts";

const rawLines = parseFile('./part2.txt');
const puzzleLines = parseFile('./raw.txt');

export const act = (line: string): number => {
    let globalMap: [number, number] = [0, 0];

    let visitedNextYearHouses = 1;
    let santaMap: [number, number] = [0, 0];
    let roboMap: [number, number] = [0, 0];
    const visitedNextYearMap: [number, number][] = [[...globalMap]];
    for (let i = 0; i < line.length; i++) {
        const step = line[i] as Directions;
        const nextYearMap = i % 2 ? santaMap : roboMap;
        switch (step) {
            case Directions.NORTH:
                nextYearMap[0]++;
                break;
            case Directions.SOUTH:
                nextYearMap[0]--;
                break;
            case Directions.WEST:
                nextYearMap[1]--;
                break;
            case Directions.EAST:
                nextYearMap[1]++;
                break;
        }

        if (
            !visitedNextYearMap.some(
                (map) => map[0] === nextYearMap[0] && map[1] === nextYearMap[1]
            )
        ) {
            visitedNextYearHouses++;
            visitedNextYearMap.push([...nextYearMap]);
        }
    }
    return visitedNextYearHouses;
};

export const solve = (raw: string[]) => raw.map(line => act(line));

console.log('part 2 solutions:', solve(rawLines));