import run from "aocrunner";

const parseInput = (rawInput) => {
  const input = rawInput.split('\n');
  let input1 = {};
  let input2 = [];
  for(let i = 0; i < input.length; i++) {
    if(input[i].includes('|')) {
      const [key, value] = input[i].split('|');
      input1[key] = input1[key] ? [...input1[key], value] : [value];
    } else if(input[i].includes(',')) {
      input2.push(input[i].split(','));
    }
  }
  return [input1, input2];
};

const part1 = (rawInput) => {
  const [input1, input2] = parseInput(rawInput);
  let newInput = [];
  let sum = 0;
  for(let i = 0; i < input2.length; i++) {
    let flag = true;
    for(let j = 0; j < input2[i].length; j++) {
      if(input1[input2[i][j]]) {
        for(let k = 0; k < j; k++) {
          if(input1[input2[i][j]].includes(input2[i][k])) {
            flag = false;
            break;
          }
        }
      }
    }
    if(flag) {
      newInput.push(input2[i]);
    }
  }
  for(let i = 0; i < newInput.length; i++) {
    sum += parseInt(newInput[i][(newInput[i].length-1)/2]);
  }
  return sum;
};

const part2 = (rawInput) => {
  const [input1, input2] = parseInput(rawInput);
  let newInput = [];
  let sum = 0;
  for(let i = 0; i < input2.length; i++) {
    let flag = true;
    for(let j = 0; j < input2[i].length; j++) {
      if(input1[input2[i][j]]) {
        for(let k = 0; k < j; k++) {
          if(input1[input2[i][j]].includes(input2[i][k])) {
            flag = false;
            break;
          }
        }
      }
    }
    if(!flag) {
      newInput.push(input2[i]);
    }
  }
  for(let i = 0; i < newInput.length; i++) {
    newInput[i].sort((a, b) => {
      if(input1[a] && input1[a].includes(b)) {
        return -1;
      } else if(input1[b] && input1[b].includes(a)) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  for(let i = 0; i < newInput.length; i++) {
    sum += parseInt(newInput[i][(newInput[i].length-1)/2]);
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
