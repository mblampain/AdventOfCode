import { readFileSync } from "node:fs";

export const parseFile = (filename: string): string[] => readFileSync(filename, "utf-8").split("\n").filter(Boolean);

export const sum = (map: number[]) => map.reduce((prev, curr) => prev+curr, 0);