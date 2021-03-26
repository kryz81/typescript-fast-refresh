interface Monitor {
  name: string;
  price: number;
}

// advantage: no need to modify type twice when Monitor price type has been changed
type MonitorPrice = Monitor["price"];

const myPrice: MonitorPrice = 10;

const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

// get type of elements of array
type MyPerson = typeof MyArray[number];

// get type of specific property of element from array
type MyPersonName = typeof MyArray[number]["name"];
