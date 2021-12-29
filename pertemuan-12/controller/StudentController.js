 
// TODO 3: Import data students dari folder data/students.js
// code here
const students = require("../data/students");
const Student = require("../models/Student");

// Membuat Class StudentController
class StudentController {
  async index (req, res) {
    const students = await Student.all();
    const data = {
      message: "Menampilkan semua students",
      data: students,
    };

    res.json(data);
  }

  async store(req, res) {
    // const { nama } = req.body;
    const students = await Student.create(req.body);

    const data = {
      message: `Menambahkan data student`,
      data: students,
    };

    res.json(data);
  }

  update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;

    // TODO 6: Update data students
    // code here
    students[id] = nama;

    const data = {
      message: `Mengedit student id ${id}, nama ${nama}`,
      data: students,
    };

    res.json(data);
  }

  destroy(req, res) {
    const { id } = req.params;

    // TODO 7: Hapus data students
    // code here
    students.splice(id);

    const data = {
      message: `Menghapus student id ${id}`,
      data: students,
    };

    res.json(data);
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
