// Define Teacher interface with strict typing
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    yearsOfExperience?: number;
    [key: string]: any; // Allow additional properties
}

// Define Directors interface extending Teacher
interface Directors extends Teacher {
    numberOfReports: number;
}

// Teacher class implementation
class BaseTeacher implements Teacher {
    constructor(
        public readonly firstName: string,
        public readonly lastName: string,
        public fullTimeEmployee: boolean,
        public location: string,
        public yearsOfExperience?: number,
    ) {}
}

// Director class extending Teacher
class Director extends BaseTeacher implements Directors {
    constructor(
        firstName: string,
        lastName: string,
        fullTimeEmployee: boolean,
        location: string,
        public numberOfReports: number,
        yearsOfExperience?: number,
    ) {
        super(firstName, lastName, fullTimeEmployee, location, yearsOfExperience);
    }
}

// Create instances of Teacher and Director
const teacher1 = new BaseTeacher('Frank', 'Donald', true, 'New Jersey');
const director1 = new Director('John', 'Smith', true, 'America', 17);

// Define function type for printTeacher
type PrintTeacherFunction = (firstName: string, lastName: string) => string;

// Implement printTeacher function
const printTeacher: PrintTeacherFunction = (firstName, lastName) => `${firstName[0]}. ${lastName}`;

console.log(teacher1);
console.log(director1);
console.log(printTeacher('John', 'Doe'));

// Define StudentClassInterface
interface StudentClassInterface {
    firstName: string;
    lastName: string;
}

// Define constructor interface for StudentClass
interface StudentClassConstructorInterface {
    new(firstName: string, lastName: string): StudentClassInterface;
}

// Implement StudentClass
class StudentClass implements StudentClassInterface {
    constructor(public firstName: string, public lastName: string) {}

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

// Create function to instantiate StudentClass
function createStudent(cStudent: StudentClassConstructorInterface, firstName: string, lastName: string): StudentClassInterface {
    return new cStudent(firstName, lastName);
}

// Create student1 using createStudent function
const student1 = createStudent(StudentClass, 'Mike', 'Tyson');
console.log(student1);
