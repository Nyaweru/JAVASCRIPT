// List of students with assigned numbers
const students = {
    101: "Alice",
    102: "Bob",
    103: "Charlie",
    104: "David",
    105: "Emma",
    106: "Frank",
    107: "Grace",
    108: "Hannah",
    109: "Isaac"
};

// Function to get a student’s name by number
function getStudentByNumber(number) {
    return students[number] || "Student not found";
}

console.log(getStudentByNumber(105)); // Output: Emma
console.log(getStudentByNumber(11)); // Output: Student not found
