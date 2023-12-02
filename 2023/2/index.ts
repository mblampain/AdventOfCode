import {readFileSync} from "node:fs";

enum Colors {
    Red = 'red',
    Green = 'green',
    Blue = 'blue',
}

const MAX_RED = 12;
const MAX_GREEN = 13;
const MAX_BLUE = 14;

const respectMaxCubes = (num: number, color: Colors) => {
    switch (color) {
        case Colors.Red:
            return num <= MAX_RED;
        case Colors.Green:
            return num <= MAX_GREEN;
        case Colors.Blue:
            return num <= MAX_BLUE;
    }
}

const parseSets = (row: string): [number, Colors][][] => {
    return row.split(':')[1]
        .split(';')
        .map(set => set.split(',')
            .map(cubes => {
                const coloredCube = cubes.trim().split(' ')
                return [parseInt(coloredCube[0], 10), coloredCube[1] as Colors];
            }))
}

export const solve1 = (input: string): number => {
    const gameNumber = parseInt(input.split(':')[0].split(' ')[1], 10);
    const sets = parseSets(input);
    let isGameValid = true;

    sets.forEach(set => {
        set.forEach(([num, color]) => {
            if (!respectMaxCubes(num, color)) {
                isGameValid = false;
            }
        })
    });
    return isGameValid ? gameNumber : 0;
};

export const solve2 = (input: string): number => {
    const sets = parseSets(input);

    const min: Record<Colors, number> = {
        [Colors.Red]: 0,
        [Colors.Green]: 0,
        [Colors.Blue]: 0,
    }
    for (let set of sets) {
        for (let [num, color] of set) {
            if (num > min[color]) {
                min[color] = num;
            }
        }
    }

    console.log('min', min)

    return Object.values(min).reduce((prev, current) => prev * current, 1);
};

const sumSolve = (input: string, fn: Function) => {
    return input
        .split('\n')
        .map(row => fn(row))
        .reduce((prev, current) => prev + current, 0);
}

const exec = () => {
    const input: string = readFileSync("./input.txt", "utf-8");
    const result1 = sumSolve(input, solve1);
    const result2 = sumSolve(input, solve2);
    console.log("The final result is : ");
    console.log(result1);
    console.log(result2);
};

exec();