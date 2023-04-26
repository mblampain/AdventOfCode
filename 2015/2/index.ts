import { readFileSync } from "node:fs";

export const solve = (input: string): [number, number] => {
  const [length, width, height] = input
    .split("x")
    .map((n: string) => parseInt(n));
  const lw = length * width;
  const wh = width * height;
  const hl = height * length;

  const smallestSide = Math.min(lw, wh, hl);

  const surface = 2 * lw + 2 * wh + 2 * hl;
  const sqrtFeet = surface + smallestSide;

  const ribbonBow = length * width * height;
  const perimeter1 = 2 * (height + width);
  const perimeter2 = 2 * (length + width);
  const perimeter3 = 2 * (length + height);
  const ribbonPresent = Math.min(perimeter1, perimeter2, perimeter3);
  const ribbonTotal = ribbonBow + ribbonPresent;
  return [sqrtFeet, ribbonTotal];
};

const exec = () => {
  const input: string = readFileSync("./input.txt", "utf-8");
  let total = [0, 0];
  input.split("\n").forEach((row) => {
    total[0] += solve(row)[0];
    total[1] += solve(row)[1];
  });

  console.log("The final result is : ");
  console.log(total);
};

exec();
