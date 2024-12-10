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


const canPutBrick = (input, x, y) => {
  let direction = 'up', i = x, j = y;
  let flag = false;
  const visited = new Set();
  while(i<input.length && j<input[i]?.length && i>=0 && j>=0) {
    if(!visited.has(`${i}-${j}-${direction}`)) {
      visited.add(`${i}-${j}-${direction}`);
    } else {
      flag = true;
      break;
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
  return flag;
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  const [x, y] = findX(input);
  let bricks = [];
  for(let i = 0; i < input.length; i++) {
    for(let j = 0; j < input[i].length; j++) {
      if(input[i][j] === '.') {
        let newInput = input.map(item => [...item]);
        newInput[i][j] = '#';
        if(canPutBrick(newInput, x, y) && !bricks.includes(`${i}-${j}`)) {
          bricks.push(`${i}-${j}`);
        }
      }
    }
  }


  console.log('bricks', bricks);
  console.log('length', bricks.length);
  return bricks.length;
};

// 6, 3
// 7, 6
// 7, 7
// 8, 1
// 8, 3
// 9, 7

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
        expected: 6,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
