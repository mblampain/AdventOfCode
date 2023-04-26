import { solve } from "./index";

it.each`
  input       | result
  ${"2x3x4"}  | ${58}
  ${"1x1x10"} | ${43}
`("$input should return $result", ({ input, result }) => {
  const out = solve(input)[0];
  expect(out).toBe(result);
});

it.each`
  input       | result
  ${"2x3x4"}  | ${34}
  ${"1x1x10"} | ${14}
`("$input should return $result", ({ input, result }) => {
  const out = solve(input)[1];
  expect(out).toBe(result);
});
