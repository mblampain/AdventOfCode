import { readFileSync } from "node:fs";

export const solve = (input: string): [number, number] => {
  let floor = 0;
  let position = -1;
  for (let i = 0; i <= input.length; i++) {
    let char = input.charAt(i);
    if (char === "(") {
      floor++;
    }
    if (char === ")") {
      if (position === -1 && floor === 0) {
        position = i + 1;
      }
      floor--;
    }
  }
  return [floor, position];
};

const exec = () => {
  const input: string = readFileSync("./input.txt", "utf-8");
  const result = solve(input);
  console.log("The final result is : ");
  console.log(result);
};

exec();
