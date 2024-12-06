import run from "aocrunner";

const parseInput = (rawInput) => rawInput.split('\n').map(item => item.split(''));

const findX = (input) => {
  for(let i = 0; i < input.length; i++) {
    for(let j = 0; j < input[i].length; j++) {
      if(input[i][j] === '^') {
        return [i, j];
      }
    }
  }
  return [-1, -1];
}

const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  const [x, y] = findX(input);
  let position = [];
  let direction = 'up', i = x, j = y;
  while(i<input.length && j<input[i].length && i>=0 && j>=0) {
    if(!position.includes(`${i}-${j}`)) {
      position.push(`${i}-${j}`);
    }
    switch(direction) {
      case 'up':
        {
          if(input?.[i-1]?.[j] === '#') {
            direction = 'right';
          } else {
            i--;
          }
          break;
        }
      case 'right':
        {
          if(input?.[i]?.[j+1] === '#') {
            direction = 'down';
          } else {
            j++;
          }
          break;
        }
      case 'down':
        {
          if(input?.[i+1]?.[j] === '#') {
            direction = 'left';
          } else {
            i++;
          }
          break;
        }
      case 'left':
        {
          if(input?.[i]?.[j-1] === '#') {
            direction = 'up';
          } else {
            j--;
          }
          break;
        }
    }
  }

  return position.length;
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);

  return;
};

run({
  part1: {
    tests: [
      {
        input: `....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...`,
        expected: 41,
      },
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
