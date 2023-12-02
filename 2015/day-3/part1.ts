import {parseFile, sum} from "../../helpers.ts";

const rawLines = parseFile('./part1.txt');
const puzzleLines = parseFile('./raw.txt');

export enum Directions {
    NORTH = "^",
    SOUTH = "v",
    WEST = "<",
    EAST = ">",
}

export const act = (line: string): number => {
    let visitedHouses = 1;
    let globalMap: [number, number] = [0, 0];
    const visitedGlobalMap: [number, number][] = [[...globalMap]];

    for (let step of line as unknown as Directions[]) {
        switch (step) {
            case Directions.NORTH:
                globalMap[0]++;
                break;
            case Directions.SOUTH:
                globalMap[0]--;
                break;
            case Directions.WEST:
                globalMap[1]--;
                break;
            case Directions.EAST:
                globalMap[1]++;
                break;
        }

        if (
            !visitedGlobalMap.some(
                (map) => map[0] === globalMap[0] && map[1] === globalMap[1]
                )
                ) {
            visitedHouses++;
            visitedGlobalMap.push([...globalMap]);
        }
    }
    return visitedHouses;
};

export const solve = (raw: string[]) => raw.map(line => act(line))

console.log('part 1 solutions:', solve(rawLines));