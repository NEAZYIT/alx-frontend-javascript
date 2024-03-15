namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
    firstName: string;
  }

  // Specific class for React subject, inheriting from Subject
  export class React extends Subject {
    // Constructor accepts optional teacher parameter
    constructor(teacher?: Teacher) {
      super(teacher);
    }

    // Implementation of abstract method to get requirements for React
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    // Override the method to get available teacher for React
    getAvailableTeacher(): string {
      if (this.teacher?.experienceTeachingReact) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}
