
function getRandomGrade() {
    const grades = ['A', 'B', 'C', 'D', 'E'];
    return grades[Math.floor(Math.random() * grades.length)];
}

// Generate a list of students with grades
function generateScoreList() {
    const students = [
        { name: 'Student 1', grade: getRandomGrade('A') },
        { name: 'Student 2', grade: getRandomGrade('B') },
        { name: 'Student 3', grade: getRandomGrade('C') },
        { name: 'Student 4', grade: getRandomGrade('D') },
        { name: 'Student 5', grade: getRandomGrade('E') },
    ];

    return students;
}

// Display the score list
const scoreList = generateScoreList();
console.log("Score List:");
scoreList.forEach(student => {
    console.log(`${student.name}: Grade ${student.grade}`);
});
