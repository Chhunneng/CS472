function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = [];
}

Student.prototype.inputNewGrade = function (newGrade) {
    this.grades.push(newGrade);
};

Student.prototype.computeAverageGrade = function () {
    if (this.grades.length === 0) return 0;
    return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
};

const std1 = new Student("Bao", "Thai");
std1.inputNewGrade(85);
std1.inputNewGrade(90);
std1.inputNewGrade(78);

const std2 = new Student("Bai", "Thao");
std2.inputNewGrade(92);
std2.inputNewGrade(88);
std2.inputNewGrade(84);

const students = [std1, std2];

console.log(
    "Average all student:",
    students.reduce((sum, stu) => {
        return sum + stu.computeAverageGrade();
    }, 0) / students.length
);
