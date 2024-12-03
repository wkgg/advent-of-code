import run from "aocrunner";

const parseInput = (rawInput) => rawInput;

const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  const reg1 = /mul\(\d{1,3},\d{1,3}\)/g;
  const corrupted = input.match(reg1);
  let sum = 0;
  const reg2 = /\d{1,3}/g;
  for (const item of corrupted) {
    const numbers = item.match(reg2);
    sum += numbers[0] * numbers[1];
  }
  return sum;
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);

  return;
};

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
