// Define interfaces
interface Employee {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTasks(): string;
}

enum EmployeeType {
    Teacher = 'Teacher',
    Director = 'Director',
}

// Define classes
class Director implements Employee {
    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workTasks(): string {
        return 'Getting to director tasks';
    }
}

class Teacher implements Employee {
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTasks(): string {
        return 'Getting to work';
    }
}

// Create function with dependency injection
function createEmployee(salary: number | string): Employee {
    return typeof salary === 'number' && salary < 500 ? new Teacher() : new Director();
}

// Use type guards for safer type checking
const isDirector = (employee: Employee): boolean => employee instanceof Director;

// Polymorphic function using type guards
const executeWork = (employee: Employee): string => {
    return isDirector(employee) ? employee.workTasks() : employee.workTasks();
};

// Define Subjects enum
enum Subjects {
    Math = 'Math',
    History = 'History',
}

// Use Subjects enum in function
const teachClass = (todayClass: Subjects): string => {
    return todayClass === Subjects.Math ? 'Teaching Math' : 'Teaching History';
};

// Test the functions
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

const employee = createEmployee(200);
console.log(executeWork(employee));

console.log(teachClass(Subjects.Math));
console.log(teachClass(Subjects.History));
