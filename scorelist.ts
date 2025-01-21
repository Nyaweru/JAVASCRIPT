
// Define a type for a Student
type Student = {
    name: string;
    grade: string;
  };
  
  // Function to generate a random grade
  function getRandomGrade(): string {
    const grades: string[] = ['A', 'B', 'C', 'D', 'E'];
    return grades[Math.floor(Math.random() * grades.length)];
  }
  
  // Function to generate a score list of 5 students
  function generateScoreList(): Student[] {
    const students: Student[] = [];
  
    for (let i = 1; i <= 5; i++) {
      const student: Student = {
        name: `Student ${i}`,
        grade: getRandomGrade(),
      };
      students.push(student);
    }
  
    return students;
  }
  
  // Generate and display the score list
  const scoreList = generateScoreList();
  console.log("Score List:");
  scoreList.forEach(student => {
    console.log(`${student.name}: Grade ${student.grade}`);
  });
  