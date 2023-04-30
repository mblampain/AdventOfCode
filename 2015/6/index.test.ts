import {solve} from "./index";

it.each`
  input  | result
  ${"turn on 0,0 through 1,0"} | ${2}
  ${"turn on 0,0 through 999,999"} | ${1000000}
  ${"toggle 0,0 through 999,0"} | ${1000}
`("$input should return $result", ({input, result}) => {
  const out = solve([input])[0];
  expect(out).toBe(result);
});

it.each`
  input  | result
  ${"turn on 0,0 through 0,0"} | ${1}
  ${"toggle 0,0 through 999,999"} | ${2000000}
`("$input should return $result", ({input, result}) => {
  const out = solve([input])[1];
  expect(out).toBe(result);
});
