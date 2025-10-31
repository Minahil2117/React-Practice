//  Task 1 main.js
import { students } from "./student.mjs";
import { teachers } from "./teacher.mjs";

console.log("Student Information:");
students.forEach((student) => {
  const status = student.marks >= 70 ? "Pass" : "Fail";
  console.log(
    `Name: ${student.name}, Subject: ${student.subject}, Marks: ${student.marks}, Status: ${status}`
  );
});

console.log("\nTeacher Information:");
teachers.forEach((teacher) => {
  console.log(
    `Name: ${teacher.name}, Subject: ${teacher.subject}, Experience: ${teacher.experience}`
  );
});

