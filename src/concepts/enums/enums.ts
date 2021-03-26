enum Direction {
  UP,
  DOWN,
  RIGHT,
  LEFT,
}

// get numeric value of an enum item
console.log(Direction.LEFT);

// string enum
enum Direction2 {
  UP = "UP",
  DOWN = "DOWN",
}

console.log(Direction2.DOWN);

const tmp = Direction2.DOWN;

if (tmp === "DOWN") {
  console.log("it is down");
}

// const enum - removed at compiled time
const enum Direction3 {
  LEFT,
  RIGHT,
}

const myDir = Direction3.RIGHT;
