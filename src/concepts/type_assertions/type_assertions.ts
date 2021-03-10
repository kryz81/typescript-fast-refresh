interface Person {
  name: string;
}

// the type is {name: string}
const me = { name: "Kris" };

// here we say TS which type it really is
const me2 = { name: "Paul" } as Person;

// alternative syntax
const me3 = <Person>{ name: "Domi" };

// it's not possible to assert to completely incompatible type
// const x = "hello" as number;

// but there is a trick
const x = ("hello" as any) as number;
