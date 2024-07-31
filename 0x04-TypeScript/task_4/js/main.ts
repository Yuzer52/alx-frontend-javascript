/// <reference path="Teacher.ts" />
/// <reference path="Subjects.ts" />

// Log C++ subject information
console.log('C++');
Subjects.cpp.setTeacher(Subjects.cTeacher);
console.log(Subjects.cpp.getRequirements()); // Output: Here is the list of requirements for Cpp
console.log(Subjects.cpp.getAvailableTeacher()); // Output: Available Teacher

console.log('Java');
Subjects.java.setTeacher(Subjects.cTeacher);
console.log(Subjects.java.getRequirements()); //list of requirements for Java
console.log(Subjects.java.getAvailableTeacher()); 

console.log('React');
Subjects.react.setTeacher(Subjects.cTeacher);
console.log(Subjects.react.getRequirements()); //list of requirements for React
console.log(Subjects.react.getAvailableTeacher()); 

