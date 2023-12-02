export enum Colors {
    Red = 'red',
    Green = 'green',
    Blue = 'blue',
}

const MAX_RED = 12;
const MAX_GREEN = 13;
const MAX_BLUE = 14;

export const respectMaxCubes = (num: number, color: Colors) => {
    switch (color) {
        case Colors.Red:
            return num <= MAX_RED;
        case Colors.Green:
            return num <= MAX_GREEN;
        case Colors.Blue:
            return num <= MAX_BLUE;
    }
}

export const parseSets = (row: string): [number, Colors][][] => {
    return row.split(':')[1]
        .split(';')
        .map(set => set.split(',')
            .map(cubes => {
                const coloredCube = cubes.trim().split(' ')
                return [parseInt(coloredCube[0], 10), coloredCube[1] as Colors];
            }))
}