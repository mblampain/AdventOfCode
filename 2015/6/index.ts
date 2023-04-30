import {readFileSync} from "node:fs";

const initGrid = (initial: any): any[][] => {
  const grid = [];
  for (let i = 0; i < 1000; i++) {
    let array = []
    for (let j = 0; j < 1000; j++) {
      array.push(initial);
    }
    grid.push([...array]);
  }
  return grid;
}

const extractXY = (str: string): number[] => str.split(',').map((nb: string) => parseInt(nb));

const traverseGrid = (
  grid: any[][], from: number[], to: number[], act: (previousValue?: any) => any
) => {
  const [yStart, xStart] = from;
  const [yEnd, xEnd] = to;

  for (let i = xStart; i <= xEnd; i++) {
    for (let j = yStart; j <= yEnd; j++) {
      grid[i][j] = act(grid[i][j]);
    }
  }
}

const switchLight = (
  grid: boolean[][], position: boolean, from: number[], to: number[]
) => {
  traverseGrid(grid, from, to, () => position);
}

const toggleLight = (
  grid: boolean[][], from: number[], to: number[],
) => {
  traverseGrid(grid, from, to, (previousValue) => !previousValue);
}

const increaseBrightness = (
  grid: number[][], from: number[], to: number[], intensity: number,
) => {
  traverseGrid(grid, from, to, (previousValue) => previousValue + intensity);
}

const decreaseBrightness = (
  grid: number[][], from: number[], to: number[],
) => {
  traverseGrid(
    grid,
    from,
    to,
    (previousValue) => previousValue === 0 ? 0 : previousValue - 1
  )
}

export const solve = (input: string[]): [number, number] => {
  const grid: boolean[][] = initGrid(false);
  const grid2: number[][] = initGrid(0);
  input.forEach(row => {
    const instructions = row.split(' ');
    if (instructions.length === 5) {
      const [_, position, start, __, end] = instructions;
      const order = position === 'on';
      const from = extractXY(start);
      const to = extractXY(end);
      switchLight(grid, order, from, to);
      if (order) {
        increaseBrightness(grid2, from, to, 1);
      } else {
        decreaseBrightness(grid2, from, to);
      }
    } else {
      const [_, start, __, end] = instructions;
      const from = extractXY(start);
      const to = extractXY(end);
      toggleLight(grid, from, to);
      increaseBrightness(grid2, from, to, 2);
    }
  })

  let littedLight = 0;
  grid.forEach((row) => {
    row.forEach(isColLitted => isColLitted && littedLight++);
  })
  let finalBrightness = grid2
    .flatMap(row => row.reduce((colSum, val) => colSum + val))
    .reduce((rowSum, val) => rowSum + val);

  return [littedLight, finalBrightness];
};

const exec = () => {
  const input: string = readFileSync("./input.txt", "utf-8");
  const result = solve(input.split('\n'));
  console.log("The final result is : ");
  console.log(result);
};

exec();
