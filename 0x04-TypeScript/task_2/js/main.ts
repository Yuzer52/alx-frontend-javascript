// Define DirectorInterface with the required methods
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Define TeacherInterface with the required methods
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Implement the Director class based on DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Implement the Teacher class based on TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Function to create an employee based on salary
const createEmployee = (salary: number | string): Teacher | Director => {
  return Number(salary) < 500 ? new Teacher() : new Director();
};

// Type guard to check if an employee is a Director
const isDirector = (employee: Teacher | Director): employee is Director => {
  return employee instanceof Director;
};

// Function to execute work based on employee type
const executeWork = (employee: Teacher | Director): void => {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
};

// Define Subjects as a string literal type
type Subjects = 'Math' | 'History';

const teachClass = (todayClass: Subjects): string => {
  return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
};

const employee1 = createEmployee(300); // Should create a Teacher
const employee2 = createEmployee(1000); // Should create a Director

executeWork(employee1); // Output: Getting to work
executeWork(employee2); // Output: Getting to director tasks

// Test teaching classes
console.log(teachClass('Math')); // Output: Teaching Math
console.log(teachClass('History')); // Output: Teaching History

