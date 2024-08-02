// Define the Teacher interface with readonly and optional properties
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any; // Allows additional properties
}

// Define the Directors interface that extends Teacher and adds numberOfReports
interface Directors extends Teacher {
  numberOfReports: number;
}

// Define the printTeacher function type
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Define the constructor interface for the StudentClass
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Define the StudentClass interface with required methods
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Implement the StudentClass based on the interface
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method to simulate working on homework
  workOnHomework(): string {
    return 'Currently working';
  }

  // Method to display the student's first name
  displayName(): string {
    return this.firstName;
  }
}

// Create a new student instance and log the methods' output
const student = new StudentClass('Zelalem', 'Aster');
console.log(student.displayName()); // Output: Zelalem
console.log(student.workOnHomework()); // Output: Currently working

