import { readFileSync } from "node:fs";

enum Directions {
  NORTH = "^",
  SOUTH = "v",
  WEST = "<",
  EAST = ">",
}

export const solve = (input: string): [number, number] => {
  let visitedHouses = 1;
  let globalMap: [number, number] = [0, 0];
  const visitedGlobalMap: [number, number][] = [[...globalMap]];

  let visitedNextYearHouses = 1;
  let santaMap: [number, number] = [0, 0];
  let roboMap: [number, number] = [0, 0];
  const visitedNextYearMap: [number, number][] = [[...globalMap]];
  for (let i = 0; i < input.length; i++) {
    const step = input[i] as Directions;
    const nextYearMap = i % 2 ? santaMap : roboMap;
    switch (step) {
      case Directions.NORTH:
        globalMap[0]++;
        nextYearMap[0]++;
        break;
      case Directions.SOUTH:
        globalMap[0]--;
        nextYearMap[0]--;
        break;
      case Directions.WEST:
        globalMap[1]--;
        nextYearMap[1]--;
        break;
      case Directions.EAST:
        globalMap[1]++;
        nextYearMap[1]++;
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
    if (
      !visitedNextYearMap.some(
        (map) => map[0] === nextYearMap[0] && map[1] === nextYearMap[1]
      )
    ) {
      visitedNextYearHouses++;
      visitedNextYearMap.push([...nextYearMap]);
    }
  }

  return [visitedHouses, visitedNextYearHouses];
};

const exec = () => {
  const input: string = readFileSync("./input.txt", "utf-8");
  const result = solve(input);
  console.log("The final result is : ");
  console.log(result);
};

exec();
