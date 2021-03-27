// both classes can be used interchangeably, TS compares them structurally and they have the same fields

class BasicPerson {
  name!: string;
}

class EnhancedPerson {
  name!: string;
}

// works, although EnhancedPerson does not inherit from BasicPerson
const p1: EnhancedPerson = new BasicPerson();
