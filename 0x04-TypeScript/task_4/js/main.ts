import { Subjects } from "./Subjects";

// Create instances of subjects
const cpp = new Subjects.Cpp();
const java = new Subjects.Java();
const react = new Subjects.React();

// Define a teacher for C
const cTeacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10,
};

// Print information for C++
console.log("C++");
try {
  cpp.setTeacher(cTeacher);
  console.log(cpp.getRequirements());
  console.log(cpp.getAvailableTeacher());
} catch (error) {
  console.error("Error setting teacher for C++:", error.message);
}

// Print information for Java
console.log("\nJava");
try {
  java.setTeacher(cTeacher);
  console.log(java.getRequirements());
  console.log(java.getAvailableTeacher());
} catch (error) {
  console.error("Error setting teacher for Java:", error.message);
}

// Print information for React
console.log("\nReact");
try {
  react.setTeacher(cTeacher);
  console.log(react.getRequirements());
  console.log(react.getAvailableTeacher());
} catch (error) {
  console.error("Error setting teacher for React:", error.message);
}
