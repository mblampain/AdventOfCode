import { readFileSync } from 'node:fs';


export const solve =(input: string) => {
    return 0;
}

const exec = () => {
    const input: string = readFileSync('./input.txt', 'utf-8');
    const result = solve(input);
    console.log('The final result is : ');
    console.log(result);
}

exec();
