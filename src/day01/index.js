import run from "aocrunner";

const parseInput = (rawInput) => rawInput.split('\n');

const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < input.length; i++) {
    const [a, b] = input[i].split('   ');
    arr1.push(parseInt(a));
    arr2.push(parseInt(b));
  }
  const sortArr1 = arr1.sort((a, b) => a - b);
  const sortArr2 = arr2.sort((a, b) => a - b);
  let sum = 0
  for (let i = 0; i < sortArr1.length; i++) {
    sum += Math.abs(sortArr1[i] - sortArr2[i])
  }
  return sum;
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < input.length; i++) {
    const [a, b] = input[i].split('   ');
    arr1.push(parseInt(a));
    arr2.push(parseInt(b));
  }
  let sum = 0
  for (let i = 0; i < arr1.length; i++) {
    let num = 0
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        num += 1
      }
    }
    sum += num * arr1[i]
  }
  return sum;
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
  trimTestInputs: false,
  onlyTests: false,
});
