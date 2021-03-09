interface IProduct<T> {
  name: string;
  price: T;
  getPrice(): T;
}

type TProduct<T> = {
  name: string;
  price: T;
  getPrice(): T;
};

// it's possible to declare the same interface more than once
// it will extend the base version
interface IProduct<T> {
  amount: T;
}

const product: IProduct<number> = {
  name: "My Product",
  price: 20,
  amount: 2,
  getPrice() {
    return this.price;
  },
};
