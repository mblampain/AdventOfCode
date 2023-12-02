import { parseFile, sum } from "../../helpers.ts";

const rawLines = parseFile('./part1.txt');
const puzzleLines = parseFile('./raw.txt');

export const act = (line: string) :number => {
    let num1 = '';
    let num2 = '';
    let index = 0;
    
    do {
        const reversedIndex = line.length - index;
        if(+line.charAt(index)! && !num1) {
            num1 = line.charAt(index)!;
        }
        if(+line.charAt(reversedIndex) && !num2) {
            num2 = line.charAt(reversedIndex);
        }
        index++;
    } while(!num1 || !num2);
    
    return parseInt(num1.concat(num2), 10)
};

export const solve = (raw: string[]) => sum(raw.map(line => act(line)))

console.log('part 1 solutions:', solve(rawLines));