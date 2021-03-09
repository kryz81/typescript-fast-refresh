interface Product {
  name: string;
  price: number;
}

function getProduct(id: number): Product | null {
  if (id === 0) {
    return null;
  }
  return { name: `Product ${id}`, price: id * 10 };
}

// the type is "Product | null"
const myProduct = getProduct(10);

// when using if, switch, instanceof, typeof, throw TS can narrow the type

if (myProduct !== null) {
  // here the type is "Product"
  console.log(myProduct.name);
}
