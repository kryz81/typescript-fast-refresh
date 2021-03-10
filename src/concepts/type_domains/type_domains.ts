// the smallest set, cannot set any value
let v1: never;

// v1 = 10; // error

// v2 is of type A, can contain only one value - "A"
type A = "A";
const v2: A = "A";

// v2 = "B"; // error "B" is not assignable to "A"

// narrowing number type to a set of 5 possible values
type B = 1 | 2 | 3 | 4 | 5;
const v3: B = 3;

// v3 = 10; // error, 10 not in the type domain

interface Person {
  name: string;
}

interface Age {
  age: number;
}

// new type has types from Person and Age
type PersonWithAge = Person & Age;

let person1: PersonWithAge = {
  name: "Person 1",
  age: 27,
};

// getting common keys from both types
type K = keyof Person & keyof Age;
// K will have type never, because there is no common field

// keys of both interfaces
type K1 = keyof Person | keyof Age;

// @todo: explain this:
type K2 = keyof (Person | Age);

const person2 = {
  name: "Person2",
  age: 34,
  city: "Berlin",
};

// why does it work? PersonWithAge doesn't have "city" property
// Answer: person2 has all needed fields and fulfills PersonWithAge type
person1 = person2;

interface Person {
  name: string;
}

// what is the difference?
const alice: Person = { name: "Alice" }; // we tell TS that alice is of type Person
const bob = { name: "Bob" } as Person; // we force TS treat type for bob as a Person, even if TS thinks it's other type
