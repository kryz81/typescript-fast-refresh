// simple type
const price = 50.2;

interface Book {
  price: number;
}

// reference
const book1: Book = {
  price: 20,
};

// but it's possible to modify properties of referenced object
book1.price = 10;

// make all properties read-only
const book2: Readonly<Book> = {
  price: 15,
};

// won't work, all props are read-only
// book2.price = 12;

// readonly arrays
const items: ReadonlyArray<number> = [10, 20, 30];

// won't work, cannot modify readonly array
// items.push(40);

// alternative: const assertion

const meals = ["flaki", "pizza", "pommes"] as const;

// now meals array is readonly

// const assertion

const monitor = {
  price: 10,
} as const;

// all props are readonly
// monitor.price = 20;
