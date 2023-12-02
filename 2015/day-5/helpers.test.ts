import {describe, test, expect} from 'bun:test'

import {
    atLeastThreeVowels,
    containsForbiddenStrings,
    containsMirrorLetters,
    doubleLetters,
    isNiceStr,
    isNiceStrV2,
    isPairAppearTwice,
} from "./helpers.ts";

describe("atLeastThreeVowels", () => {
    test.each([
        {input: 'abc', result: false},
        {input: 'aei', result: true},
        {input: 'xazegov', result: true},
        {input: 'aeiouaeiouaeiou', result: true},
        ])("$input should return $result", ({input, result}) => {
            expect(atLeastThreeVowels(input)).toBe(result);
        });
});

describe("doubleLetters", () => {
    test.each([
        {input: 'abc', result: false},
        {input: 'xx', result: true},
        {input: 'abcdde', result: true},
        {input: 'aabbccdd', result: true},
        ])("$input should return $result", ({input, result}) => {
            expect(doubleLetters(input)).toBe(result);
        });
});

describe("forbiddenStrings", () => {
    test.each([
        {input: "aaa", result: false},
        {input: "abc", result: true},
        {input: "cde", result: true},
        {input: "ppqrs", result: true},
        {input: "xyz", result: true},
        ])("$input should return $result", ({input, result}) => {
            expect(containsForbiddenStrings(input)).toBe(result);
        });
});

describe("isNiceStr", () => {
    test.each([
        {input: "ugknbfddgicrmopn", result: true},
        {input: "aaa", result: true},
        {input: "jchzalrnumimnmhp", result: false},
        {input: "haegwjzuvuyypxyu", result: false},
        {input: "dvszwmarrgswjxmb", result: false},
        ])("$input should return $result", ({input, result}) => {
            expect(isNiceStr(input)).toBe(result);
        });
});

describe("isPairAppearTwice", () => {
    test.each([
        {input: "aabc", result: false},
        {input: "xyxy", result: true},
        {input: "aabcdefgfg", result: true},
        ])("$input should return $result", ({input, result}) => {
            expect(isPairAppearTwice(input)).toBe(result);
        });
});

describe("containsMirrorLetters", () => {
    test.each([
        {input: "abc", result: false},
        {input: "xyx", result: true},
        {input: "abcdefeghi", result: true},
        {input: "aaa", result: true},
        ])("$input should return $result", ({input, result}) => {
            expect(containsMirrorLetters(input)).toBe(result);
        });
});

describe("isNiceStrV2", () => {
    test.each([
        {input: "qjhvhtzxzqqjkmpb", result: true},
        {input: "xxyxx", result: true},
        {input: "uurcxstgmygtbstg", result: false},
        {input: "ieodomkazucvgmuy", result: false},
        ])("$input should return $result", ({input, result}) => {
            expect(isNiceStrV2(input)).toBe(result);
        });
});
