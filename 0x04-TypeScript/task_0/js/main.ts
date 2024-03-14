class Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;

    constructor(firstName: string, lastName: string, age: number, location: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }
}

function createStudent(firstName: string, lastName: string, age: number, location: string): Student {
    if (!firstName || !lastName || !age || !location) {
        throw new Error("All parameters are required.");
    }
    return new Student(firstName, lastName, age, location);
}

const students: Student[] = [
    createStudent("John", "Doe", 25, "New York"),
    createStudent("Jane", "Doe", 23, "London"),
];

function renderTable(studentList: Student[]) {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    // Get properties of Student class dynamically for table headers
    const headers = Object.keys(new Student("", "", 0, ""));

    // Add headers
    const headerRow = document.createElement("tr");
    headers.forEach(header => {
        const th = document.createElement("th");
        th.textContent = header[0].toUpperCase() + header.slice(1); // Capitalize the first letter
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    // Iterate over students and create table rows
    studentList.forEach(student => {
        const row = document.createElement("tr");
        headers.forEach(header => {
            const cell = document.createElement("td");
            cell.textContent = String(student[header]);
            row.appendChild(cell);
        });
        tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    document.body.appendChild(table);
}

renderTable(students);
