const db = require("../config/database");

class Student{
    static all(){
        return new Promise((resolve, reject) => {
            const  query =  "SELECT * FROM students";
            db.query(query, (err, result) => {
                resolve(result);
            }); 
        });
    }

    static async create(data) {
        // insert database
        const id = await new Promise((resolve, reject) => {
            const query = "INSERT INTO students SET ?";
            db.query(query, data, (err, results) => {
                resolve(results.insertId);
            });
        });

        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM students WHERE id = ?";
            db.query(query, id, (err, results) => {
                resolve(results);
            });
        });
    }
}

module.exports = Student;