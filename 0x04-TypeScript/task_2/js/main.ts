interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}
  
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

const createEmployee = (salary: number | string): Teacher | Director => {
  return Number(salary) < 500 ? new Teacher() : new Director();
};

const isDirector = (employee: Teacher | Director): employee is Director => {
  return employee instanceof Director;
};

const executeWork = (employee: Teacher | Director): void => {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
};

type Subjects = 'Math' | 'History';

const teachClass = (todayClass: Subjects): string => {
  return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
};

// Test the functions
const employee1 = createEmployee(300);
const employee2 = createEmployee(1000);

executeWork(employee1); // Output: Getting to work
executeWork(employee2); // Output: Getting to director tasks

console.log(teachClass('Math')); // Output: Teaching Math
console.log(teachClass('History')); // Output: Teaching History

