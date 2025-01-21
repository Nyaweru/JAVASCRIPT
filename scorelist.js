// Function to generate a random grade
function getRandomGrade() {
    var grades = ['A', 'B', 'C', 'D', 'E'];
    return grades[Math.floor(Math.random() * grades.length)];
}
// Function to generate a score list of 5 students
function generateScoreList() {
    var students = [];
    for (var i = 1; i <= 5; i++) {
        var student = {
            name: "Student ".concat(i),
            grade: getRandomGrade(),
        };
        students.push(student);
    }
    return students;
}
// Generate and display the score list
var scoreList = generateScoreList();
console.log("Score List:");
scoreList.forEach(function (student) {
    console.log("".concat(student.name, ": Grade ").concat(student.grade));
});
