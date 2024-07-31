/// <reference path="Teacher.ts" />
// Reference to the 'Teacher.ts' file for type definitions.

namespace Subjects {
  // Group related classes and interfaces.

  export class Subject {
    // Class representing a subject with a teacher.

    teacher: Teacher; // Property to hold a teacher.

    setTeacher = (teacher: Teacher) => {
      // Method to set the teacher.
      this.teacher = teacher;
    }
  }
}

