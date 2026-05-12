let students = [
    { id: 1, name: 'John Doe', course: 'BSIT' },
    { id: 2, name: 'Jane Smith', course: 'BSCS' }
];

module.exports = {
    getAllStudents: () => students,

    addStudent: (student) => {
        students.push(student);
    },

    getStudentById: (id) => {
        return students.find(student => student.id == id);
    },

    updateStudent: (id, updatedStudent) => {
        const index = students.findIndex(student => student.id == id);

        if (index !== -1) {
            students[index] = updatedStudent;
        }
    },

    deleteStudent: (id) => {
        students = students.filter(student => student.id != id);
    }
};