const studentModel = require('../models/studentModel');

exports.home = (req, res) => {
    const students = studentModel.getAllStudents();
    res.render('index', { students });
};

exports.showAddForm = (req, res) => {
    res.render('addStudent');
};

exports.addStudent = (req, res) => {
    const newStudent = {
        id: Date.now(),
        name: req.body.name,
        course: req.body.course
    };

    studentModel.addStudent(newStudent);

    res.redirect('/');
};

exports.showEditForm = (req, res) => {
    const student = studentModel.getStudentById(req.params.id);

    res.render('editStudent', { student });
};

exports.updateStudent = (req, res) => {
    const updatedStudent = {
        id: req.params.id,
        name: req.body.name,
        course: req.body.course
    };

    studentModel.updateStudent(req.params.id, updatedStudent);

    res.redirect('/');
};

exports.deleteStudent = (req, res) => {
    studentModel.deleteStudent(req.params.id);

    res.redirect('/');
};