// TS automatically knows that it's a number, declaring type is not needed
const myVar1 = 12;

// inferring properties of an object
const person = {
  name: "Max",
  age: 40,
  available: false,
};

// person.age = "twenty"; // error, "age" is a number

// inferring type of array elements
function square(values: number[]) {
  return values.map((value) => value * value);
}

// inferred number[]
const squares = square([1, 2, 3, 4, 5]);

// trap, type is "y", not string, because "y" is more specific and it's a constant, cannot change value
const myVar2 = "y";

// good practice: set type of an object literal to quickly detect type mistakes in the object body
interface Product {
  name: string;
  price: number;
}

const myVar3: Product = {
  name: "Product 1",
  price: 12.99,
};

interface Book {
  title: string;
  desc: string;
  author: string;
}

function getDetails(book: Book, prop: "title" | "desc" | "author") {
  return book[prop];
}

const book: Book = {
  title: "My Title",
  desc: "My Description",
  author: "The Author",
};

const propToCheck = "author";

// this call, why?

getDetails(book, propToCheck);
