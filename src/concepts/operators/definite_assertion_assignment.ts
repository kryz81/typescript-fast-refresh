// error, because username has no initial value and nothing is assigned in the constructor
class UserNoInitialization {
  // @ts-ignore
  username: string;
}

// solution 1 - allow undefined
class UserAllowUndefined {
  username: string | undefined;
}

// solution 2 - set initial "empty" value
class UserInitialValue {
  username = "";
}

// solution 3 - set value in constructor
class UserInitInConstr {
  constructor(public username: string) {}
}

// solution 4 - definite assertion assignment operator
class User {
  firstname!: string;
}
