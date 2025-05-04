const student = {
    firstName: "",
    lastName: "",
    grades: [],

    inputNewGrade(newGrade) {
        this.grades.push(newGrade);
    },

    computeAverageGrade() {
        if (this.grades.length === 0) return 0;
        return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
    },
};

const std1 = Object.create(student);
std1.firstName = "Bao";
std1.lastName = "Thai";
std1.grades = [85, 90];
std1.inputNewGrade(78);

const std2 = Object.create(student);
std2.firstName = "Bai";
std2.lastName = "Thao";
std2.grades = [92, 88, 84];

const students = [std1, std2];

console.log(
    "Average all student:",
    students.reduce((sum, stu) => {
        return sum + stu.computeAverageGrade();
    }, 0) / students.length
);
