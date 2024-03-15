namespace Subjects {
  /**
   * Interface representing a teacher.
   */
  export interface Teacher {
    /** The first name of the teacher. */
    firstName: string;
    /** The last name of the teacher. */
    lastName: string;
    /** (Optional) The email address of the teacher. */
    email?: string;
    /** (Optional) The age of the teacher. */
    age?: number;
    /** (Optional) The years of experience of the teacher. */
    yearsOfExperience?: number;
  }
}
