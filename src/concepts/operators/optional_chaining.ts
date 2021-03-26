const myCar = {
  name: "car",
} as any;

// throws an error, because cannot read "month" property from undefined object
// console.log(myCar.age.month);

// with optional chaining, returns undefined, doesn't throw an error
console.log(myCar.age?.month);
