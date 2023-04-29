import {
  atLeastThreeVowels,
  containsForbiddenStrings,
  containsMirrorLetters,
  doubleLetters,
  isNiceStr,
  isNiceStrV2,
  isPairAppearTwice,
} from "./index";

describe("atLeastThreeVowels", () => {
  it.each`
    input                | result
    ${"abc"}             | ${false}
    ${"aei"}             | ${true}
    ${"xazegov"}         | ${true}
    ${"aeiouaeiouaeiou"} | ${true}
  `("$input should return $result", ({ input, result }) => {
    expect(atLeastThreeVowels(input)).toBe(result);
  });
});

describe("doubleLetters", () => {
  it.each`
    input         | result
    ${"abc"}      | ${false}
    ${"xx"}       | ${true}
    ${"abcdde"}   | ${true}
    ${"aabbccdd"} | ${true}
  `("$input should return $result", ({ input, result }) => {
    expect(doubleLetters(input)).toBe(result);
  });
});

describe("forbiddenStrings", () => {
  it.each`
    input      | result
    ${"aaa"}   | ${false}
    ${"abc"}   | ${true}
    ${"cde"}   | ${true}
    ${"ppqrs"} | ${true}
    ${"xyz"}   | ${true}
  `("$input should return $result", ({ input, result }) => {
    expect(containsForbiddenStrings(input)).toBe(result);
  });
});

describe("isNiceStr", () => {
  it.each`
    input                 | result
    ${"ugknbfddgicrmopn"} | ${true}
    ${"aaa"}              | ${true}
    ${"jchzalrnumimnmhp"} | ${false}
    ${"haegwjzuvuyypxyu"} | ${false}
    ${"dvszwmarrgswjxmb"} | ${false}
  `("$input should return $result", ({ input, result }) => {
    expect(isNiceStr(input)).toBe(result);
  });
});

describe("isPairAppearTwice", () => {
  it.each`
    input           | result
    ${"aabc"}       | ${false}
    ${"xyxy"}       | ${true}
    ${"aabcdefgfg"} | ${true}
  `("$input should return $result", ({ input, result }) => {
    expect(isPairAppearTwice(input)).toBe(result);
  });
});

describe("containsMirrorLetters", () => {
  it.each`
    input           | result
    ${"abc"}        | ${false}
    ${"xyx"}        | ${true}
    ${"abcdefeghi"} | ${true}
    ${"aaa"}        | ${true}
  `("$input should return $result", ({ input, result }) => {
    expect(containsMirrorLetters(input)).toBe(result);
  });
});

describe("isNiceStrV2", () => {
  it.each`
    input                 | result
    ${"qjhvhtzxzqqjkmpb"} | ${true}
    ${"xxyxx"}            | ${true}
    ${"uurcxstgmygtbstg"} | ${false}
    ${"ieodomkazucvgmuy"} | ${false}
  `("$input should return $result", ({ input, result }) => {
    expect(isNiceStrV2(input)).toBe(result);
  });
});
