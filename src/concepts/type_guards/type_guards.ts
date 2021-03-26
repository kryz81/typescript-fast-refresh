// user defined type guard - function with type predicate

interface Square {
  length: number;
}

interface Circle {
  radius: number;
}

type Shape1 = Square | Circle;

// type guard checking whether it's a circle
function isCircle(shape: Shape1): shape is Circle {
  return (shape as Circle).radius !== undefined;
}

const shape: Shape1 = {
  radius: 10,
};

if (isCircle(shape)) {
  console.log("it is a circle");
}
