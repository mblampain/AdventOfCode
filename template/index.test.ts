
it.each`
  input       | result
  ${"0"}  | ${0}
`("$input should return $result", ({ input, result }) => {
    const out = solve(input)[0];
    expect(out).toBe(result);
});

it.each`
  input       | result
  ${"0"}  | ${0}
`("$input should return $result", ({ input, result }) => {
    const out = solve(input)[1];
    expect(out).toBe(result);
});