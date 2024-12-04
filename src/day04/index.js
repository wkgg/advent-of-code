import run from "aocrunner";

const parseInput = (rawInput) => rawInput.split('\n').map(line => line.split(''));

const XMASCount = (x, i, j, input) => {
  let count = 0;
  if(x !== 'X') return count;

  if(input?.[i]?.[j+1]=== 'M' && input?.[i]?.[j+2] === 'A' && input?.[i]?.[j+3] === 'S') {
    count++;
  }
  if(input?.[i]?.[j-1]=== 'M' && input?.[i]?.[j-2] === 'A' && input?.[i]?.[j-3] === 'S') {
    count++;
  }
  if(input?.[i+1]?.[j]=== 'M' && input?.[i+2]?.[j] === 'A' && input?.[i+3]?.[j] === 'S') {
    count++;
  }
  if(input?.[i-1]?.[j]=== 'M' && input?.[i-2]?.[j] === 'A' && input?.[i-3]?.[j] === 'S') {
    count++;
  }
  if(input?.[i+1]?.[j+1]=== 'M' && input?.[i+2]?.[j+2] === 'A' && input?.[i+3]?.[j+3] === 'S') {
    count++;
  }
  if(input?.[i-1]?.[j-1]=== 'M' && input?.[i-2]?.[j-2] === 'A' && input?.[i-3]?.[j-3] === 'S') {
    count++;
  }
  if(input?.[i+1]?.[j-1]=== 'M' && input?.[i+2]?.[j-2] === 'A' && input?.[i+3]?.[j-3] === 'S') {
    count++;
  }
  if(input?.[i-1]?.[j+1]=== 'M' && input?.[i-2]?.[j+2] === 'A' && input?.[i-3]?.[j+3] === 'S') {
    count++;
  }
  return count;
}

const XMAS2Count = (x, i, j, input) => {
  if(x !== 'A') return 0;

  if(((input?.[i-1]?.[j-1] === 'M' && input?.[i+1]?.[j+1] === 'S') || (input?.[i-1]?.[j-1] === 'S' && input?.[i+1]?.[j+1] === 'M'))
    && ((input?.[i-1]?.[j+1] === 'M' && input?.[i+1]?.[j-1] === 'S') || (input?.[i-1]?.[j+1] === 'S' && input?.[i+1]?.[j-1] === 'M'))) {
    return 1;
  }
  return 0;
}

const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  let sum = 0;
  for(let i = 0; i < input.length; i++) {
    for(let j = 0; j < input[i].length; j++) {
      sum += XMASCount(input[i][j], i, j, input);
    }
  }
  return sum;
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  let sum = 0;
  for(let i = 0; i < input.length; i++) {
    for(let j = 0; j < input[i].length; j++) {
      sum += XMAS2Count(input[i][j], i, j, input);
    }
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
  trimTestInputs: true,
  onlyTests: false,
});
