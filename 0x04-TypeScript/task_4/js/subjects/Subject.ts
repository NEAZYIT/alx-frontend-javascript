namespace Subjects {
  // Define Teacher interface
  export interface Teacher {
    firstName: string;
    // Add other properties as needed
  }

  // Define Subject class
  export class Subject {
    private teacher?: Teacher;

    // Method to set the teacher for the subject
    setTeacher(teacher: Teacher): void {
      if (!teacher || !teacher.firstName) {
        throw new Error('Invalid teacher provided');
      }
      this.teacher = teacher;
    }

    // Method to get the available teacher for the subject
    getAvailableTeacher(): string {
      if (this.teacher) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}
