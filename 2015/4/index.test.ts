import { solve } from "./index";
it.each`
  input        | result
  ${"abcdef"}  | ${609043}
  ${"pqrstuv"} | ${1048970}
`("$input should return $result", ({ input, result }) => {
  const out = solve(input)[0];
  expect(out).toBe(result);
});

it.skip.each`
  input  | result
  ${"0"} | ${0}
`("$input should return $result", ({ input, result }) => {
  const out = solve(input)[1];
  expect(out).toBe(result);
});
