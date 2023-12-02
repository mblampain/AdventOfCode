import {readFileSync} from "node:fs";

const numbers = {
  'zero' : 0,
  'one' : 1,
  'two' : 2,
  'three' : 3,
  'four' : 4,
  'five' : 5,
  'six' : 6,
  'seven' : 7,
  'eight' : 8,
  'nine' : 9,
} as const;

export const solve = (input: string): [number, number] => {
  let firstNum1 = '';
  let lastNum1 = '';
  let firstNum2 = '';
  let lastNum2 = '';
    let index = 0;
    
    let editedInput = `${input}`;
    
    // Replace string with real numbers;
  for (let [num, i] of Object.entries(numbers)) {
      editedInput = editedInput.replace(num, num[0] + i + num.at(-1));
    }
    
    do {
      const reversedIndex1 = input.length - index;
      const reversedIndex2 = editedInput.length - index;

      if (+input[index] && !firstNum1) {
        firstNum1 = input[index];
        }

      if (+input[reversedIndex1] && !lastNum1) {
        lastNum1 = input[reversedIndex1];
      }
      if (+editedInput[index] && !firstNum2) {
        firstNum2 = editedInput[index];
      }

      if (+editedInput[reversedIndex2] && !lastNum2) {
        lastNum2 = editedInput[reversedIndex2];
      }

        index++;
    } while (!firstNum1 || !lastNum1 || !firstNum2 || !lastNum2);

    const solution1 = parseInt(firstNum1.concat(lastNum1), 10);
    const solution2 = parseInt(firstNum2.concat(lastNum2), 10);

    return [solution1, solution2];
};

export const mapSolve = (input: string[]) => input.map(solve)

const exec = () => {
    const input: string = readFileSync("./input.txt", "utf-8");
    const computed = mapSolve(input.split("\n"));
    const result = computed.reduce((prev, current) => [prev[0] + current[0], prev[1] + current[1]], [0,0]);
    console.log("The final result is : ");
    console.log(result);
};

exec();
