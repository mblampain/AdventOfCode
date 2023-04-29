import { readFileSync } from "node:fs";
import md5 from "md5";

const startsWithXZeroes = (hash: string, x: number) =>
  [...hash.slice(0, x)].every((c) => c === "0");

export const solve = (input: string): [number, number] => {
  let hash: string = "";
  let fiveZ = 0;
  do {
    fiveZ++;
    hash = md5(input.concat(fiveZ.toString()));
  } while (!startsWithXZeroes(hash, 5));
  let sixZ = 0;
  do {
    sixZ++;
    hash = md5(input.concat(sixZ.toString()));
  } while (!startsWithXZeroes(hash, 6));
  return [fiveZ, sixZ];
};

const exec = () => {
  const input: string = readFileSync("./input.txt", "utf-8");
  const result = solve(input);
  console.log("The final result is : ");
  console.log(result);
};

exec();
