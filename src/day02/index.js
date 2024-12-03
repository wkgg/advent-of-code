import run from "aocrunner";

const parseInput = (rawInput) => rawInput.split('\n');

const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  console.log('input: ', input)
  let sum = 0
  for (let i = 0; i < input.length; i++) {
    const line = input[i].split(' ').map(Number)
    let increase;
    if (line[1] > line[0]) {
      increase = true
    }else {
      increase = false
    }
    let safe = true
    for (let j = 0; j < line.length; j++) {
      if(line[j+1] <= line[j] && increase) {
        safe = false
        break
      }
      if(line[j+1] >= line[j] && !increase) {
        safe = false
        break
      }
      if(Math.abs(line[j+1] - line[j]) < 1 || Math.abs(line[j+1] - line[j]) > 3) {
        safe = false
        break
      }
    }
    if (safe) {
      sum += 1
    }
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
