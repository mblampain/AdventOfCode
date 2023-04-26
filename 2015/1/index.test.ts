import { solve } from "./index";

it.each`
  input        | result
  ${"(())"}    | ${0}
  ${"()()"}    | ${0}
  ${"((("}     | ${3}
  ${"(()(()("} | ${3}
  ${"))((((("} | ${3}
  ${"())"}     | ${-1}
  ${"))("}     | ${-1}
  ${")))"}     | ${-3}
  ${")())())"} | ${-3}
`("$input should return $result", ({ input, result }) => {
  const out = solve(input)[0];
  expect(out).toBe(result);
});

it.each`
  input      | result
  ${")"}     | ${1}
  ${"()())"} | ${5}
`("$input should return position $result", ({ input, result }) => {
  const out = solve(input)[1];
  expect(out).toBe(result);
});
