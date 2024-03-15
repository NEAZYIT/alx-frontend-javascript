namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
    firstName: string;
  }

  // Abstract class Subject to serve as a base for specific subjects
  export abstract class Subject {
    protected teacher?: Teacher;

    constructor(teacher?: Teacher) {
      this.teacher = teacher;
    }

    abstract getRequirements(): string;

    getAvailableTeacher(): string {
      if (this.teacher?.experienceTeachingC) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }

  // Specific class for Cpp subject, inheriting from Subject
  export class Cpp extends Subject {
    // Constructor accepts optional teacher parameter
    constructor(teacher?: Teacher) {
      super(teacher);
    }

    // Implementation of abstract method to get requirements for Cpp
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }
  }
}
