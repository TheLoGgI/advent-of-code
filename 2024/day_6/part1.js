const path = "day_6/input.txt";
// const path = "day_6/input-test.txt";
const file = Bun.file(path);
const test = await file.text();

const guardGallivant = (input) => {
  // UP --> -rowWidht
  // RIGHT --> +1
  // LEFT --> -1
  // DOWN --> +rowWidth
  const rowWidth = input.split("\n")[0].length;
  console.log("rowWidth: ", rowWidth);
  const content = input.replaceAll("\n", "");
  const startingPoint = content.indexOf("^");
  console.log("content: ", content);
  let place = startingPoint;

  const distinctPositions = new Set([startingPoint]);

  const DIRECTIONS = {
    UP: -rowWidth,
    RIGHT: 1,
    DOWN: rowWidth,
    LEFT: -1,
  };

  let direction = DIRECTIONS.UP;

  while (true) {
    distinctPositions.add(place);

    if (!content[place + direction]) {
      break;
    }

    if (direction === DIRECTIONS.UP && content[place - rowWidth] === "#") {
      //   console.log("UP");
      direction = DIRECTIONS.RIGHT;
    }

    if (direction === DIRECTIONS.RIGHT && content[place + 1] === "#") {
      //   console.log("RIGHT", place + 1, content[place + 1]);
      direction = DIRECTIONS.DOWN;
    }

    if (direction === DIRECTIONS.DOWN && content[place + rowWidth] === "#") {
      //   console.log("DOWN", place + rowWidth, content[place + rowWidth]);
      direction = DIRECTIONS.LEFT;
    }

    if (direction === DIRECTIONS.LEFT && content[place - 1] === "#") {
      //   console.log("LEFT");
      direction = DIRECTIONS.UP;
    }

    place += direction;
  }

  return distinctPositions.size;
};

console.log(guardGallivant(test));
