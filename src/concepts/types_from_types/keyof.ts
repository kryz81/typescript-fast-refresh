interface MyBook {
  title: string;
  year: number;
}

// create new type, possible values are the key names from MyBook
type BookProps = keyof MyBook;

const a: BookProps = "title";
