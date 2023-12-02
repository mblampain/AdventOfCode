import { solve } from "./index";

it.each`
  input  | result
  ${"1abc2"} | ${12}
  ${"pqr3stu8vwx"} | ${38}
  ${"a1b2c3d4e5f"} | ${15}
  ${"treb7uchet"} | ${77}
`("PART 1 : $input should return $result", ({ input, result }) => {
  const out = solve(input)[0];
  expect(out).toBe(result);
});

it.each`
  input  | result
  ${"two1nine"} | ${29}
  ${"eightwothree"} | ${83}
  ${"abcone2threexyz"} | ${13}
  ${"xtwone3four"} | ${24}
  ${"4nineeightseven2"} | ${42}
  ${"zoneight234"} | ${14}
  ${"7pqrstsixteen"} | ${76}
`("PART 2: $input should return $result", ({ input, result }) => {
  const out = solve(input)[1];
  expect(out).toBe(result);
});


