class Parent {
  // create index signature to validate class fields and methods
  [prop: string]: string | (() => string | number);

  static INSTANCES = 0;

  private _name = "parent";

  constructor() {
    console.log("[parent constructor]");
  }

  get name() {
    console.log("[name getter]");
    return this._name;
  }

  getNameLength() {
    return this._name.length;
  }

  // arrow function property
  getId = () => {
    return "id";
  };
}

class Child extends Parent {
  constructor() {
    // parent constructor needs to be called when class extends other class
    super();
    console.log("[child constructor]");
    Parent.INSTANCES++;
  }
}

const child = new Child();
console.log(child.name);
