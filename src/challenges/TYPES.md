# Types

### Question 1

```typescript
interface Book {title: string, desc: string, author: string};

function getDetails(book: Book, prop: 'title' | 'desc' | 'author') {
    return book[prop];
}

const book: Book = {
    title: "My Title",
    desc: "My Description",
    author: "The Author"
}

let propToCheck = "author";

// this won't compile, why?

getDetails(book, propToCheck);
```

<details>
    <summary><strong>Show answer</strong></summary>
    <br />

* The __propToCheck__ variable is a __string__, because of "let" it can get other string values.
* Type __'title' | 'desc' | 'author'__ is more specific, it expects one of three possible strings.
* To fix it: declare type of __propToCheck__ or narrow the type by making the variable a __constant__.
</details>

___

### Question 2

```typescript
const a1 = [1, 2, 3];
const a2 = [1, 2, 3] as const;

// What are the inferred types of these two variables?
```

<details>
    <summary><strong>Show answer</strong></summary>
    <br />

* __a1: number[]__, because we can add more numbers to the array
* __a2: [1, 2, 3]__, because TS will narrow the type (with __as const__ the array becomes readonly)
</details>
