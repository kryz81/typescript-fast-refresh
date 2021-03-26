function test(check: string): boolean {
  return check.length > 0;
}

// get return type of a function
type TestResult = ReturnType<typeof test>;

const result: TestResult = true;
