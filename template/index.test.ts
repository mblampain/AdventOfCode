import { solve1, solve2 } from "./index";

it.each`
  input  | result
  ${"0"} | ${0}
`("$input should return $result", ({ input, result }) => {
  const out = solve1(input);
  expect(out).toBe(result);
});

it.each`
  input  | result
  ${"0"} | ${0}
`("$input should return $result", ({ input, result }) => {
  const out = solve2(input);
  expect(out).toBe(result);
});
