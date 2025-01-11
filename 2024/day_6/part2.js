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
  const content = input.replaceAll("\n", "");
  const startingPoint = content.indexOf("^");
  let place = startingPoint;

  const distinctPositions = new Set([]);

  const DIRECTIONS = [-rowWidth, 1, rowWidth, -1];
  let DIRECTIONS_INDEX = 0;

  while (true) {
    distinctPositions.add(place);
    const direction = DIRECTIONS.at(DIRECTIONS_INDEX);

    if (!content[place + direction]) {
      break;
    }

    place += direction;

    if (content[place + direction] === "#") {
      DIRECTIONS_INDEX++;
      if (DIRECTIONS_INDEX > DIRECTIONS.length - 1) {
        DIRECTIONS_INDEX = 0;
      }
    }
  }

  console.log("distinctPositions: ", distinctPositions);
  return distinctPositions.size;
};

console.log(guardGallivant(test));
