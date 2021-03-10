/*
    Partial
    All properties of given type will be optional
    The opposite to Partial is Required
 */

interface Student {
  name: string;
  age: number;
}

// all fields must be declared
const student1: Student = { name: "Student 1", age: 24 };

type StudentOptional = Partial<Student>;

// now ok
const student2: StudentOptional = { age: 34 };

/*
    ReadOnly
    Sets all fields to readonly
 */
type StudentReadonly = Readonly<Student>;
const student3: StudentReadonly = { name: "Student 2", age: 22 };

// student3.age = 23; error, it's readonly

// record
// pick
// omit
