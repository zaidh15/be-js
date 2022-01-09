// import database
const db = require("../config/database");

// membuat class Model Student
class Student {
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const query = "SELECT * from students";
      db.query(query, (err, results) => {
        // ternary operator untuk handle hasil promise: reject atau resolve
        err ? reject(err) : resolve(results);
      });
    });
  }

  static async create(data) {

    const id = await new Promise((resolve, reject) => {
      const query = "INSERT INTO students SET ?";
      db.query(query, data, (err, results) => {
        // ternary operator untuk handle hasil promise: reject atau resolve
        err ? reject(err) : resolve(results.insertId);
      });
    });

    const student = await this.find(id);
    return student;
  }

  static find(id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM students WHERE id = ?";
      db.query(query, id, (err, results) => {
        // destructing array
        const [student] = results;
        // ternary operator untuk handle hasil promise: reject atau resolve
        err ? reject(err) : resolve(student);
      });
    });
  }

  static async update(id, data) {
    // Promise 1: melakukan update data ke database
    await new Promise((resolve, reject) => {
      const query = "UPDATE students SET ? WHERE id = ?";
      db.query(query, [data, id], (err, results) => {
        // ternary operator untuk handle hasil promise: reject atau resolve
        err ? reject(err) : resolve(results);
      });
    });

    // Select data berdasarkan id menggunakan method find.
    const student = await this.find(id);
    return student;
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM students WHERE id = ?";
      db.query(query, id, (err, results) => {
        // ternary operator untuk handle hasil promise: reject atau resolve
        err ? reject(err) : resolve(results);
      });
    });
  }
}

// export class Student
module.exports = Student;