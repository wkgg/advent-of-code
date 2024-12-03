import run from "aocrunner";

const parseInput = (rawInput) => rawInput.split('\n');

const checkSafe = (line) => {
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
  return safe
}

const part1 = (rawInput) => {
  const input = parseInput(rawInput);
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
  // console.log('input: ', input)
  let sum = 0
  let unsafeLine = []

  for (let i = 0; i < input.length; i++) {
    const line = input[i].split(' ').map(Number)
    const safe = checkSafe(line)
    if (safe) {
      sum += 1
    }else {
      unsafeLine.push(i)
    }
  }
  for (let i = 0; i < unsafeLine.length; i++) {
    const line = input[unsafeLine[i]].split(' ').map(Number)
    for (let j = 0; j < line.length; j++) {
      const newLine = line.slice(0, j).concat(line.slice(j + 1))
      const safe = checkSafe(newLine)
      if (safe) {
        sum += 1
        break;
      }
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
