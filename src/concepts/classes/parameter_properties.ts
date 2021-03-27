class Website {
  // parameter properties - no need to declare class fields
  constructor(private readonly name: string, public readonly id: number) {}

  getName = () => {
    return this.name;
  };
}
