namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
    firstName: string;
  }

  // Specific class for Java subject, inheriting from Subject
  export class Java extends Subject {
    // Constructor accepts optional teacher parameter
    constructor(teacher?: Teacher) {
      super(teacher);
    }

    // Implementation of abstract method to get requirements for Java
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    // Override the method to get available teacher for Java
    getAvailableTeacher(): string {
      if (this.teacher?.experienceTeachingJava) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}
