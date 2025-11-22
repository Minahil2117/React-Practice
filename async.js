// Create an array of objects
const employees = [
  {
    id: 1,
    name: "Ahsan",
    department: "HR",
    designation: "Manager",
  },
  {
    id: 2,
    name: "Darakshan",
    department: "Marketing",
    designation: "Executive",
  },
  {
    id: 3,
    name: "Sana",
    department: "Finance",
    designation: "Accountant",
  },
];

// Function to fetch employee data
const fetchEmployeeData = () => {
  return new Promise((resolve, reject) => {
    // Simulate a delay
    setTimeout(() => {
      if (employees) {
        resolve(employees);
      } else {
        reject("Unable to fetch employee data");
      }
    }, 3000);
  });
};

// Function to find an employee by name
const findEmployeeByName = (data) => {
  return new Promise((resolve, reject) => {
    // Simulate a delay
    setTimeout(() => {
      const employee = data.find((person) => person.name.toLowerCase() === "darakshan");
      if (employee) {
        resolve(employee);
      } else {
        reject("Employee not found");
      }
    }, 3000);
  });
};

// Async function to fetch and display employee data
async function displayEmployeeData() {
  try {
    const employeeData = await fetchEmployeeData();
    const employee = await findEmployeeByName(employeeData);
    console.log(`Employee name: ${employee.name.toLowerCase()}`);
  } catch (error) {
    console.error(error);
  }
}

// Call the async function
console.log("Fetching employee data...");
displayEmployeeData();


