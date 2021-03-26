interface Circle {
  radius: number;
}

interface Square {
  sideLength: number;
}

// shape can be a circle or a square
type Shape = Circle | Square;

// will throw error, because only Circle has radius, but the function expects Shape, which can also be Square

// function getArea(shape: Shape) {
// return Math.PI * shape.radius ** 2;
// }

// Types from type union can have common property, so called "discriminant"

interface MyCirlce {
  kind: "mycircle";
  radius: number;
}

interface MySquare {
  kind: "mysquare";
  sideLength: number;
}

type MyShape = MyCirlce | MySquare;

function getArea(shape: MyShape) {
  if (shape.kind === "mycircle") {
    // TS knows it's a MyCircle here
    return Math.PI * shape.radius ** 2;
  }

  // TS knows it's a MySquare here
  if (shape.kind === "mysquare") {
    return shape.sideLength ** 2;
  }

  // additional check
  // if a new type will be added to MyShape this will throw an error:
  // for example: type MyShape = MyCirlce | MySquare | { kind: "a" };
  const check: never = shape;
  return check;
}
