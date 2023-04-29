import { solve } from './index';

it.each`
  input       | result
  ${">"}  | ${2}
  ${"^"}  | ${2}
  ${"<"}  | ${2}
  ${"v"}  | ${2}
  ${"^v"} | ${2}
`("$input should return $result", ({ input, result }) => {
  const out = solve(input)[0];
  expect(out).toBe(result);
});

it.each`
  input       | result
  ${">"}  | ${2}
  ${"^>v<"} | ${4}
  ${"^v^v^v^v^v"} | ${2}
`("$input should return $result", ({ input, result }) => {
    const out = solve(input)[0];
    expect(out).toBe(result);
});

it.each`
  input       | result
  ${"^v"}  | ${3}
  ${"^>v<"} | ${3}
  ${"^v^v^v^v^v"} | ${11}
`("$input should return $result", ({ input, result }) => {
    const out = solve(input)[1];
    expect(out).toBe(result);
});