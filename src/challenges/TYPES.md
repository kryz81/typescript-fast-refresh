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
    <summary>Show answer</summary>
    
    
* The __propToCheck__ variable is a __string__, because of "let" it can get other string values.
* Type __'title' | 'desc' | 'author'__ is more specific, it expects one of three possible strings.
* To fix it: declare type of __propToCheck__ or narrow the type by making the variable a __constant__.
</details>

